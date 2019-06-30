import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import firebase from "./Firestore";


class DashForm extends Component {
  constructor(){
    super();
    this.state={
      newPurchases: "",
      newUsers: "",
      newViews: "",
      purchasesIncrease: "",
    };
  }

  updateInput = e =>{
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addData=e=>{
    e.preventDefault();
    const db = firebase.firestore();
    db.collection("sales-data").add({
      newPurchases: this.state.newPurchases,
      newUsers: this.state.newUsers,
      newViews: this.state.newViews,
      purchasesIncrease: this.state.purchasesIncrease,
    })    
    this.setState({
      newPurchases: "",
      newUsers: "",
      newViews: "",
      purchasesIncrease: "",
    })
  }
  render() {
    return (
      <section className="content-form">
        <div className="dashboard-titles">
         <h2 className="title">Dashboard Form</h2>
        <p className="subtitle">   FORMULARIO</p>
        </div>
      <div className="form-size">
      <Form onSubmit={this.addData}>
        <p>Datos en Dashboard</p>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Cantidad de nuevas compras</Form.Label>
          <Form.Control required
              type="value" 
              placeholder="Nuevas Compras"
               name="newPurchases" 
               onChange={this.updateInput} 
               value={this.state.newPurchases}/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Incremento de compras</Form.Label>
          <Form.Control required
           type="value" 
           placeholder="% Nuevas Compras" 
           name="purchasesIncrease" 
           onChange={this.updateInput} 
           value={this.state.purchasesIncrease}/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Cantidad Nuevos Usuarios</Form.Label>
          <Form.Control required
           type="value"
            placeholder="Nuevos Usuarios"
            name="newUsers"
            onChange={this.updateInput} 
            value={this.state.newUsers} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Cantidad Nuevas Visitas</Form.Label>
          <Form.Control required 
          type="value"
           placeholder="Nuevas Visitas"
           name="newViews"
           onChange={this.updateInput} 
           value={this.state.newViews} />
        </Form.Group>   
        <Button variant="primary" type="Submit">
        Ingresar Datos
  </Button>
      </Form>
      </div>
      </section>
    );
  }
}

export default DashForm;