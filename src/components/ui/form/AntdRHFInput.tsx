import { useFormContext } from 'react-hook-form';

export default function AntdRHFInput({ type, name, label }) {
  const { register } = useFormContext();
  return (
    <div>
      {label ? <label htmlFor={name}>{label}</label> : null}
      <input type={type} id={name} {...register(name)} />
    </div>
  );
}
