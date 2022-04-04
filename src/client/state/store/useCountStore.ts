import create, { SetState, GetState } from 'zustand';

type CountStore = {
    count: number,
    increment: () => void
};

const useCountStore =
    create <
    CountStore >
    ((set: SetState<CountStore>, get: GetState<CountStore>) => ({
        count: 0,
        increment: (): void => {
            const { count } = get();
            set({ count: count + 1 });
        }
    }));

export default useCountStore;