import { Form } from 'antd';
import { ReactNode } from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';

type TFormConfig = {
  defaultValues?: Record<string, any>;
};

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFormConfig;

export default function AntdRHForm({
  onSubmit,
  children,
  defaultValues,
}: TFormProps) {
  //For Default Values (Default values will take an object where we have to pass the property name as the input field name).
  const fromConfig: TFormConfig = {};
  if (defaultValues) {
    fromConfig['defaultValues'] = defaultValues;
  }

  const methods = useForm(fromConfig);

  return (
    <FormProvider {...methods}>
      <Form layout='vertical' onFinish={methods.handleSubmit(onSubmit)}>
        {children}
      </Form>
    </FormProvider>
  );
}
