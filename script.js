const generatememe = document.querySelector(".button-meme");
const memeTitle = document.querySelector(".meme-title")
const memeImage = document.querySelector(".meme-image")
const memeAuthor = document.querySelector(".author span")


function getMem() {

       fetch('https://meme-api.com/gimme/wholesomememes')
              .then((res) => res.json())
              .then((data) => {
                     const { url, title, author } = data
                     memeTitle.innerText = title
                     memeImage.src = url
                     memeAuthor.innerText = `Meme by: ${author}`

                     console.log(url, title, author)
              }).catch((error) => {
                     console.log(error)
              })
       console.log("hey");
}

getMem()

generatememe.addEventListener('click', () => {
       getMem()
});
