import styled from "@emotion/styled"

const Conten = styled.div`
   color : #FFF;
   font-family: 'Lato', sans-serif;
   font-size: 18px;
   
   display: flex;
   align-items: center;
   gap: 1rem;
   margin-top: 30px;
`

const Texto = styled.p`
    span{
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
`

const Imagen = styled.img`
    display: block;
    width: 120px;
`

const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
  return (
    <Conten>

      <Imagen src = {`https://cryptocompare.com/${IMAGEURL}`} alt="imagen criptoS"/>
      
      <div>
      <Precio>El precio es de: {''}<span>{PRICE}</span></Precio>
      <Texto>Precio mas alto del dia {''}<span>{HIGHDAY}</span></Texto>
      <Texto>Precio mas bajo del dia {''}<span>{LOWDAY}</span></Texto>
      <Texto>Variacion 24hrs {''}<span>{CHANGEPCT24HOUR}</span></Texto>
      <Texto>Ultima Actualizacion {''}<span>{LASTUPDATE}</span></Texto>
      </div>

    </Conten>
  )
}

export default Resultado