import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface UserState {
  income: number;
  list: ListType[];
  history: HistoryType[];
  addHistory: (item: HistoryType) => void;
  removeList: (item: ListType) => void;
  addList: (item: ListType) => void;
  setIncome: (amt: number) => void;
  emptyList: () => void;
  emptyHistory: () => void;
}

const useUserStore = create<UserState, [["zustand/persist", unknown]]>(
  persist(
    (set) => ({
      income: 0,
      list: [],
      history: [],
      emptyList: () => {
        set(() => ({ list: [] }));
      },
      emptyHistory: () => {
        set(() => ({ history: [] }));
      },
      addHistory: (item: HistoryType) => {
        set((state) => ({ history: [item, ...state.history] }));
      },
      setIncome: (amt: number) => {
        set(() => ({ income: amt }));
      },
      addList: (item: ListType) => {
        set((state) => ({ list: [item, ...state.list] }));
      },
      removeList: (item: ListType) => {
        set((state) => {
          const dataList = state.list.filter((l) => l.id !== item.id);

          return { list: dataList };
        });
      },
    }),
    {
      name: "user",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUserStore;
