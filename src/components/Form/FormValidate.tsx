import '@/components/Form/form-validate.scss'


const FormValidate = () => {

  return (
    <form>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input name="email" />
        <span></span>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input name="password" />
        <span></span>
      </div>
      <button className="btn btn-primary" type="submit">Click me</button>
    </form>
  );
};

export default FormValidate;
