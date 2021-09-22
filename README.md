# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### BNI Internship x Enigma Camp

#### PART Install Dependencies

> 1. Install with `npm` : `npm install yup`
> 2. Install with `npm` : `npm i react-hook-form`
> 3. Install with `npm` : `npm i @hookform/resolvers`

#### PART Validations

> 1. Create a new `validations` directory
> 2. Create a new file `validationSchema.js` in `validations` directory

Open `validationSchema.js` and then add script like this
```js
import * as yup from 'yup';

export const bookSchema = yup.object().shape({
  title: yup.string()
    .required('Title is required')
    .min(6, 'title must be at least 6 characters'),
  description: yup.string()
    .required('Description is required')
    .min(10, 'description must be at least 10 characters')
})
```

Open `BookForm.js` and then modify like this
```js
const BookForm = () => {

  const { register, handleSubmit, reset, setValue, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(bookSchema)
  });

  const submitForm = (data) => {
    console.log(data);
  }

  return (
    <Container>
      <Row className="mt-5">
        <Col lg={8}>
          <h3>BookForm components</h3>
          <Form onSubmit={handleSubmit(submitForm)}>
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter book title"
                name="title"
                {...register("title")} className={`form-control ${errors.title ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">
                {errors.title?.message}
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description book"
                name="description"
                {...register("title")} className={`form-control ${errors.title ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">
                {errors.description?.message}
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicImage">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image url"
                name="image"
                {...register("title")} className={`form-control ${errors.title ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">
                {errors.image?.message}
              </div>
            </Form.Group>
            <Button
              variant="success"
              type="submit"
            >
              Save
            </Button>
            <Link to="/books" className="btn btn-warning mx-2">Cancel</Link>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default BookForm;
```

#### PART Hands On

> 1. Silahkan lengkapi validasi `book` sesuai dengan `payload` di `API`
> 2. Silahkan buat validasi yang sama untuk `member`