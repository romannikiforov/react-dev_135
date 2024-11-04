import React from 'react'
import Item from "@/components/Item";
import Filter from "@/components/Filter";

import { State } from '@/App'

type ListItemsProps = {
  items: State[];
  title: string;
}

const ListItems = ({ title, items }: ListItemsProps) => {
  const [value, setValue] = React.useState('')



  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  };

  const filteredItems = items.filter(item => item.value.toLowerCase().includes(value.toLowerCase()))

  return (
    <section>
      <h3 className="mb-3">{title}</h3>
      <Filter value={value} onChange={onChange} />

      <ul className="mb-3 p-0">
        {filteredItems?.map(item => <Item key={item.id} item={item}
        />)}
      </ul>
    </section>
  );
};

export default ListItems;
