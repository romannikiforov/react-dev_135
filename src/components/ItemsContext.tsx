import React from 'react'
import { defaultState } from "@/data";
import { State } from '@/App'


export type AppDispatchType = React.Dispatch<React.SetStateAction<State[]>>

export const AppStateContext = React.createContext<State[]>({} as State[]);

export const AppDispatchContext = React.createContext<AppDispatchType>({} as AppDispatchType)

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [items, setItems] = React.useState<State[]>(defaultState)

    return <AppStateContext.Provider value={items}>
        <AppDispatchContext.Provider value={setItems}>
            {children}
        </AppDispatchContext.Provider>

    </AppStateContext.Provider>
}