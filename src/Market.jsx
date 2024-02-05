import { Card } from "./Card";
import "./Market.css";

const cards = [];

cards.push({
    "Titulo": "Yerba mate",
    "Descripcion": "precios variables entre 200 y 300",
});

cards.push({
    "Titulo": "Manaos",
    "Descripcion": "precios variables entre 400 y 500",
});

cards.push({
    "Titulo": "vino toro",
    "Descripcion": "precios variables entre 400 y 500",
});

cards.push({
    "Titulo": "carne de res",
    "Descripcion": "precios variables entre 400 y 500",
});

export function Market (){
    {console.log(cards)}
    return(
    <div className="marketBox">
            {cards.map((card, index) => (
                    <Card titulo={card.Titulo} descripcion={card.Descripcion} key={index}></Card>
            ))
            }
    </div>
    )
}