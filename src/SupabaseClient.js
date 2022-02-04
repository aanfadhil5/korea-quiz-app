import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gzyupgfutzntfohmyvxq.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQzMDk4NDM3LCJleHAiOjE5NTg2NzQ0Mzd9.BfRthjdmX-WKKJYhzu0zDWYeRxpmZ9ly7yR6-whh1KI";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
