import { createClient } from '@supabase/supabase-js';

// const REACT_APP_SUPABASE_URL = 'https://pfrzxturzauzdfftywav.supabase.co';
const REACT_APP_SUPABASE_URL = 'http://localhost:8000';
// const REACT_APP_SUPABASE_ANON_KEY =
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmcnp4dHVyemF1emRmZnR5d2F2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDg3MzYzMDYsImV4cCI6MTk2NDMxMjMwNn0.Xpg6f8Kvgk4zjoRbc0OYLG59ykCHBlZu7AAryqdmItQ';
const REACT_APP_SUPABASE_ANON_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UiLAogICAgImlhdCI6IDE2NTA0MDU2MDAsCiAgICAiZXhwIjogMTgwODE3MjAwMAp9.6xDtVk7yWYQgbclSM29xyLdFCl-IGgSN2J0TF-t0v98';

const supabaseUrl = REACT_APP_SUPABASE_URL;
const supabaseAnonKey = REACT_APP_SUPABASE_ANON_KEY;

const supabaseOptions = {
    headers: { 'Content-Type': 'application/json' },
};

// eslint-disable-next-line import/prefer-default-export
const supabase = createClient(supabaseUrl, supabaseAnonKey, supabaseOptions);

export default supabase;
