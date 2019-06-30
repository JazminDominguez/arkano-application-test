import React, { Component } from "react";
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
 
class Dashboard extends Component {
  render() {
    return (
      <section className="content-form">
        <div className="dashboard-titles">
         <h2 className="title">Dashboard</h2>
        <p className="subtitle">   ESTADISTICAS</p>
        </div>
      <CardDeck>
      <Card bg="info" text="white" style={{ width: '6rem' }}>
        <Card.Body>
          <Card.Title>150</Card.Title>
          <Card.Text>
            Nuevas Compras
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Más info</small>
        </Card.Footer>
      </Card>
      <Card bg="success" text="white" style={{ width: '6rem' }}>
        <Card.Body>
          <Card.Title>53%</Card.Title>
          <Card.Text>
           Incremento de Compras
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Más info</small>
        </Card.Footer>
      </Card>
      <Card bg="warning" text="white" style={{ width: '6rem' }}>
        <Card.Body>
          <Card.Title>44</Card.Title>
          <Card.Text>
            Nuevos Usuarios
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Más info</small>
        </Card.Footer>
      </Card>
      <Card bg="danger" text="white" style={{ width: '6rem' }}>
        <Card.Body>
          <Card.Title>65</Card.Title>
          <Card.Text>
            Nuevas Visitas
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Más info</small>
        </Card.Footer>
      </Card>
    </CardDeck>
    </section>
    );
  }
}
 
export default Dashboard;