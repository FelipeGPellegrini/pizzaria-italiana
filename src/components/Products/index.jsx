import { useState } from "react"
import "./style.css"
import Product from "../Product"

const index = () => {

    const [select, setSelect] = useState(false)

    const [menu, setMenu] = useState([
        { name: "Pizza de mussarela", price: 60.00, photo: "./pizza-mussarela.jpg"},
        { name: "Coca-Cola", price: 8.00, photo: "./coca-cola.png"},
    ])

  return (
        <>
            <div className="menuContainer">
                <div>
                    {menu.map((menu) => (
                        <Product key={1} name={menu.name} price={menu.price} photo={menu.photo} />
                    ))}
                </div>
            </div>
        </>

    )
}

export default index