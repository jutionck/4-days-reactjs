import * as yup from 'yup';

export const bookSchema = yup.object().shape({
  title:
    yup.string()
      .required('Title is required')
      .min(6, 'title must be at least 6 characters'),
  description:
    yup.string()
      .required('Description is required')
      .min(10, 'description must be at least 10 characters'),
  year:
    yup.string()
      .required('Year is required')
      .max(4, 'year must be at max 4 characters'),
  pages:
    yup.string()
      .required('Pages is required')
      .min(1, 'pages must be at min 0 pages'),
  language:
    yup.string()
      .required('Language is required'),
  publisher:
    yup.string()
      .required('Publisher is required'),
  price: yup.string()
    .required('Price is require')
    .min(0, 'price can not be 0'),
  purchaseAmount:
    yup.string()
      .min(0, 'price can not be 0'),
  stock:
    yup.string()
      .required('Stock is require')
      .min(0, 'Stock can not be 0')
})