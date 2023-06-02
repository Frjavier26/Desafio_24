import { pizzaContext } from "../Context/Context"
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import "../assets/carrito.css"


export default function Carrito() {
    const { pedido, setPedido } = useContext(pizzaContext)

    const total = pedido.reduce((a, { price, count }) => a + price * count, 0);


    return (
        <div className='contenedorA'>
            <div className="contenedorB">
                <div className="contenedorC" >
                    <div>Detalles del Pedido:</div>
                    {pedido != 0 ? (
                        pedido.map((item, i) => {
                            return (
                                
                                    <div key={i} className="contenedorD">
                                        <div className="contenedorE">
                                        <div className="contenedorF">
                                            <img src={item.img} alt="" className='imgPizza' />
                                            <p className="item">
                                                {item.name}
                                            </p>
                                        </div>

                                        <table className="cantidades">

                                            <tbody>
                                                <tr className="d-flex justify-content-end align-items-center">
                                                    <td>
                                                        {" "}
                                                        <p className="text-success m-0">${(item.price * item.count).toLocaleString()}</p>
                                                    </td>
                                                    <td>
                                                        <button className="btn btn-danger m-2">-</button>
                                                    </td>
                                                    <td key={item.id}>
                                                        <span className="p-2 text-center m-2">
                                                            {item.count}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <button className="btn btn-primary">+</button>
                                                    </td>
                                                </tr>
                                            </tbody>

                                        </table>
                                        <hr />
                                        </div>
                                    </div>

                                
                            );
                        }

                        )
                    )
                        : (
                            <h3>No hay nada en el carrito!</h3>
                       
                   )}

                    <h4 className='my-4'>Total a Pagar: ${total.toLocaleString()}</h4>
                    <div className="buttons">
                    <Button className='btn btn-success'> Ir a Pagar </Button>
                    </div>
                </div>
            </div>





        </div>
    )
}