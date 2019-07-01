import React, { Component } from "react";
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import { db } from "./Firestore";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      purchases: [],
      users: [],
      views: [],
      purchasesIncrease: [],
    }
  }

  componentDidMount() {
    db.collection("sales")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        this.setState({ items: data });
      });
  }
    

render() {
  const { items } = this.state;
  let userResult = items.map(({ newUsers }) => newUsers);
  let parseData = userResult.map(Number);
const userSum = [parseData].reduce(function(a, b){return a + b});



  return (
    <section className="content-form">
      <div className="dashboard-titles">
        <h2 className="title">Dashboard</h2>
        <p className="subtitle">   ESTADISTICAS</p>
      </div>
      <CardDeck>
        <Card bg="info" text="white" style={{ width: '6rem' }}>
          <Card.Body>
            <Card.Title>{userSum}</Card.Title>
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