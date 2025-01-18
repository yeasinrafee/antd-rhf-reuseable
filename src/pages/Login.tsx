import { Button } from 'antd';
import AntdRHFInput from '../components/ui/form/AntdRHFInput';
import AntdRHForm from '../components/ui/form/AntdRHForm';

export default function Login() {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Login Form</h1>
      <div>
        <AntdRHForm onSubmit={onSubmit}>
          <AntdRHFInput label='Email: ' type='text' name='email' />
          <AntdRHFInput label='Password: ' type='text' name='password' />
          <Button htmlType='submit'>Login</Button>
        </AntdRHForm>
      </div>
    </div>
  );
}
