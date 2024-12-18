import { useState } from 'react'

type State = {
    selectedTag: number | null,
    tags: { id: number; value: string }[]
}



const Pitfall = () => {
    const [items, setItems] = useState<State>({
        tags: [],
        selectedTag: null,
    });

    return (
        <>
            <button onClick={() => setItems((items): State => ({
                ...items,
                tags: [
                    ...items.tags,
                    {
                        id: Date.now(),
                        value: `New value - ${items.tags.length + 1}`,

                    }
                ]

            }))}

                className="btn-default">Add Tag</button>

            <ul>
                {items.tags.map(t => <li
                    style={{ color: t.id === items.selectedTag ? "red" : '' }}
                    onClick={() => setItems((items): State => ({
                        ...items,
                        selectedTag: t.id
                    }))}
                    key={t.id}>{t.value}</li >)
                }
            </ul>
        </>
    )
}

export default Pitfall