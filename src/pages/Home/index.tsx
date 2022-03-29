import Header from './components/Header';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Login from 'assets/login.svg';
import Input from 'components/Input';
import { useNavigate } from 'react-router-dom';
import { useMemo, useState } from 'react';
import Footer from './components/Footer';

type IFormValues = {
  username: string;
  password: string;
};

export default function Home() {
  let navigate = useNavigate();
  const [formValues] = useState<IFormValues>({
    username: '',
    password: '',
  });
  const validationSchema = useMemo(
    () =>
      Yup.object().shape<{ [key in keyof IFormValues]: any }>({
        username: Yup.string().required('Please enter a username'),
        password: Yup.string().required('Please enter a password'),
      }),
    []
  );
  const handleSubmit = (values: IFormValues) => {
    const tempUsername = 'user';
    const tempPassword = '123456';
    const { username, password } = values;
    if (username === tempUsername && password === tempPassword) {
      navigate('/chat');
    }
  };
  return (
    <div className="wrapper">
      <Header />
      <div className="content container">
        <div className="left">
          <h1 className="title">Free and secure calls and messages to anyone, anywhere</h1>
          <Formik initialValues={formValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            <Form className="form">
              <Input name="username" placeholder="Enter your phone or username" inputType="mail" />
              <Input name="password" type="password" placeholder="Enter your password" />
              <div className="btn">
                <a className="forgot-link">Forgot password ?</a>
                <button className="primary md">Login</button>
              </div>
            </Form>
          </Formik>
        </div>
        <div className="right">
          <img src={Login} alt="img login sonet" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
