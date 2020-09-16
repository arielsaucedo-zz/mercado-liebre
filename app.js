/*  Instanciar variables a utilizar - Carga de modulo Express */
const express = require("express")
const app = express()
const path = require("path")

/* Ruta raiz */
app.get("/", function(req, res) {
    let file = path.resolve('scr/index.html')    
    res.sendFile(file)
})

/* Llamado a distintos CSS e imagenes*/
app.get('*', function(req, res){

    // resuelve ruta de estilos
        if(req.url.endsWith('.css')){
            let file = path.resolve('public/styles' + req.url)
            return res.sendFile(file)
        }
    
    // resuelve ruta de imagenes
        let images = ['jpg', 'jpeg', 'gif', 'png', 'bmp', 'webp', 'svg']
        let ext = req.url.split('.')[1]
        if(images.includes(ext)){
            let file = path.resolve('public/images' + req.url)
            return res.sendFile(file)
        }
    })

/* Llamado a servidor - Puerto 3000 */
app.listen(3000)