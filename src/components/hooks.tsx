import React from 'react'
import { AppStateContext, AppDispatchContext } from '@/components/ItemsContext'
import { State } from '@/App'

export const useAppContext = () => {
    const context = React.useContext(AppStateContext)

    if (!context) {
        throw Error('useAppContext must be invoked whithing AppContext')
    }
    return context;
}

export const useDispatchContext = () => {
    const context = React.useContext(AppDispatchContext)

    if (!context) {
        throw Error('useDispatchContext must be invoked whithing AppContext')
    }
    return context;
}

export function useDeleteItem() {
    const setItems = useDispatchContext();
    return (id: string) => {
        setItems(items => items.filter(v => v.id !== id))
    }
}

export function useAddItem() {
    const setItems = useDispatchContext();
    return (newItem: State) => setItems(items => [...items, newItem])
}

export function useToggleChecked() {
    const setItems = useDispatchContext();
    return (id: string) => setItems(items => items.map(v => (v.id !== id ?
        v : { ...v, packed: !v.packed })))

}

export function useMarkAllUnpacked() {
    const setItems = useDispatchContext();
    return () => setItems(items => items.map(item => ({ ...item, packed: false })))
}

export function useInitItems() {
    const items = useAppContext();
    const packedItems = items.filter(v => v.packed)
    const unPackedItems = items.filter(v => !v.packed)
    return { packedItems, unPackedItems }
}