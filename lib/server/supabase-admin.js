import { createClient } from '@supabase/supabase-js';

/*
  Create an admin client for supabase to manage the database
*/
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);
