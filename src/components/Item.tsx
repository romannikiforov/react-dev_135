import { memo, useContext } from 'react'
import "./item.css";
import { State } from '@/App'
import { useDeleteItem, useToggleChecked } from '@/components/hooks'


type ItemProps = {
  item: State;

}


const Item = memo(({ item }: ItemProps) => {
  console.log("rendered", item.id)
  const toggleItem = useToggleChecked();
  const removeItem = useDeleteItem();

  return (
    <li className="item-box">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={item.packed}
          onChange={() => toggleItem(item.id)}
          id={item.id}
        />
        <label className="form-check-label" htmlFor={item.id}>
          {item.value}
        </label>
      </div>
      <button className="btn btn-secondary btn-sm"
        onClick={() => removeItem(item.id)}>
        Remove
      </button>
    </li>
  );
});

export default Item;
