import { Session } from '@supabase/supabase-js';

interface Snippet {
    id: string;
    title: string;
    code: string;
}
export interface ProfileStore {
    session: Session | null;
    username: string | null;
    avatar_url: string | null;
    website: string | null;
    snippetList: Snippet[] | null;
    setSession: (session: Session | null) => void;
    setUsername: (username: string | null) => void;
    setAvatarUrl: (avatar_url: string | null) => void;
    setWebsite: (website: string | null) => void;
    setSnippetList: (snippetList: Snippet[] | null) => void;
}
