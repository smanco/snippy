import { ProfileStore, Snippet } from 'src/@types/store';
import create, { SetState, GetState } from 'zustand';
import { devtools, subscribeWithSelector } from 'zustand/middleware';
import { Session } from '@supabase/supabase-js';

const profileStore = (set: SetState<ProfileStore>, get: GetState<ProfileStore>) => ({
    session: null,
    username: null,
    avatar_url: null,
    website: null,
    snippetList: null,
    setSession: (session: Session | null): void => {
        set({ session });
    },
    setUsername: (username: string | null): void => {
        set({ username });
    },
    setAvatarUrl: (avatar_url: string | null): void => {
        set({ avatar_url });
    },
    setWebsite: (website: string | null): void => {
        set({ website });
    },
    setSnippetList: (snippetList: Snippet[] | null): void => {
        set({ snippetList });
    },
});

const useProfileStore = create<ProfileStore>(devtools(profileStore));

export default useProfileStore;
