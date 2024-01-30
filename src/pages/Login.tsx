import { Button, Row } from 'antd';
import { FieldValues } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { jwtDecode } from 'jwt-decode';
import { useAppDispatch } from '../redux/hooks';
import { setUser } from '../redux/features/auth/authSlice';
import { TUser } from '../types';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/form/LoginForm';
import LoginInput from '../components/form/LoginInput';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const defaultValues = {
    userId: 'A-0001',
    password: 'admin1234',
  };

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading('Loading..');
    try {
      const userInfo = {
        id: data.userId,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = jwtDecode(res.data.accessToken) as TUser;
      dispatch(setUser({ user, token: res?.data?.accessToken }));
      toast.success('Logged in ', { id: toastId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
    } catch (err) {
      toast.error('Something went wrong', { id: toastId, duration: 2000 });
    }
  };

  return (
    <Row justify={'center'} align={'middle'} style={{ height: '100vh' }}>
      <LoginForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <LoginInput type="text" name="userId" label="ID " />
        <LoginInput type="text" name="password" label="Password " />
        <Button htmlType="submit">Login</Button>
      </LoginForm>
    </Row>
  );
};

export default Login;
