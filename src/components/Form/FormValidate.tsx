import { useForm, FieldValues } from 'react-hook-form'

import '@/components/Form/form-validate.scss'

type FormData = {
  email: string;
  password: string;
}


const FormValidate = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => {
    console.log("Data: ", data)
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input  {...register('email', { required: true, minLength: 2, maxLength: 5 })} />
        {errors?.email?.type === "required" && <span>Email is required</span>}
        {errors?.email?.type === "minLength" && <span>email must be more  2 characters</span>}
        {errors?.email?.type === "maxLength" && <span>email must be less 5 characters</span>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input {...register('password', { required: true })} />
        {errors?.password?.type === "required" && <span>Password is required</span>}
      </div>
      <button className="btn btn-primary" type="submit">Click me</button>
    </form>
  );
};

export default FormValidate;
