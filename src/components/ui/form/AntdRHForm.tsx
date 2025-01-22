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
  resolver?: any;
};

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFormConfig;

export default function AntdRHForm({
  onSubmit,
  children,
  defaultValues,
  resolver,
}: TFormProps) {
  //For Default Values (Default values will take an object where we have to pass the property name as the input field name).
  const fromConfig: TFormConfig = {};

  // For Default value checking
  if (defaultValues) {
    fromConfig['defaultValues'] = defaultValues;
  }

  // For Zod resolver checking
  if (resolver) {
    fromConfig['resolver'] = resolver;
  }

  const methods = useForm(fromConfig);

  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <Form layout='vertical' onFinish={methods.handleSubmit(submit)}>
        {children}
      </Form>
    </FormProvider>
  );
}
