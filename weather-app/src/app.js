const expres = require('express')
const path = require('path')
const hbs = require('hbs')
const request = require('request')
const weatherData = ('../utils/weatherData')
const app = expres() // serveri

// Thirrja e path-it (Define path)
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partial')

// Setup per perdorimin e file-ve 
app.set('view engine', 'hbs');
app.set('views', viewsPath) // file-at dinamik
hbs.registerPartials(partialsPath)

// Setup-i per file statik
app.use(expres.static(publicDirectoryPath))





// get home page: url/localhost:3000
app.get('', (req, res) => {
    res.render('index', {
        title: "Weather",
        name: "Semin Salihi"
    })
})

// url : localhost:3000/ndihme = www.vardona.com/
app.get('/help', (req, res) => {
    res.render('help', {
        title: "Help",
        name: "Semin Salihi",
        helpText: "Ask of our agnet for help"
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About",
        name: "Semin Salihi",
        img: "/images/foto.png"
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: "You must choose product"
        })
    }

    console.log(req.query.search)
    res.send({
        products: ['pc', 'maus']
    })
})

// app.get("/weather", (req, res) => {

//     if (!req.query.adress) {
//         return res.send({
//             error: ' You must provide an adress'
//         })
//     }

//     console.log(req.query.adress)
//     res.send({
//         forecast: "It raining",
//         location: "Prizren"
//     })
// })



app.get('*', (req, res) => {
    res.render('404', {})
})

// localhost:3000/weather?address=Prizren
app.get("/weather", (req, res) => {

    const address = req.query.address
    weatherData(address, (result) => {
        console.log(result)
    })
})


//localhost:3000
app.listen(3000, () => {
    console.log('Server po ngon')
})