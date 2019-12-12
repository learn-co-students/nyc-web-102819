function getAlbums() {
    return fetch(`http://localhost:3000/albums`)
        .then(function (response) { return response.json() })
        .then(function (albums) {
            albums.forEach(function (album) {
                ul.append(appendLi(album))
            })
        })
}

function createAlbum(album) {
    fetch(`http://localhost:3000/albums`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            accepts: "application/json"
        },
        body: JSON.stringify(album)
    })
    // Code for pessimistic rendering: 
    // .then(function (resp) { return resp.json() })
    // .then(function (newAlbum) { ul.append(appendLi(newAlbum)) })
}
function updateAlbumScore(id, score) {

    fetch(`http://localhost:3000/albums/${id}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json",
            accepts: "application/json"
        },
        body: JSON.stringify({ score })
    })

}



let ul = document.getElementsByTagName("ul")[0]
getAlbums()




ul.addEventListener("click", function (e) {
    if (e.target.dataset.purpose === "upVote") {
        // node.dataset.purpose = "upVote"
        // console.log(e.target.dataset.purpose)
        console.log(e.target.dataset.score)
        e.target.dataset.score = parseInt(e.target.dataset.score) + 1
        let parentLi = e.target.parentNode
        let span = parentLi.querySelector("span")
        span.innerText = parseInt(span.innerText) + 1
        updateAlbumScore(e.target.dataset.id, e.target.dataset.score)

    } else if (e.target.innerText === "X") {
        // e.target.parentNode.remove()
        let parentLi = e.target.parentNode
        parentLi.remove()

    }
})

function appendLi(albumObj) {
    let li = document.createElement("li")
    li.innerHTML = `
    <h3>${albumObj.title}</h3>
    <img alt=""
    src=${albumObj.image} />
    <h4>Artist: </h4>
    <p>${albumObj.artist}</p>
    <h4>Score: <span>${albumObj.score}</span> </h4>
    <button class="upVote" data-purpose="upVote" data-id=${albumObj.id} data-score=${albumObj.score}>Up Vote</button>
    <button>Down Vote</button>
    <button>X</button>
    `
    li.className = "album"
    return li
}


// Add a button to my DOM with innerText 'add album' underneath the h1
let formButton = document.createElement("button")
formButton.innerText = "add album"
let welcome = document.querySelector("img")
welcome.insertAdjacentElement("afterend", formButton)

formButton.addEventListener("click", function () {
    // on click of this button the button should be replaced with a form
    let newForm = document.createElement("form")
    newForm.innerHTML = `<input type="text" placeholder="album title" name="title"/>
    <input type="text" name="artist"/>
    <input type="text" name="image"/>
    <input type="submit" value="submit" />`
    console.log("clicking", newForm)
    document.body.replaceChild(newForm, formButton)

    newForm.addEventListener("submit", function (e) {
        e.preventDefault()
        let title = e.target.title.value
        let artist = e.target.artist.value
        let image = e.target.image.value
        console.log(title)

        let newAlbum = { title: title, artist: artist, image: image, score: 0 }

        createAlbum(newAlbum)


        newForm.reset()

        document.body.replaceChild(formButton, newForm)

    })


    // formButton.remove()
    // welcome.insertAdjacentElement("afterend", newForm)
})
// form should work 

{/* < form >
    <label>Album Name:</label> <input type="text" placeholder="album title" />
    <input type="text" />
    <input type="number" />
    <input type="submit" value="submit" />
</form > */}