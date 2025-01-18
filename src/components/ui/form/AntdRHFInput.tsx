import { Input } from 'antd';
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
      {label ? <label htmlFor={name}>{label}</label> : null}
      <Controller
        name={name}
        render={({ field }) => (
          <Input
            {...field}
            type={type}
            id={name}
            style={{ marginTop: '5px' }}
          />
        )}
      />
    </div>
  );
}
