import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'


class App extends Component {
  // Render: componentWillMount() --> render() --> componentDidMount()
  // update componentWillReceiveProps() --> shouldComponentUpdate() --> componetWillUpdate() --> render() --> component 

  state = {}

  componentDidMount(){
    this._getMovies();
  }

  _rednerMovies =() => {
    const movies = this.state.movies.map((movie) => {
      return <Movie 
      title={movie.title_english} 
      poster={movie.medium_cover_image} 
      key={movie.id} 
      genres={movie.genres} 
      synopsis={movie.synopsis}
      />
    })
    return movies;
  }

  _getMovies = async () =>{
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () =>{
    return fetch("https://yts.lt/api/v2/list_movies.json?sort_by=download_count")
    .then(potato => potato.json())
    .then(json=> json.data.movies)
    .catch(err=>console.log(err))
  }

  render(){
    const {movies} = this.state;
    return(
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._rednerMovies() : 'Loading'}
      </div>
    );
  }
}
export default App;


//Version 01
// import React from 'react';
// import './App.css';
// import Movie from './Movie';

// const movies = [
//   {
//     title: "Hugo",
//     poster: "https://m.media-amazon.com/images/M/MV5BMjAzNzk5MzgyNF5BMl5BanBnXkFtZTcwOTE4NDU5Ng@@._V1_.jpg"
//   },
//   {
//     title: "La La Land",
//     poster: "https://images-na.ssl-images-amazon.com/images/I/41-DDcNrazL.jpg"
//   },
//   {
//     title: "Lincoln",
//     poster: "https://images-na.ssl-images-amazon.com/images/I/41AFuv1YnAL._SY450_.jpg"
//   },
//   {
//     title: "Mad Max: Fury Road",
//     poster: "https://assets.www.warnerbros.com/sites/default/files/mad_max_fury_road_whv_keyart.jpg"
//   },
//   {
//     title: "Inception",
//     poster: "http://images2.fanpop.com/image/photos/13300000/Inception-Poster-inception-2010-13368478-1029-1500.jpg"

//   },
//   {
//     title: "Alice in Worderland",
//     poster: "https://images-na.ssl-images-amazon.com/images/I/91NJTuwDDhL._SL1500_.jpg"
//   },
//   {
//     title: "Amadeus",
//     poster: "https://m.media-amazon.com/images/M/MV5BNWJlNzUzNGMtYTAwMS00ZjI2LWFmNWQtODcxNWUxODA5YmU1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg"
//   },
//   {
//     title: "Gigi",
//     poster: "http://www.benitomovieposter.com/catalog/images/movieposter/132499.jpg"
//   },
//   {
//     title: "King of Jazz",
//     poster: "https://www.movieposter.com/posters/archive/main/210/MPW-105035"
//   }
// ]

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         {movies.map((movie, index)=> {
//           return <Movie title= {movie.title} poster={movie.poster} key={index} />
//         })}
//       </div>
//     );
//   }
// }

// // NEW SYNTAX
// // function App() {
// //   return (
// //     <div className="App"> 
// //       {movies.map((movie, index) => {
// //         movie =
// //         return <Movie title={movie.title} poster={movie.poster} key={index} />
// //       })}
// //     </div>
// //   );
// // }

// export default App;
