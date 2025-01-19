import { Button, Col, Row } from 'antd';
import AntdRHFInput from '../components/ui/form/AntdRHFInput';
import AntdRHForm from '../components/ui/form/AntdRHForm';
import { FieldValues } from 'react-hook-form';

export default function Login() {
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Row justify='center' align='top' style={{ height: '100vh' }}>
      <Col span={7}>
        <AntdRHForm
          // MUST** We have to pass an onSubmit function
          onSubmit={onSubmit}
          // OPTIONAL** We can pass the default values as an object, the property name will be same as input field name. But it is OPTIONAL.
          defaultValues={{ email: 'abcd@xyz.com', password: '12345' }}
        >
          <AntdRHFInput
            // We can pass 3 values here. (type, name) is MUST** and label is OPTIONAL**
            label='Email: '
            type='text'
            name='email'
          />
          <AntdRHFInput label='Password: ' type='text' name='password' />
          <Button htmlType='submit'>Login</Button>
        </AntdRHForm>
      </Col>
    </Row>
  );
}
