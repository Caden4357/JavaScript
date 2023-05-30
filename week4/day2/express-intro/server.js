const express = require('express')
const app = express()

const port = 8000

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


const albums = [
    {id: 1, albumName: 'Blue Slide Park', artist: 'Mac Miller'},
    {id: 2, albumName: 'Her Loss', artist: 'Drake & 21 Savage'}
]

app.get('/api/allAlbums', (req,res) => {
    res.json(albums)
})

app.post('/api/newAlbum', (request, response) => {
    console.log(request.body);
    albums.push(request.body)
    response.status(200).json(albums)
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );