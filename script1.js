const API_LINK = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cc9a1ccb734036e20f88e8d522005dd2&page=1";
const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=cc9a1ccb734036e20f88e8d522005dd2&query=";

const main = document.getElementById('section');
const form = document.getElementById('form');
const search = document.getElementById('query');

returnMovies(API_LINK);

function returnMovies(url) {
   fetch(url)
     .then(res => res.json())
     .then(data => {
        main.innerHTML = "";
        data.results.forEach(element => {

            const card = document.createElement('div');
            card.classList.add("card");

            const img = document.createElement('img');
            img.classList.add("Thumbnail");
            img.src = element.poster_path
                ? IMAGE_PATH + element.poster_path
                : "https://via.placeholder.com/300x450?text=No+Image";

            const title = document.createElement('h3');
            title.textContent = element.title;

            card.appendChild(img);
            card.appendChild(title);
            main.appendChild(card);
        });
     })
     .catch(err => console.error("Error:", err));
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';

    const searchItem = search.value.trim();

    if (searchItem) {
        returnMovies(SEARCH_API + encodeURIComponent(searchItem));
        search.value = '';
    }
});




/*const API_LINK = "https://api.themoviedb.org/movie";
const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=cc9a1ccb734036e20f88e8d522005dd2&query=batman";


const main = document.getElementById('section');

const form = document.getElementById('form');
const search = document.getElementById('query');

returnMovies(API_LINK)
function returnMovies(url) {
   fetch(url).then(res => res.json())
   .then(function(data){
     console.log(data.results);
     data.results.forEach( element => {
        const div_card = document.createElement('div');
        div_card.classList.add("card");

        const div_row = document.createElement('div');
        div_row.classList.add("row");

        const div_column = document.createElement('div');
        div_column.classList.add("column");

        const image = document.createElement('img');
        image.classList.add("Thumbnail");
        image.src = IMAGE_PATH + element.poster_path;

        const title = document.createElement('h3');
        title.innerHTML = `${element.title}`;
        image.src = IMAGE_PATH + element.poster_path;

        const center = document.createElement("centered");
        
        center.appendChild(image);
        div_card.appendChild(center);
        div_card.appendChild(title);
        div_column.appendChild(div_row);
        div_row.appendChild(div_column);
        
        main.appendChild(div_row);
     });
   });
}

form.addEventListener( "submit", (e) => {
    e.preventDefault();
    main.innerHTML =  '';

    const searchItem = search.value;

    if(searchItem) {
        returnMovies(SEARCH_API + searchItem);
        search.value = '';
    }
});*/