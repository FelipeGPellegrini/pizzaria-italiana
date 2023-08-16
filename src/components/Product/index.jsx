import "./style.css"

const index = (props) => {
  
  return (
    <>
          <div className="containerItem">
        <div><img width={100} src={props.photo} alt="" /></div>
        <div>
            <h2>{props.name}</h2>
            <h3>R${props.price},00</h3>
        </div>
    </div>
    </>

  )
}

export default index