
type FilterProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

const Filter = ({ value, onChange }: FilterProps) => {
  return (
    <div className="mb-3">
      <input onChange={onChange} value={value} type="text" className="form-control" />
    </div>
  );
};

export default Filter;
