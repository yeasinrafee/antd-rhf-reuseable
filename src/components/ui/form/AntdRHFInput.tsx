import { Input } from 'antd';
import { Controller } from 'react-hook-form';

export default function AntdRHFInput({ type, name, label }) {
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
