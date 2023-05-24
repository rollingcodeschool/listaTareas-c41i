import { Button, Form } from "react-bootstrap";
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

import ListaTareas from "./ListaTareas";

const FormularioTarea = () => {
  return (
    <section>
      <Form>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control type="text" placeholder="Ingrese una tarea" />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas></ListaTareas>
    </section>
  );
};

export default FormularioTarea;
