import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis';


function Movie({title, poster, genres, synopsis}){
  return (
    <div className="Movie">
      <div className="Movie__Columns">
       <MoviePoster poster={poster} alt={title}/>
      </div>
      <div className="Movie__Columns">
        <h1>{title}</h1>
        <div className="Movie__Genres">
          {genres.map((genre, index)=> <MovieGenre genre={genre} key={index} />)}
        </div>
        <p className="Movie__Synopsis">
          <LinesEllipsis
            text={synopsis}
            maxLine='3'
            ellipsis=' ...'
            trimRight
            basedOn='letters'
            />
        </p>
      </div>
    </div>
  )
}

function MoviePoster({poster, alt}){
  return (
    <img src={poster} alt={alt} title={alt} className="Movie__poster"/>
  )
}

function MovieGenre({genres}){
  return (
    <span className="Movie__Genres">{genres}</span>
  )
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes={
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

MovieGenre.propTypes={
  genre: PropTypes.string.isRequired
}

export default Movie;


// class Movie extends Component {

//   static propTypes={
//     title: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired
//   }

//     render() {
//     return (
//       <div>
//         <MoviePoster poster={this.props.poster} />
//         <h1> {this.props.title} </h1>
//       </div>
//     );
//   }
// }

// class MoviePoster extends Component{

//   static propTypes={
//     poster: PropTypes.string.isRequired
//   }

//   render(){
//     return (
//       <div>
//         <img src={this.props.poster} alt="poster" />
//       </div>
//     )
//   }
// }








// My Version 01
// import React, { Component } from 'react';
// import './Movie.css';

// class Movie extends Component{

//   static propTypes = {
//     title: React.propTypes.string,
//     poster: React.propTypes.string
//   }

//   render(){
//     return(
//       <div>
//         <MoviePoster poster={this.props.poster}/>
//         <h1>{this.props.title}</h1>
//       </div>
//     )
//   }
// }

// class MoviePoster extends Component{
//   render(){
//     return(
//       <img src={this.props.poster} />
//     )
//   }
// }

// export default Movie