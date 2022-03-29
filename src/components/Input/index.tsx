import mail from 'assets/mail.svg';
import password from 'assets/password.svg';
import user from 'assets/user.svg';
import { useField } from 'formik';
import { ChangeEvent, useEffect, useState } from 'react';

type IInputType = 'mail' | 'user';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  inputType?: IInputType;
  onChangeValue?: (value: string) => void;
  readonly onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const icons = {
  mail,
  password,
  user,
};

const Input: React.FC<IInputProps> = (props) => {
  const { name, onChangeValue, type = 'text', inputType, ...restProps } = props;
  const [isShowPassword, setShowPassword] = useState(false);

  const [field, meta] = useField(name);

  const isError = !!meta.error && !!meta.touched;

  useEffect(() => {
    onChangeValue && onChangeValue(field.value);
  }, [field.value]);

  return (
    <div>
      <div className="input-main">
        <input
          className="input"
          autoComplete="new-password"
          type={isShowPassword ? 'text' : type}
          {...(restProps as any)}
          {...field}
        />
        {type === 'password' ? (
          <img
            className="icon"
            onClick={() => setShowPassword(!isShowPassword)}
            src={icons[isShowPassword ? 'password' : 'password']}
            width={20}
          />
        ) : (
          <img className="icon" src={icons[inputType!]} width={20} />
        )}
      </div>
      {isError && <p className="form-error-text">{meta.error}</p>}
    </div>
  );
};

export default Input;
