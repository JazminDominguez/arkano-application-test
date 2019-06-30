import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class DashForm extends Component {
  render() {
    return (
      <section className="content-form">
        <div className="dashboard-titles">
         <h2 className="title">Dashboard Form</h2>
        <p className="subtitle">   ESTADISTICAS</p>
        </div>
      <div className="form-size">
      <Form>
        <p>Datos en Dashboard</p>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Cantidad de nuevas compras</Form.Label>
          <Form.Control required
              type="value" placeholder="Nuevas Compras" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Incremento de compras</Form.Label>
          <Form.Control required type="value" placeholder="% Nuevas Compras" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Cantidad Nuevos Usuarios</Form.Label>
          <Form.Control required type="value" placeholder="Nuevos Usuarios" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Cantidad Nuevas Visitas</Form.Label>
          <Form.Control required type="value" placeholder="Nuevas Visitas" />
        </Form.Group>   
        <Button variant="primary" type="Ingresar Datos">
          Submit
  </Button>
      </Form>
      </div>
      </section>
    );
  }
}

export default DashForm;