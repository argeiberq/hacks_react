import { useState } from 'react'
import { Button, Input} from "@chakra-ui/react"
export default function Eliminar({informacion, setInformacion}) {
       const [usuario, setUsuario] = useState("")
       const fnDelete = (evt) => {
              evt.preventDefault()
              setInformacion([...informacion.filter(elproducto1 =>{
                     return elproducto1[1] != usuario
              })])
       }

    return (
       <section className="usuarios">
       <Input className="buscador" htmlSize={30} width='auto' type="text" placeholder={" user"} value={usuario} onChange={(e) => setUsuario(e.target.value)} />
              <ol>
              {informacion.map((prod, idx) =>{
                     return <li key={idx}>{(prod[1].length <= 10) ? prod[1] : prod[1].slice(0, 10) + '...'}</li>
              } )}
              </ol>
              <Button size='xs' colorScheme='teal' onClick={fnDelete}>eliminar</Button>
       </section>

    )
}