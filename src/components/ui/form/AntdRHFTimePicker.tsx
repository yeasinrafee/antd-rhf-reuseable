import { Form, TimePicker } from 'antd';
import { Controller } from 'react-hook-form';

type TInputProps = {
  name: string;
  label?: string;
};

// It'll take 2 argument, type, name and label. Here (name) is MUST** and (label) is OPTIONAL**
export default function AntdRHFTimePicker({ name, label }: TInputProps) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <TimePicker
              {...field}
              size='large'
              style={{ width: '100%' }}
              format='HH:mm' // time format is hours and minute like, 12:00
            />
            {error && <small style={{ color: 'red' }}>{error.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
}
