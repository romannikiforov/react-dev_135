import { v4 } from "uuid";

const NewItem = () => {
  const handleChange = () => {
    //
  };

  const handleSubmit = () => {
    //
  };

  return (
    <form>
      <div className="row">
        <div className="col-md-10">
          <input className="form-control mb-3" type="text" value={"VALUE"} />
        </div>
        <div className="col-md-2">
          <input className="btn btn-success" type="submit" value="Add item" />
        </div>
      </div>
    </form>
  );
};

export default NewItem;
