import AntdRHForm from '../components/ui/form/AntdRHForm';
import AntdRHFInput from '../components/ui/form/AntdRHFInput';
import AntdRHFSelect from '../components/ui/form/AntdRHFSelect';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { Button, Col, Flex } from 'antd';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const genderOptions = [
  {
    value: 'male',
    label: 'Male',
  },
  {
    value: 'female',
    label: 'Female',
  },
  {
    value: 'others',
    label: 'Others',
  },
  {
    value: 'lgbtq',
    label: 'LGBTQ',
    disabled: true,
  },
];

// Zod Schema for error handling
const registrationSchema = z.object({
  name: z.string({ required_error: 'Please fill with a Name!' }),
  email: z.string({ required_error: 'Please fill with an Email!' }),
  gender: z.string({ required_error: 'Please fill with a Gender!' }),
});

const onSubmit: SubmitHandler<FieldValues> = (data) => {
  console.log(data);
};

export default function Registration() {
  return (
    <Flex justify='center' align='center'>
      <Col span={7}>
        <AntdRHForm
          onSubmit={onSubmit}
          resolver={zodResolver(registrationSchema)}
        >
          <AntdRHFInput type='text' name='name' label='Name' />
          <AntdRHFInput type='text' name='email' label='Email' />
          <AntdRHFSelect name='gender' label='Gender' options={genderOptions} />
          <Button htmlType='submit'>Sign up</Button>
        </AntdRHForm>
      </Col>
    </Flex>
  );
}
