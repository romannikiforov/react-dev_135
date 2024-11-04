import React from 'react'
import { v4 } from "uuid";
import { State } from '@/App'

type NewItemProps = {
  addItem: (newItem: State) => void
}

const NewItem = ({ addItem }: NewItemProps) => {

  const inputRef = React.useRef<HTMLInputElement>(null)


  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();


    if (inputRef.current) {
      const value = inputRef.current.value.trim();
      addItem({ id: v4(), value, packed: false })
      inputRef.current.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-10">
          <input ref={inputRef} className="form-control mb-3" type="text" />
        </div>
        <div className="col-md-2">
          <input className="btn btn-success" type="submit" value="Add item" />
        </div>
      </div>
    </form>
  );
};

export default NewItem;
