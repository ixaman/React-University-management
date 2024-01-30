import { ReactNode } from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';

type TFormProp = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
  defaultValues: Record<string, any>;
};

const LoginForm = ({ onSubmit, children, defaultValues }: TFormProp) => {
  const formConfig = {
    defaultValues,
  };
  console.log(formConfig);

  const methods = useForm(formConfig);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default LoginForm;
