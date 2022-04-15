import { ProfileStore } from 'src/@types/store';
import create, { SetState, GetState } from 'zustand';
import { Session } from '@supabase/supabase-js';

const useProfileStore = create<ProfileStore>((set: SetState<ProfileStore>, get: GetState<ProfileStore>) => ({
    session: null,
    username: null,
    avatar_url: null,
    website: null,
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
}));

export default useProfileStore;
