let ul = document.getElementsByTagName("ul")[0]

ul.addEventListener("click", function (e) {
    if (e.target.dataset.purpose === "upVote") {
        // node.dataset.purpose = "upVote"
        // console.log(e.target.dataset.purpose)
        let parentLi = e.target.parentNode
        let span = parentLi.querySelector("span")
        span.innerText = parseInt(span.innerText) + 1

    } else if (e.target.innerText === "X") {
        // e.target.parentNode.remove()
        let parentLi = e.target.parentNode
        parentLi.remove()

    }

    // switch (e.target.dataset.purpose) {
    //     case "upVote":
    //         //do a thing
    //         break;

    //     case "delete":
    //         //do another thing
    //         break;

    //     default:
    //         break;
    // }



})

function appendLi(albumObj) {
    let li = document.createElement("li")
    li.innerHTML = `
    <h3>${albumObj.title}</h3>
    <img alt=""
    src=${albumObj.image} />
    <h4>Artist: </h4>
    <p>${albumObj.artist}</p>
    <h4>Score: <span>0</span> </h4>
    <button class="upVote" data-purpose="upVote">Up Vote</button>
    <button>Down Vote</button>
    <button>X</button>
    `
    li.className = "album"
    return li
}


let albums = [
    { title: "Michael Buble Christmas", image: "https://images-na.ssl-images-amazon.com/images/I/71UTGwpfwwL._SY355_.jpg", artist: "Michael Buble" }, { title: "Cee Lo's Magic Moment", image: "https://images-na.ssl-images-amazon.com/images/I/61xGTeDZdwL.jpg", artist: "Cee Lo Green" }, { title: "Home For Christmas", image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Home_for_Christmas.png/220px-Home_for_Christmas.png", artist: "N'Sync" }
]

// go to each object in the array 
albums.forEach(function (album) {
    // create an li with interpolated information from the objects
    // add it to our DOM tree 
    //appendLi is defined on line 6
    ul.append(appendLi(album))
})


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


        ul.append(appendLi(newAlbum))

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