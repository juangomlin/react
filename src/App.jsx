import React from 'react';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <div className="container">
      <h1 className="my-5 text-center">¡Bienvenido a React con Bootstrap!</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="imagen ejemplo"/>
            <div className="card-body">
              <h5 className="card-title">Card 1</h5>
              <p className="card-text">Este es un ejemplo de tarjeta utilizando Bootstrap.</p>
              <a href="#" className="btn btn-primary">Ver más</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="imagen ejemplo"/>
            <div className="card-body">
              <h5 className="card-title">Card 2</h5>
              <p className="card-text">Otro ejemplo de tarjeta usando Bootstrap.</p>
              <a href="#" className="btn btn-primary">Ver más</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="imagen ejemplo"/>
            <div className="card-body">
              <h5 className="card-title">Card 3</h5>
              <p className="card-text">Una tarjeta más con el estilo de Bootstrap.</p>
              <a href="#" className="btn btn-primary">Ver más</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

