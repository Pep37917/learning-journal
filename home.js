/* imports */
import { postsData } from "./data.js"

/* VARIABLES */

const mainPost = document.getElementById("post-banner")
const viewBtn = document.getElementById("view-btn")
const postsContainer = document.getElementById("posts-container")

/* EVENT LISTENERS */

mainPost.addEventListener("click", function() {
    window.location.href = "./post.html"
})

viewBtn.addEventListener("click", function() {
    displayPosts()
})


/* functions */

function displayPosts() {
    postsData.forEach(function(post) {
        postsContainer.innerHTML += `
        <article class="post">
            <img src="${post.img}" alt="article image ${post.num}">
            <p class="post-date">${post.date}</p>
            <h2> Blog ${post.num}</h2>
            <p class="description">${post.description}</p>
        </article>`
    })

    viewBtn.style.display = "none";
}
