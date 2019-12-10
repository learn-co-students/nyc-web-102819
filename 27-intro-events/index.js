console.log("does he?")


let ul = document.getElementsByTagName("ul")[0]

function appendLi(albumObj) {
    let li = document.createElement("li")

    li.innerHTML = `
    <h3>${albumObj.title}</h3>
    <img alt=""
    src=${albumObj.image} />
    <h4>Artist: </h4>
    <p>${albumObj.artist}</p>
    <h4>Score: <span>0</span> </h4>
    <button class="upVote">Up Vote</button>
    <button>Down Vote</button>
    `
    li.className = "album"

    return li
}


let albums = [
    { title: "Michael Buble Christmas", image: "https://images-na.ssl-images-amazon.com/images/I/71UTGwpfwwL._SY355_.jpg", artist: "Michael Buble" }, { title: "Cee Lo's Magic Moment", image: "https://images-na.ssl-images-amazon.com/images/I/61xGTeDZdwL.jpg", artist: "Cee Lo Green" }, { title: "Home For Christmas", image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Home_for_Christmas.png/220px-Home_for_Christmas.png", artist: "N'Sync" }
]

// go to each object in the array 
albums.forEach(function (album) {
    // create and li with interpolated information from the objects
    // add it to our DOM tree 
    //appendLi is defined on line 6
    ul.append(appendLi(album))
})

let buttons = document.querySelectorAll(".upVote")
let buttonsArray = Array.from(buttons)
console.log(buttons)


buttonsArray.forEach(function (button) {
    button.addEventListener("click", function (e) {
        console.log("clicking")
        let parentLi = e.target.parentNode
        let span = parentLi.querySelector("span")
        span.innerText = parseInt(span.innerText) + 1

    })
})

