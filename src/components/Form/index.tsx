import { WrapForm, FormGroup, Label, Input, ButtonGroup, Button } from '@/styles/app'


const Form = () => {

  const handleSubmit = () => {
    //todo
  };
  return (
    <WrapForm onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input name="email" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Input name="password" />
      </FormGroup>
      <ButtonGroup>
        <Button type="submit" mr="0.5rem">Login</Button>
        <Button type="reset">Reset</Button>
      </ButtonGroup>
    </WrapForm>
  );
};

export default Form;
