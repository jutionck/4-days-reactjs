import * as yup from 'yup';

export const bookSchema = yup.object().shape({
  title: yup.string()
    .required('Title is required')
    .min(6, 'title must be at least 6 characters'),
  description: yup.string()
    .required('Description is required')
    .min(10, 'description must be at least 10 characters'),
  year: yup.number()
    .required('Year is required')
    .min(4, 'year must be at max 4 characters'),
  page: yup.number()
    .required('Pages is required')
    .min(1, 'pages must be at min 0 pages'),
  language: yup.string()
    .required('language is required'),
  publisher: yup.string()
    .required('publisher is required'),
  price: yup.number()
    .required('price is require')
    .min(0, 'price can not be 0'),
  stock: yup.number()
    .required('stock is require')
    .min(0, 'stock can not be 0')
});