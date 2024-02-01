//servidor con express
import express from "express";
import google from "googlethis";

const app = express()

const config = {
    page: 0, 
    safe: true, // Safe Search
    parse_ads: true, // If set to true sponsored results will be parsed
    additional_params: { 
      // add additional parameters here, see https://moz.com/blog/the-ultimate-guide-to-the-google-search-parameters and https://www.seoquake.com/blog/google-search-param/
      hl: 'es'
    }
  }

async function conseguirImagen(title){
    const images = await google.image(title, config);
    return images[0].url;
}

app.get("/", (req, res)=>{
    const titulo = req.query.titulo;
    conseguirImagen(titulo)
    .then(respuesta => {
        res.send(respuesta);
    })
    res.header("Access-Control-Allow-Origin", "*");
})

app.listen(8080,()=>{
    console.log("servidor funcando en http://localhost:8080");
    conseguirImagen("perro").then(respuesta => console.log(respuesta));
})