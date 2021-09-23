import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { bookSchema } from '../../validations/validationSchema';

const BookForm = () => {

  // object destructuring
  const { register, handleSubmit, reset, setValue, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(bookSchema)
  });

  const submitForm = (data) => console.log(data);

  return (
    <Row>
      <Col>
        <Form onSubmit={handleSubmit(submitForm)}>
          <h3 className="mb-5">Book Form</h3>
          <div style={{ textAlign: "left" }} className="mb-5">
            <Form.Group as={Row} className="mb-3" controlId="formBasicTitle">
              <Form.Label column sm="2">Title</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="Enter title"
                  name="title"
                  {...register("title")} className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.title?.message}</div>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicDescription">
              <Form.Label column sm="2">Description</Form.Label>
              <Col sm="10">
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  {...register("description")} className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.description?.message}</div>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicYear">
              <Form.Label column sm="2">Year</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="number"
                  placeholder="Enter Year"
                  name="year"
                  {...register("year")} className={`form-control ${errors.year ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.year?.message}</div>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicPages">
              <Form.Label column sm="2">Pages</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="number"
                  placeholder="Enter Pages"
                  name="pages"
                  {...register("pages")} className={`form-control ${errors.pages ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.pages?.message}</div>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicLanguage">
              <Form.Label column sm="2">Language</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="Enter Language"
                  name="language"
                  {...register("language")} className={`form-control ${errors.language ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.language?.message}</div>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicPublisher">
              <Form.Label column sm="2">Publisher</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="Enter Publisher"
                  name="publisher"
                  {...register("publisher")} className={`form-control ${errors.publisher ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.publisher?.message}</div>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicPrice">
              <Form.Label column sm="2">Price</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="number"
                  placeholder="Rp-,"
                  name="price"
                  {...register("price")} className={`form-control ${errors.price ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.price?.message}</div>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicStock">
              <Form.Label column sm="2">Stock</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="number"
                  placeholder="0"
                  name="stock"
                  {...register("stock")} className={`form-control ${errors.stock ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.stock?.message}</div>
              </Col>
            </Form.Group>
          </div>
          <Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="btn btn-success"
            >
              Save
            </Button>
            <Link to="/books" className="btn btn-warning mx-2">Cancel</Link>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  )
}

export default BookForm;
