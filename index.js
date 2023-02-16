const movies = document.getElementsByClassName('movie')

const movieHandler = () => {
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=ab914da83ff50db0baf3acd601780e5f&language=en-US&page=1')
        .then((res) => {
            let movieList = res.data.results
            for (let i = 0; i < movieList.length; i++) {
                movies[i].textContent = movieList.original_title
            }
        })
}

movieHandler()