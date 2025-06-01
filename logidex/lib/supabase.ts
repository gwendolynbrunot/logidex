import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
// import { cookies } from 'next/headers';

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createPagesBrowserClient();

// export const supabaseServer = () =>
//   createServerComponentClient({ cookies });

export async function createDecision(decision) {
  const {
    data: { user }
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from('decisions')
    .insert([
      {
        ...decision,
        user_id: user?.id,
      }
    ]);

  if (error) throw error;
  return data;
}

export async function getDecisions() {
  const {
    data: { user }
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from('decisions')
    .select('*')
    .eq('user_id', user?.id)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}
