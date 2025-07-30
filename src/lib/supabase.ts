import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://eczkuctmisyhcyoliowh.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjemt1Y3RtaXN5aGN5b2xpb3doIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4ODYxMTIsImV4cCI6MjA2OTQ2MjExMn0.kYvzrXsvZzrg8QOCtgfl6ZWzmsAnk9zj91EbGfkFtCA'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
