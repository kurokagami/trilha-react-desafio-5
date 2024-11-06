import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://yecsuzurbjvhjdplzfif.supabase.co/rest/v1/',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InllY3N1enVyYmp2aGpkcGx6ZmlmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMDg3NzEzNiwiZXhwIjoyMDQ2NDUzMTM2fQ.KUwFAPVi6rndl4OUEILCXoQH5-AxOXIEW_emMXSan6o",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InllY3N1enVyYmp2aGpkcGx6ZmlmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMDg3NzEzNiwiZXhwIjoyMDQ2NDUzMTM2fQ.KUwFAPVi6rndl4OUEILCXoQH5-AxOXIEW_emMXSan6o"
    }
})