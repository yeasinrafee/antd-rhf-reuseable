import { Form, Input } from 'antd';
import { Controller } from 'react-hook-form';

type TInputProps = {
  type: string;
  name: string;
  label?: string;
};

// It'll take 3 argument, type, name and label. Here (type, name) is MUST** and (label) is OPTIONAL**
export default function AntdRHFInput({ type, name, label }: TInputProps) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <Input {...field} type={type} id={name} />
            {error && <small style={{ color: 'red' }}>{error.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
}
