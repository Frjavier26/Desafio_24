import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { pizzaContext } from "../Context/Context";
import '../assets/detalle.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Detalle() {

    const { pizzas, pedido, total, setPedido, setTotal } = useContext(pizzaContext);
    const [elegirPizza, setElegirPizza] = useState();

    const params = useParams();
    const navigate = useNavigate();

    const getElegirPizza = () => {
        return setElegirPizza(pizzas.filter((item) => item.id === params.id))
    }

    const inicio = (e) => {
        navigate("/")
    }

    const addPizza = ({ id, price, name, img }) => {
        const items = pizzas.find((i) => i.id === id);
        const index = pedido.findIndex((i) => i.id === id)
        const product = { id, price, name, img, count: 1 };

        if (index >= 0) {
            pedido[index].count++;
            setPedido([...pedido])

        } else {
            setPedido([...pedido, product])
        }
        setTotal(
            pedido.reduce((a, { price, count }) =>
                a + price * count
                , 0)
        );
    }
    useEffect(() => {
        getElegirPizza();
    }, []);

    console.log(elegirPizza);

    return (
        <div>
            {elegirPizza ? (
                <Card className="container">
                    <Card.Img className="imagenCont" src={elegirPizza[0].img} />
                    <Card.Body>
                        <Card.Title>{elegirPizza[0].name}</Card.Title>
                        <Card.Text>
                            {elegirPizza[0].desc}
                        </Card.Text>
                        <hr />
                        <dl>
{/*                             <dt>Ingredientes:</dt>
                            <br />
                            {elegirPizza[0].ingredients.map((ingredient) => {
                                return (
                                    <dd key={ingredient}>🍕{ingredient[0].toUpperCase() + ingredient.substring(1)}</dd>
                                )
                            })} */}
                        </dl>
                        <hr />
                        <div className="bottom">
                            <h3>Precio: ${elegirPizza[0].price.toLocaleString()}</h3>
                            <Button className="botonn" onClick={() => addPizza(elegirPizza[0])} id={elegirPizza[0].id} variant="danger">Añadir 🛒</Button>
                            
                        </div>
                    </Card.Body>
                </Card>

            ) : null
            }
        </div>
    )

}