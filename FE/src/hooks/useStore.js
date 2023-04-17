import create from "zustand";

export const useStore = create((set) => ({
  userName: "",
  admin: false,
  bill: [],
  foods: [],
  setUserName: (value) => set(() => ({ userName: value })),
  setAdmin: (value) => set(() => ({ admin: value })),
  setFoods: (value) => set(() => ({ foods: value })),
  addBill: (value) => set((state) => ({ bill: [...state.bill,value] })),
  deleteBill: (name) => set((state) => ({ bill: state.bill.filter(b => b.name != name) })),
  clearBill: (name) => set((state) => ({ bill: [] }))
  // allBill: () => set(()=> )
}));
