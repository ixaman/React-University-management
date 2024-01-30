import { Input } from 'antd';
import { Controller } from 'react-hook-form';

type TInputProp = {
  type: string;
  name: string;
  label: string;
};

const LoginInput = ({ type, name, label }: TInputProp) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      {label ? label : null}
      <Controller
        name={name}
        render={({ field }) => <Input {...field} type={type} id={name} />}
      />
    </div>
  );
};

export default LoginInput;
