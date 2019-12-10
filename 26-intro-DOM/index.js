console.log("Xmas Music Trash Dot Com")


let ul = document.getElementsByTagName("ul")[0]
function appendLi() {
    let li = document.createElement("li")
    let h3 = document.createElement("h3")
    h3.innerText = "michael buble Christmas"


    li.innerHTML = `
    <h3>Michael Buble Christmas</h3>
                    <img alt=""
                        src="https://images-na.ssl-images-amazon.com/images/I/71UTGwpfwwL._SY355_.jpg" />
                    <h4>Artist: </h4>
                    <p>Michael Buble</p>
                    <h4>Score: <span>0</span> </h4>
                    <button>Up Vote</button>
                    <button>Down Vote</button>
    `
    li.className = "album"

    return li
}
ul.append(appendLi())