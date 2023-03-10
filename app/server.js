var express = require('express') //llamamos a Express
var app = express()               

var port = process.env.PORT || 8080  // establecemos nuestro puerto

app.get('/', function(req, res) {
  res.json({ mensaje: '¡Hola Mundo!' })   
})

app.get('/cervezas', function(req, res) {
  res.json({ mensaje: '¡A beber cerveza!' })  
})

app.post('/', function(req, res) {
  res.json({ mensaje: 'Método post' })   
})

app.del('/', function(req, res) {
  res.json({ mensaje: 'Método delete' })  
})

// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)

// para establecer las distintas rutas, necesitamos instanciar el express router
var router = express.Router()             

//establecemos nuestra primera ruta, mediante get.
router.get('/', function(req, res) {
  res.json({ mensaje: '¡Bienvenido a nuestra API!' })  
})

/*

// nuestra ruta irá en http://localhost:8080/api
// es bueno que haya un prefijo, sobre todo por el tema de versiones de la API
app.use('/api', router)

//nombre personalizado
router.get('/:nombre', function(req, res) {
  res.json({ mensaje: '¡Hola' + req.params.nombre })   
})

//utilizando el body-parser
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

router.post('/',function(req,res) { 
  res.json({mensaje: req.body.nombre})  
})

var express = require('express') //llamamos a Express
var app = express()       
var bodyParser = require('body-parser')        

var port = process.env.PORT || 8080  // establecemos nuestro puerto

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())            

// nuestra ruta irá en http://localhost:8080/api
// es bueno que haya un prefijo, sobre todo por el tema de versiones de la API
var router = require('./routes')
app.use('/api', router)

//arrancamos el servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)*/