// type the name of the movie for this api to work and fetch the information.



// get the information from the api.
async function fetchMovieDetails(movie) {
    try {
      const response = await fetch(`https://swapi.dev/api/films/?search=${movie}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('There was an error fetching movie details:', error);
    }
  }

// displays the movie details if the function is able to find the movie.
  function displayMovieDetails(movieData) {
    const movieDetails = document.getElementById('movieDetails');
  
    if (movieData.count === 0) {
      movieDetails.textContent = 'Movie was not found.';
      return;
    }
  
    const movie = movieData.results[0];
    movieDetails.innerHTML = `
      <h2>${movie.title}</h2>
      <p><strong>Episode:</strong> ${movie.episode_id}</p>
      <p><strong>Director:</strong> ${movie.director}</p>
      <p><strong>Producer:</strong> ${movie.producer}</p>
      <p><strong>Release Date:</strong> ${movie.release_date}</p>
      <p><strong>Opening Crawl:</strong></p>
      <p>${movie.opening_crawl}</p>
    `;
  }
// get the desired details for the movie that the user types.
  function getMovieDetails() {
    const movieInput = document.getElementById('movieInput').value.trim();
  
    if (movieInput !== '') {
      fetchMovieDetails(movieInput)
        .then(data => displayMovieDetails(data))
        .catch(error => console.log('There was an error fetching movie details:', error));
    }
  }
  