# JS Fetch and Async

## GET: `http://localhost:3000/albums`

Example response:
`{id: 1, score: 0, title: "Merry Christmas", image: "https://media.pitchfork.com/photos/5ddbf1586133160008c6461a/1:1/w_320/mariahdeluxe.jpg", artist: "Mariah Carey"}`

## POST: `http://localhost:3000/albums`

body: `{score:  value, title: value, image:  value, artist: value}`
Example response:
`{id: 1, score: 0, title: "Merry Christmas", image: "https://media.pitchfork.com/photos/5ddbf1586133160008c6461a/1:1/w_320/mariahdeluxe.jpg", artist: "Mariah Carey"}`

## PATCH: `http://localhost:3000/albums/:id`

body: `{attribute: value}`
Example response: 
`{id: 1, score: 0, title: "Merry Christmas", image: "https://media.pitchfork.com/photos/5ddbf1586133160008c6461a/1:1/w_320/mariahdeluxe.jpg", artist: "Mariah Carey"}`

## DELETE: http://localhost:3000/albums/:id`