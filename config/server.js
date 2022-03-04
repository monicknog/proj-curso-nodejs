// incorporando a biblioteca express a nossa aplicação
const express = require('express')

const app = express()


// define o motor de views como sendo o EJS
app.set('view engine', 'ejs')

// setar o diretorio de views do EJS
app.set('views', './app/views')

// o caminho dos arquivos estáticos
app.use(express.static('./app/public'))


module.exports = app