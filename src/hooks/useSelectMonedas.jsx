import { useState } from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    color: #FFF;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0px;
`

const Select = styled.select`
  width: 100%;
  padding: 14px;
  font-weight: 400;
  font-size: 18px;
  border-radius: 10px;
`

const useSelectMonedas = (label, opciones) => {

   const [state, setState] = useState('')
  /*Yo creo este useState con la intencion de poderlo usar con mi hook
   -Cuando yo en el select mando a llamar por medio de value
   lo que estoy haciendo es decirle que guarde el valor que se obtiene, si selecciona 20 veces
   entonces tendra 20 values
  
   -Cuando pongo el onChange, estamos haciendo que lea el state cuando se genere el evento, pero ya con el value
  
   */
    const SelectMonedas = () => (
    <>
       <Label>{label}</Label>
       <Select
        value={state}
        onChange={ e => setState( e.target.value )}
       >
        <option value="">Seleccione</option>
       
        {opciones.map( opcion => (
           <option
             key={opcion.id}   
             value={opcion.id}
           >{opcion.nombre}</option> 
         ))}
       </Select>
    </>
  )

  return [ state, SelectMonedas ]
}

export default useSelectMonedas