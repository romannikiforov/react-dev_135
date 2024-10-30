import { useForm, FieldValues } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import '@/components/Form/form-validate.scss'

const schema = z.object({
  email: z.string().min(1, { message: "email is required" }).email(),
  password: z.string().min(1, { message: "password is required" }).min(1).max(5)
})


type FormData = z.infer<typeof schema>


const FormValidate = () => {

  const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: FieldValues) => {
    console.log("Data: ", data)
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input  {...register('email')} />
        {errors?.email && <span>{errors.email.message}</span>}

      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input {...register('password', { required: true })} />
        {errors?.password && <span>{errors.password.message}</span>}
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">Click me</button>
    </form>
  );
};

export default FormValidate;
