import { useRef, useState } from 'react';
import { WrapForm, FormGroup, Label, Input, ButtonGroup, Button, Title, Spinner, FullSpinner } from '@/styles/app'


const Form = () => {
  const [loading, setLoading] = useState(false)

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)


  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const data = { email: '', password: '' }
    if (emailRef.current) {
      data.email = emailRef.current.value;
    }
    if (passwordRef.current) {
      data.password = passwordRef.current.value;
    }
    setLoading(true);
    await new Promise(r => setTimeout(r, 3000));
    console.log(data)
    setLoading(false);
    if (emailRef.current) {
      emailRef.current.value = '';
    }
    if (passwordRef.current) {
      passwordRef.current.value = '';
    }
  };

  const resetHandle: React.MouseEventHandler<HTMLButtonElement> = e => {
    if (!confirm("Are you sure ? ")) {
      e.preventDefault();
    }
  }


  return (
    <>
      {loading && <FullSpinner />}
      <WrapForm onSubmit={handleSubmit}>
        <Title>My Form</Title>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input ref={emailRef} name="email" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input ref={passwordRef} name="password" />
        </FormGroup>
        <ButtonGroup>
          <Button type="submit" mr="0.5rem">
            Login {loading && <Spinner />}
          </Button>
          <Button onClick={resetHandle} type="reset">Reset</Button>
        </ButtonGroup>
      </WrapForm>
    </>
  );
};

export default Form;
