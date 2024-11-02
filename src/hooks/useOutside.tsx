import { useEffect } from 'react'

export function useOutside<T extends HTMLElement>(ref: React.RefObject<T>, cb: () => void) {
    useEffect(() => {
        const handleClickOutside = (e: any) => {
            if (ref.current && !ref.current.contains(e.target)) {
                cb();
            }

        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [cb, ref])

}