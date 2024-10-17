import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rfqeegisvkheqvqbjypa.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmcWVlZ2lzdmtoZXF2cWJqeXBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg4NjQ0MTEsImV4cCI6MjA0NDQ0MDQxMX0.EcyWjV4UtZmD-QhJrPMayQJpCYpuJavtuzxHDnE_A4o";
export const supabase = createClient(supabaseUrl, supabaseKey);
