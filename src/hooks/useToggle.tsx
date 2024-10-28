import { useState, useCallback } from 'react'

const useToggle = () => {

    const [openId, setOpenId] = useState<string | null>(null);

    const toggle = useCallback((id: string | null) => setOpenId(v => (v === id ? null : id)), [])

    return { openId, toggle }
}

export default useToggle

