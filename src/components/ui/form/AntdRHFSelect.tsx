import { Form, Select } from 'antd';
import { Controller } from 'react-hook-form';

type TAntdRHFSelectProps = {
  name: string;
  label: string;
  options: { value: string; label: string; disabled?: boolean }[];
};

export default function AntdRHFSelect({
  name,
  label,
  options,
}: TAntdRHFSelectProps) {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <Form.Item label={label}>
          <Select style={{ width: '100%' }} {...field} options={options} />
        </Form.Item>
      )}
    />
  );
}
