import {create} from 'zustand'

type Store = {
    value: boolean;
    updateValue: (value: boolean) => void
}

export const useMenu = create<Store>((set) => ({
    value: false,
    updateValue: (value) => set({value: value})
}))