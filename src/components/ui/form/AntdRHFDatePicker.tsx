import { DatePicker, Form } from 'antd';
import { Controller } from 'react-hook-form';

type TInputProps = {
  name: string;
  label?: string;
};

// It'll take 3 argument, type, name and label. Here (type, name) is MUST** and (label) is OPTIONAL**
export default function AntdRHFDatePicker({ name, label }: TInputProps) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <DatePicker {...field} size='large' style={{ width: '100%' }} />
            {error && <small style={{ color: 'red' }}>{error.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
}
