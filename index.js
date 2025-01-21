// User's Logo - Add's Users name to Header Logo
// const userName = prompt("What is your name?")
// const logo = document.getElementById("logo")
// logo.innerHTML = `${userName}'s FlickFinder`

// Movies and TV Show OG Lists 
let movies = [
  "The Shawshank Redemption", 
  "The Godfather", 
  "The Dark Knight", 
  "Pulp Fiction", 
  "12 Angry Men", 
  "Schindler's List", 
  "The Lord of the Rings", 
  "Goodfellas", 
  "Fight Club", 
  "Forrest Gump" 
];

let tvShows = [
  "The Mandalorian",
  "Game of Thrones", 
  "The Witcher", 
  "Cobra Kai", 
  "The Boys", 
  "The Office (US)", 
  "Parks and Recreation", 
  "Fleabag", 
  "The Good Place", 
  "Ted Lasso" 
];

// Flick Container HTML Elements
const flickContainer = document.getElementById("flick-container")
const randomFlick = document.getElementById("random-flick")
const showBtn = document.getElementById("show-btn")
const movieBtn = document.getElementById("movie-btn")
const flickBtn = document.getElementById("find-btn")

// Libary Container HTML Elements
const libaryContainer = document.getElementById("library-container")
const movieListEl = document.getElementById("movie-list-el")
const showListEl = document.getElementById("show-list-el")
const libraryBtn = document.getElementById("library-btn") 

// Add Container HTML Elements
const addContainer = document.getElementById("add-container")
const inputEl = document.getElementById("input-el")
const submitBtn = document.getElementById("submit-btn")
const addBtn = document.getElementById("add-btn")
const addShowBtn = document.getElementById("add-show-btn")
const addMovieBtn = document.getElementById("add-movie-btn")

// Booleans to flip the toggles for show/movie btns
let watchMovies = false
let watchTvShow = false

// Toggles between 2 CSS class styles 
function toggle(btn) {
  btn.classList.toggle("primary-hightlighted-btn")
  btn.classList.toggle("primary-btn")
}

showBtn.addEventListener("click", function() {
  if(watchTvShow === false) {
    // Highlights the ShowBtn
    toggle(showBtn)
    watchTvShow = true
    // Default the MovieBtn
    movieBtn.classList.add("primary-btn")
    movieBtn.classList.remove("primary-hightlighted-btn")
    watchMovies = false
    console.log(watchTvShow)
  } else {
    // Default the ShowBtn
    watchTvShow = false
    showBtn.classList.add("primary-btn")
    showBtn.classList.remove("primary-hightlighted-btn")
    console.log(watchTvShow)
  }
})

movieBtn.addEventListener("click", function() {
  if(watchMovies === false) {
    // Highlights the MovieBtn
    toggle(movieBtn)
    watchMovies = true
    // Default the ShowBtn
    showBtn.classList.add("primary-btn")
    showBtn.classList.remove("primary-hightlighted-btn")
    watchTvShow = false
    console.log(watchMovies)
  } else {
    // Default the MovieBtn
    watchMovies = false
    movieBtn.classList.add("primary-btn")
    movieBtn.classList.remove("primary-hightlighted-btn")
    console.log(watchMovies)
  }
})

// Renders the Flick Found Page on screen
function renderflickContainer(toWatch) {
  flickContainer.style.display = 'flex'
  randomFlick.innerHTML = `${toWatch}`
}

// Selects the random flick to watch
function findRandomFlick(flick) {
    let toWatch = Math.floor( Math.random() * movies.length )
    toWatch = flick[toWatch]
    console.log(toWatch)
    renderflickContainer(toWatch)
}

// Generate the Random FLick
flickBtn.addEventListener("click", function() {
    if(watchMovies === true) {
      findRandomFlick(movies)
    } else if(watchTvShow === true) {
       findRandomFlick(tvShows)
    } else {
      alert("You need to click either Show or Movies")
    }
})

// Renders Library List on Page
  function renderflicklist(flick, list) {
      for(let i = 0; i < flick.length; i++) {
        console.log(flick[i])
        list.innerHTML +=`<li>${flick[i]}</li>`
    }
    
  }
  
// Displays the Library Page when Btn is Clicked
libraryBtn.addEventListener("click", function() {
  addContainer.style.display = 'none'
  flickContainer.style.display = 'none'
  libaryContainer.style.display = 'flex'
  renderflicklist(tvShows, showListEl)
  renderflicklist(movies, movieListEl)
})

// Add container - Add Movies / Shows to Library 
   let addMovie = false
   let addShow = false 

addBtn.addEventListener("click", function() {
  addContainer.style.display = 'flex'
  libaryContainer.style.display = 'none'
  flickContainer.style.display = 'none'
})

submitBtn.addEventListener("click" , function() {
      if(addMovie === true) {
        movies.push(inputEl.value)
        console.log(movies)
    } else if(addShow === true) {
        tvShows.push(inputEl.value)
        console.log(tvShows)
    } else {
      alert("You need to click either Show or Movies")
    }
    
    alert(`${inputEl.value} has been added to your Library`)
    addMovie = false
    addShow = false 
    inputEl.value = ''
})

addShowBtn.addEventListener("click", function() {
  if(addShow === false) {
    // Highlights the addShowBtn
    toggle(addShowBtn)
    addShow = true
    // Default the addMovieBtn
    addMovieBtn.classList.add("primary-btn")
    addMovieBtn.classList.remove("primary-hightlighted-btn")
    addMovie = false
    console.log(addShow)
  } else {
    // Default the addShowBtn
    addShow = false
    addShowBtn.classList.add("primary-btn")
    addShowBtn.classList.remove("primary-hightlighted-btn")
    console.log(addShow)
  }
})

addMovieBtn.addEventListener("click", function() {
  if(addMovie === false) {
    // Highlights the addShowBtn
    toggle(addMovieBtn)
    addMovie = true
    // Default the addMovieBtn
    addShowBtn.classList.add("primary-btn")
    addShowBtn.classList.remove("primary-hightlighted-btn")
    addShow = false
    console.log(addMovie)
  } else {
    // Default the addShowBtn
    addMovie = false
    addMovieBtn.classList.add("primary-btn")
    addMovieBtn.classList.remove("primary-hightlighted-btn")
    console.log(addMovie)
  }
})


// Close Modal 
const closeWatchBtn = document.getElementById("flick-return-btn")
const closeAddBtn = document.getElementById("add-return-btn")
const closeLibBtn = document.getElementById("library-return-btn")


closeWatchBtn.addEventListener("click", function() {
   flickContainer.style.display = 'none'
})

closeAddBtn.addEventListener("click", function() {
    addContainer.style.display = 'none'
})

closeLibBtn.addEventListener("click", function() {
   libaryContainer.style.display = 'none'
})