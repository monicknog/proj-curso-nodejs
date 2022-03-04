// Iniciar o NPM
// npm init
// git init
// npm install express
// npm install -g nodemon
// npm install ejs

const app = require('./config/server')

// recuperando o modulo mockup
const noticias = require('./mockup')

// rotas da aplicação

// rota home
app.get('/', function (req, res) {
    res.render('home/index', { noticias: noticias.slice(0, 3) })
})

// rota Notícia
app.get('/noticia', function (req, res) {
    // recuperar o paramentro passado na URL pelo método GET
    const id = req.query.id
    // passaremos para a renderização do arquivo EJS o elemento da lista correspondente ao ID
    res.render('noticias/noticia', { noticia: noticias[id] })
})

// rota notícias
app.get('/noticias', function (req, res) {
    // podemos passar como argumento no método render um JSON com contéudos da nossa aplicação, para ser trabalahdo na construção da página Web
    res.render('noticias/noticias', { noticias: noticias })
})

// rota admin
app.get('/admin', function (req, res) {
    res.render('admin/form_add_noticia')
})

app.listen(3000, () => {
    console.log('Servidor rodando com express')
})