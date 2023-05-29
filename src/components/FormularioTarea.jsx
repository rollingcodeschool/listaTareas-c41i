import { Button, Form } from "react-bootstrap";
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";

const FormularioTarea = () => {
  let tareasLocalStorage = JSON.parse(localStorage.getItem('listaTareas')) || [];
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState(tareasLocalStorage);

  //usar el ciclo de vida
  useEffect(()=>{
    // el codigo que agrego aqui se ejecuta en las etapas del ciclo de vida
    localStorage.setItem('listaTareas', JSON.stringify(tareas));
  },[tareas] )

  const handleSubmit = (e)=>{
    e.preventDefault();
   setTareas([...tareas,tarea]);
   setTarea('');
  }

  const borrarTarea = (nombreTarea)=>{
    let copiaTareas = tareas.filter((itemTarea)=> itemTarea !== nombreTarea );
    setTareas(copiaTareas);
  }

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas tareas={tareas} borrarTarea={borrarTarea}></ListaTareas>
    </section>
  );
};

export default FormularioTarea;
