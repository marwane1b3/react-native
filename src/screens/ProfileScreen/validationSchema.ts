import * as yup from 'yup';

export const schema = yup.object().shape({
  citizenship: yup.string().required('veuillez choisir une civilité'),
  nom: yup.string().required('votre nom '),
  lastName: yup.string().required('votre lastName '),
  email: yup.string().required('email  est requis.'),
  password: yup.string().required('password est requis.'),
  adresse: yup.string().required('adresse est requis.'),
  ville: yup.string().required('ville est requis.'),
});
