import "./style.css"

const index = () => {
  return (
    <div className='containerItem'>
        <div><img width={100} src="./pizza-mussarela.jpg" alt="" /></div>
        <div>
            <h2>Pizza de mussarela</h2>
            <h3>R$60,00</h3>
            <p>Composição: Farinha, queijo mussatela, molho de tomate.</p>
        </div>
    </div>
  )
}

export default index