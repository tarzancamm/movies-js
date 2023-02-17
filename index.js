const movieImage = document.getElementsByClassName("movie-img");
const movieRating = document.getElementsByClassName("movie-rating");
const movieImage2 = document.getElementsByClassName("movie-img-2");
const movieRating2 = document.getElementsByClassName("movie-rating-2");
const movieImage3 = document.getElementsByClassName("movie-img-3");
const movieRating3 = document.getElementsByClassName("movie-rating-3");
const movieDesc3 = document.getElementsByClassName("movie-desc-3")
const movieImage4 = document.getElementsByClassName("movie-img-4");
const movieRating4 = document.getElementsByClassName("movie-rating-4");
const prev = document.getElementById("prev")
const next = document.getElementById("next")

const nowPlayingHandler = () => {
  axios
    .get(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=ab914da83ff50db0baf3acd601780e5f&language=en-US&page=1"
    )
    .then((res) => {
      let movieList = res.data.results;
      for (let i = 0; i < movieImage.length; i++) {
        movieImage[i].innerHTML = `<img src=https://image.tmdb.org/t/p/original${movieList[i].poster_path} />`;
        movieRating[i].textContent = movieList[i].vote_average.toFixed(1);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const popularHandler = () => {
  axios
    .get(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=ab914da83ff50db0baf3acd601780e5f"
    )
    .then((res) => {
      let popularMovies = res.data.results;
      for (let i = 0; i < movieImage2.length; i++) {
        movieImage2[i].innerHTML = `<img src=https://image.tmdb.org/t/p/original${popularMovies[i].poster_path} />`;
        movieRating2[i].textContent = popularMovies[i].vote_average.toFixed(1);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const topRatedHandler = () => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=ab914da83ff50db0baf3acd601780e5f&language=en-US&page=1`
    )
    .then((res) => {
      let topRatedMovies = res.data.results;
      for (let i = 0; i < movieImage3.length; i++) {
        movieImage3[i].innerHTML = `<img src=https://image.tmdb.org/t/p/original${topRatedMovies[i].poster_path} />`;
        movieRating3[i].textContent = topRatedMovies[i].vote_average.toFixed(1);
        movieDesc3[i].textContent = topRatedMovies[i].overview
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const upcomingHandler = () => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=ab914da83ff50db0baf3acd601780e5f&language=en-US&page=1`
    )
    .then((res) => {
      let upcomingMovies = res.data.results;
      console.log(upcomingMovies);
      for (let i = 0; i < movieImage4.length; i++) {
        movieImage4[i].innerHTML = `<img src=https://image.tmdb.org/t/p/original${upcomingMovies[i].poster_path} />`;
        movieRating4[i].textContent = upcomingMovies[i].vote_average.toFixed(1);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

// Functions run on initialization
nowPlayingHandler();
popularHandler();
topRatedHandler();
upcomingHandler();


prev.addEventListener("click", topRatedHandler)