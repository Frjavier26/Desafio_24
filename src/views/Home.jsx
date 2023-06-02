import { useContext } from "react";
import { pizzaContext } from "../Context/Context"
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "../components/Banner";
import CardPizza from "../components/CardPizza";


export default function Home (){

    const { pizzas, getData } = useContext(pizzaContext);

    return(
        <div>
            <Banner />
            <div className="gallery">
            <CardPizza />
            </div>
        </div>
    )
    
    }