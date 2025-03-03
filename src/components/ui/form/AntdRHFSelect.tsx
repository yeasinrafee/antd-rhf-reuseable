import { Form, Select } from 'antd';
import { Controller } from 'react-hook-form';

type TAntdRHFSelectProps = {
  name: string;
  label: string;
  options?: { value: string; label: string; disabled?: boolean }[];
  disabled?: boolean;
  mode?: 'multiple' | undefined;
};

export default function AntdRHFSelect({
  name,
  label,
  options,
  disabled,
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
            disabled={disabled}
          />
          {error && <small style={{ color: 'red' }}>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
}
