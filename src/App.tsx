import NewItem from "@/components/NewItem";
import ListItems from "@/components/ListItems";
import { useMarkAllUnpacked, useInitItems } from '@/components/hooks'

export type State = {
  id: string;
  value: string;
  packed: boolean;
}

function App() {
  const { packedItems, unPackedItems } = useInitItems();
  const markAllUnpacked = useMarkAllUnpacked();

  return (
    <div className="container py-3">
      <NewItem />
      <div className="row">
        <div className="col-md-5">
          <ListItems title="Unpacked Items" items={unPackedItems} />
        </div>
        <div className="offset-md-2 col-md-5">
          <ListItems title="Packed Items" items={packedItems} />
          <button onClick={markAllUnpacked} className="btn btn-danger btn-lg btn-block">
            Mark All As Unpacked
          </button>
        </div>
      </div>
    </div>

  );
}

export default App;
