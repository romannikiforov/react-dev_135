import Item from "@/components/Item";
import Filter from "@/components/Filter";

import { State } from '@/App'

type ListItemsProps = {
  items: State[];
  title: string;
  removeItem: (id: string) => void;
}

const ListItems = ({ title, items, removeItem }: ListItemsProps) => {
  const updateFilter = (searchTerm: any) => {
    // todo
  };

  return (
    <section>
      <h3 className="mb-3">Title</h3>
      <Filter filter={title} onChange={updateFilter} />

      <ul className="mb-3 p-0">
        {items?.map(item => <Item key={item.id} item={item}
          removeItem={removeItem}
        />)}
      </ul>
    </section>
  );
};

export default ListItems;
