import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import  './App.css';


function App() {
  
  return (
    
   <div className="container" >
   <p > Formulario </p>
    <div className="row" >
      
      <div className="col-1" >
      </div>
      <div className="col-10" >

          <div className="row">
            <div className="col-sm-6" >
              <label > Nombres Completos </label>
              <input type="text" placeholder="Torres Lopez Pedro Pablo"  className="form-control"></input>
            </div>
            <div className="col-sm-6" >
             <label > Numero de Cedula </label>
              <input type="text" placeholder="1234567890" className="form-control"></input>
            </div>
          </div>
          <br></br>
          <div className="row" >
            <div className="col-sm-6" >
              <label > Email: </label>
              <input type="text" placeholder="pablo@gmail.com" className="form-control"></input>
            </div>
            <div className="col-sm-6" >
            <label > Celular </label>
            <input type="text" placeholder="0987654123" className="form-control"></input>
            </div>
          </div>
          <br></br>
          <div className="row" >
            <div className="col-sm-12">
              <label > Mensaje </label>
              <textarea className="form-control" placeholder="Escriba aqui ......"  ></textarea>
            </div>
          </div>
          
      </div>
      <div className="col-1" >
      </div>
     
    </div>
   </div>
  );
}

export default App;
