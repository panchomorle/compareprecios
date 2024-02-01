import { Card } from "./Card";
import "./Market.css"

export function Market (){
    return(
    <div className="marketBox">
    <Card titulo="Kg de pan" descripcion="Precios variables entre 500 y 1000"/>
    {/*
    <Card titulo={"volkswagen gol mod 97"} descripcion={"Precios variables entre 400 y 800"}/>
    <Card titulo={"Arroz parboil dos hermanos"} descripcion={"Precios variables entre 1200 y 3000"}/>
    <Card titulo={"alfajor terrabusi clasico"} descripcion={"Precios variables entre 1200 y 3000"}/>
    */}
    </div>
    )
}