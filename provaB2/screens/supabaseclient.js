import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://orlyqzwmjcbylirnjcrd.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ybHlxendtamNieWxpcm5qY3JkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE4OTI0NTYsImV4cCI6MjA0NzQ2ODQ1Nn0.3d5LlpO4PE_c1kUMO6ts6NpwlP2ovuiyX4_GCDOay-o';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
