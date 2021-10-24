import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup.string().required('email  est requis.'),
  password: yup.string().required('password est requis.'),
});
