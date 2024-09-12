import React, { useState } from 'react';

const Editar = ({ informacion, setInformacion }) => {
  const [posicion, setPosicion] = useState("")
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState("")
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = informacion.filter((item) =>
    item[posicion]
  );
  const fnBuscar = (evt) => {
    evt.preventDefault()
    setInformacion([...informacion.filter(elproducto1 =>{
           
    })])
}  
  const fnEdit = (evt) => {
    evt.preventDefault()
    setInformacion([...informacion.filter(elproducto1 =>{
           
    })])
}
  return(
  <>
  <form>
    <h1 className='titulo'>Login</h1>
    <p>posicion</p>
    <input type="text" placeholder={" posicion"} value={posicion} onChange={(e) => setPosicion(e.target.value)} />
    <p>mail</p>
    <input type="text" placeholder={" mail"} value={email} onChange={(e) => setEmail(e.target.value)} />

    <p>user</p>
    <input type="text" placeholder={" user"} value={nombre} onChange={(e) => setNombre(e.target.value)} />

    <p>age</p>
    <input type="text" placeholder={" age"} value={age} onChange={(e) => setAge(e.target.value)} />

    <br />
    <button>boton</button>
    
  </form>
   <ul>
   {filteredData.map((item, idx) => (
     <li key={idx}>{item}</li>
   ))}
 </ul>
 </>
  )
};

export default Editar;