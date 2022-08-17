import create from "zustand";

interface IStore {
  isLoggedIn: boolean;

  contacts: IContact[];

  selectedContactId: string | null;
  selectContact: (contactId: string | null) => void;
  unselectContact: () => void;

  privacyModeEnabled: boolean;
  togglePrivacyMode: () => void;

  searchTerm: string;
  setSearchTerm: (newSearchTerm: string) => void;
}

const useStore = create<IStore>()((set) => ({
  isLoggedIn: true,

  contacts: [
    { firstName: "milan", lastName: "marcinco", avatarUrl: "/avatars/avatar-3.png", id: "1" },
    { firstName: "marty", lastName: "ciz", avatarUrl: "/avatars/avatar-1.png", id: "2" },
    { firstName: "valter", lastName: "martinek", avatarUrl: "/avatars/avatar-2.png", id: "3" },
    { firstName: "ahmed", lastName: "al hafoudh", avatarUrl: "/avatars/avatar-5.png", id: "4" },
  ],

  selectedContactId: null,
  selectContact: (contactId) => set({ selectedContactId: contactId, searchTerm: "" }),
  unselectContact: () => set({ selectedContactId: null }),

  privacyModeEnabled: false,
  togglePrivacyMode: () => set((state) => ({ privacyModeEnabled: !state.privacyModeEnabled, searchTerm: "" })),

  searchTerm: "",
  setSearchTerm: (newSearchTerm) => set({ searchTerm: newSearchTerm, privacyModeEnabled: false }),
}));

export default useStore;
