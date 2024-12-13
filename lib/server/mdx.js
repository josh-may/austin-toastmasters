import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import sizeOf from "image-size";
import path from "path";

async function readMdxFile(dir, slug) {
  try {
    return await readFile(path.join(dir, `${slug}.mdx`), "utf8");
  } catch {
    return null;
  }
}

function getImageSize(src, dir) {
  const absolutePathRegex = /^(?:[a-z]+:)?\/\//;
  if (absolutePathRegex.exec(src)) return;

  const shouldJoin = !path.isAbsolute(src) || src.startsWith("/");
  if (dir && shouldJoin) src = path.join(dir, src);

  return sizeOf(src);
}

async function getMdxStaticProps(dir, slug) {
  if (!slug) return null;

  const fileContent = await readMdxFile(dir, slug);

  if (!fileContent) return null;

  const { content, data: frontMatter } = matter(fileContent);

  return {
    slug,
    content,
    frontMatter,
  };
}

async function getMdxStaticPaths(dir) {
  const paths = [];

  try {
    const files = await readdir(path.join(process.cwd(), dir));

    files.forEach((file) => {
      if (!file.endsWith(".mdx")) return;

      paths.push({ params: { slug: file.replace(".mdx", "") } });
    });
  } catch {}

  return paths;
}

async function getAllMdxEntries(dir) {
  const paths = await getMdxStaticPaths(dir);
  const entries = (
    await Promise.all(
      paths.map(async ({ params: { slug } }) => {
        return await getMdxStaticProps(dir, slug);
      })
    )
  ).filter((entry) => entry !== null);

  return entries;
}

export { getImageSize, getMdxStaticProps, getMdxStaticPaths, getAllMdxEntries };
