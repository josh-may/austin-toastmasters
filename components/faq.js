import React from "react";

const FAQItem = ({ question, answer }) => (
  <div className="mb-6">
    <h3 className="font-bold text-2xl text-gray-100">{question}</h3>
    <p className="text-lg">{answer}</p>
  </div>
);

const FAQ = () => {
  const faqItems = [
    {
      question: "What is Toastmasters?",
      answer:
        "Toastmasters International is a nonprofit educational organization that builds confidence and teaches public speaking skills through a worldwide network of clubs that meet online and in person. In a supportive environment, members prepare and deliver speeches, respond to impromptu questions, and give and receive constructive feedback. Founded in 1924, the organization is headquartered in Englewood, Colorado with approximately 270,000 members in more than 14,200 clubs in 148 countries.",
    },
    {
      question: "How much does a membership cost?",
      answer:
        "Currently, the cost is $60 every 6 months but subject to change. If you have special considerations, just ask the Vice President of Membership.",
    },
    {
      question: "What is a typical toastmasters meeting?",
      answer:
        "Time is important so please always arrive on time before 6:15pm. The daily agenda will be passed out on the tables. You will also find a blank form where you can provide feedback to the speakers. We encourage guests to provide feedback to all speakers! The Toastmaster runs the show and will go over the other key roles that make this club great. There will be 3-4 prepared speeches, table topics, 3-4 evaluators.",
    },
    {
      question: "How do I become a member?",
      answer:
        "Obtain a membership application from the Vice President of Membership, from another officer, or online. Fill it out, turn it in with the appropriate dues, sign up for roles, and you're in! Create an account with easy-speak.org and create a separate account with Toastmasters.org. Take the Pathways assessment and sign up for your 1st speech on Easy Speak. Follow us up Facebook and Twitter. Join us on our Slack channel to hear about the latest location change and communicate last minute cancellations. Confused? Talk with a member for any clarification. We are here to help!",
    },
    {
      question: "Do I need to bring anything before the meeting?",
      answer: "A writing utensil and a positive attitude!",
    },
    {
      question: "How many times can I visit as a guest before joining?",
      answer: "As many times as you'd like.",
    },
    {
      question: "Where do you meet?",
      answer: "In person.",
    },
    {
      question: "Is everyone in your club a good speaker?",
      answer:
        "Absolutely not...but they could be. Sure, we've got talented, long-time members and newer members with prior speaking experience. But the club exists for members at all levels, from knee-knocking, stomach-in-the-throat, \"I think I'm going to faint\" type people to professional speakers polishing their latest material. It's this mix of talents that helps us learn and help each other. And yes, many pros learn every day from Toastmasters feedback and tips. Watching and helping people grow keeps us all coming back.",
    },
    {
      question: "When do I have to give my first speech?",
      answer:
        "Our club lets you move at your own pace. After signing up with Pathways, you can work at your own pace. If you want to reap the full benefits of membership, however, you'll start delivering prepared speeches soon after joining. Everyone's 1st speech is an ice-breaker speech. Tell us more about yourself! Afterwards, you can sign up for a speech every 4 weeks.",
    },
    {
      question: "What do I do for my first speech?",
      answer:
        "The first speech is on a topic you know plenty about - yourself! The basic Competent Communicator Manual provides guidance and direction, and your mentor will also help you.",
    },
    {
      question: "Do I have to participate in Table Topics right away?",
      answer:
        "We don't pressure members, but isn't that why you would join Toastmasters - to speak? Not to worry - we are very understanding. If you cannot think of a response, make up a story! You have a minimum of 1 minute to speak. If you already have a supporting role, you won't be asked to participate in table topics at the same time.",
    },
    {
      question: "How do you decide who has what roles for each meeting?",
      answer:
        "A sign-up sheet is circulated at the meetings, and members sign up for the roles and dates they want during the next month. The VP of Education then fills in any open spots with the names of other members who want to advance. You can also sign up for a role in Easy Speak.",
    },
    {
      question: "Are there other Toastmaster clubs in Austin?",
      answer:
        "Yes. There are more than 60+ clubs around town, and we encourage you to visit a few. But make ours one of them - you'll quickly understand our little motto. Each member and each club have a chemistry, and you'll know when you have found a comfortable fit. Our atmosphere appeals to a broad mix of busy professionals, students, and even several pro speakers. There is an opportunity for everyone!",
    },
    {
      question: "I am not a native English speaker.",
      answer:
        "We have several members for whom English is not their native language. Delivering prepared speeches in front of others is a good way to hone one's skills. As for the rest of us, behaving respectfully towards others is a part of good listening.",
    },
  ];

  return (
    <section className="w-full">
      <div className="border-gray-400 border p-6 shadow-md">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-200">
          FAQS
        </h2>
        {faqItems.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
