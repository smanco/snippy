import { Session } from '@supabase/supabase-js';
export interface ProfileStore {
    session: Session | null;
    username: string | null;
    avatar_url: string | null;
    website: string | null;
    setSession: (session: Session | null) => void;
    setUsername: (username: string | null) => void;
    setAvatarUrl: (avatar_url: string | null) => void;
    setWebsite: (website: string | null) => void;
}
