import { createContext, useEffect, useState } from "react";

// Contexto de la aplicacion
export const pizzaContext = createContext();

// proveedor del contexto
export const Provider = ({children}) => {

    const[pizzas, setPizzas] = useState([]);
    const[pedido, setPedido] = useState([]);
    // const[total, setTotal] =useState (0);


    const getData = async () =>{
        const res = await fetch("../pizzas.json")
        const data = await res.json();

        setPizzas(data);
    };

    useEffect(() => {
        getData();

    }, []);

 

    const globalState = {pizzas, pedido, setPedido,};

    return(
        <pizzaContext.Provider value={globalState}>
            {children}
        </pizzaContext.Provider>
    )
}