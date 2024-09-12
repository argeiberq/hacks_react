import "./mensaje/mensaje.css"
import { useState } from 'react'
import { Input} from "@chakra-ui/react"
import Buscar from "./usuario/funciones/Buscar"
import Eliminar from "./usuario/funciones/Eliminar"
import Editar from "./usuario/funciones/Editar"
export default function Login() {
       const [mail, setMail] = useState("")
       const [uses, setUses] = useState("")
       const [age, setAge] = useState("")
       const [error, setError] = useState(false)

       const [informacion,setInformacion] = useState([])
       const handLeSudmit = (e) => {
              e.preventDefault()
              if (mail == "" || uses == "" || age == ""){
                     setError(true)
                     return
              }
             
              setError(false)
       }
       const fnAdd = (evt)=>{
              const br = <br/>
              const usu = ['usuario: ',uses,br,'correo: ', mail, br,'edad: ', age]
              evt.preventDefault()

              setInformacion([...informacion, usu])
       } 
       return (
              
              <div>
              <section>

                     <form 
                     
                     onSubmit={handLeSudmit}>
                            <h1 className='titulo'>Login</h1>
                            <p>mail</p>
                            <Input type="text" placeholder={" mail"} value={mail} onChange={(e) => setMail(e.target.value)}/>

                            <p>user</p>
                            <Input type="text" placeholder={" user"} value={uses} onChange={(e) => setUses(e.target.value)} />

                            <p>age</p>
                            <Input type="text" placeholder={" age"} value={age} onChange={(e) => setAge(e.target.value)}/>

                            <br/>
                            <button onClick={fnAdd}>boton</button>
                            {error && <p>todos los campos son obligatirios</p>}
                     </form>
              </section>

              <div className="funsiones">
              <Eliminar informacion={informacion} setInformacion={setInformacion}/>
              
              <section className="usuarios">
                    <p className="usu">usuarios:  {informacion.length}</p>
                     <ul>
                            <Buscar  informacion={informacion}/>
                     </ul>                                  
              </section>
              <section className="usuarios">
                     <Editar className="editar" informacion={informacion} setInformacion={setInformacion}/>
              </section>
              </div>
              </div>

       )
}