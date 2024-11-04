import { useState } from 'react'
import NewItem from "@/components/NewItem";
import ListItems from "@/components/ListItems";
import { defaultState } from "@/data";

export type State = {
  id: string;
  value: string;
  packed: boolean;
}

function App() {
  const [items, setItems] = useState<State[]>(defaultState);

  const addItem = (newItem: State) => setItems(items => [newItem, ...items])


  const removeItem = (id: string) => setItems(items => items.filter(v => v.id !== id))


  const packedItems = items.filter(v => v.packed)
  const unPackedItems = items.filter(v => !v.packed)

  return (
    <div className="container py-3">
      <NewItem addItem={addItem} />
      <div className="row">
        <div className="col-md-5">
          <ListItems title="Unpacked Items" items={unPackedItems}
            removeItem={removeItem}
          />
        </div>
        <div className="offset-md-2 col-md-5">
          <ListItems title="Packed Items" items={packedItems}
            removeItem={removeItem}
          />
          <button className="btn btn-danger btn-lg btn-block">
            Mark All As Unpacked
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
