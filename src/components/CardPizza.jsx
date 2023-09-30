import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { pizzaContext } from "../Context/Context"
import '../assets/CardPizza.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function CardPizza() {

    const { pizzas, pedido, setPedido,} = useContext(pizzaContext);

    const navigate = useNavigate();

    const handleClick = (e) => {
        navigate(`/Detalle/${e.target.id}`);
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
    }

    return (
        <div className="galeria">
            {pizzas.map((pizza) => {
                return (
                    <Card className='pizzaCard' key={pizza.id} style={{ width: '18rem' }}>
                        <Card.Img className="photo" variant="top" src={pizza.img} />
                        <Card.Body>
                            <Card.Title className="titulo">{pizza.name}</Card.Title>
                            <hr />
                            <dl>
{/*                                 <dt>Ingredientes:</dt>
                                <br />
                                {pizza.ingredients.map((ingredient) => {
                                    return (
                                        <dd key={ingredient}>🍕{ingredient[0].toUpperCase() + ingredient.substring(1)}</dd>
                                    )
                                })} */}
                            </dl>
                            <hr />
                            <Card.Text>
                                <strong> $ {pizza.price.toLocaleString()} </strong>
                            </Card.Text>

                            <Button variant="primary" onClick={handleClick} id={pizza.id} className="me-5">
                                Ver Mas👀
                            </Button>

                            <Button id={pizza.id} variant="danger" onClick={() => addPizza(pizza)}>
                                Añadir🛒
                            </Button>

                        </Card.Body>
                    </Card>

                )


            })}

        </div>
    )
}