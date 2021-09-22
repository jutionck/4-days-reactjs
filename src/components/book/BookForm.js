import React from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { bookSchema } from '../../validations/validationSchema';

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
