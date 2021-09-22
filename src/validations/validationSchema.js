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
  image:
    yup.string()
      .required('Images is required')
});