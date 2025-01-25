import { Form, Select } from 'antd';
import { Controller } from 'react-hook-form';

type TAntdRHFSelectProps = {
  name: string;
  label: string;
  options?: { value: string; label: string; disabled?: boolean }[];
  mode?: 'multiple' | undefined;
};

export default function AntdRHFSelect({
  name,
  label,
  options,
  mode,
}: TAntdRHFSelectProps) {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            mode={mode}
            style={{ width: '100%' }}
            {...field}
            options={options}
          />
          {error && <small style={{ color: 'red' }}>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
}
