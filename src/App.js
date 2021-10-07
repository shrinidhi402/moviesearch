import React ,{useState ,useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import List from './components/List';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Favourites from './components/Favourites';
import RemoveMovie from './RemoveMovie';

function App() {

  const [movies,setMovies] =  useState([]);
  const [favourites, setFavourites] = useState([]);
  const [search,setSearch] =  useState("");


  const getRequest = async (search) => {
    const url = `https://www.omdbapi.com/?s=${search}&apikey=52280d8a`

    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search)
    {setMovies(responseJson.Search)}
  };

  useEffect(() => {
   getRequest(search);
  }, [search])

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem('react-movie-app-favourites')
      );
    setFavourites(movieFavourites);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items))
  }

  const addToFavourite =(movie) => {
    const newMovieList = [...favourites, movie]
    setFavourites(newMovieList);
    saveToLocalStorage(newMovieList);
  }

  const removeFavourite = (movie) => {
    const newMovieList1 = favourites.filter((favourites) => favourites.imdbID !== movie.imdbID
    );
    setFavourites(newMovieList1);
    saveToLocalStorage(newMovieList1);
  }

  return (
    <div className="pagebody">
      
      <div className="header">
      <Header title ="MovieSearch"/>
      <SearchBar search={search} setSearch={setSearch}/>
      </div>
      <div className="imgbody">
      <List movies={movies} handleFavouriteClick={addToFavourite} favouriteComponent={Favourites}/>
      </div>
      <div className="header">
        <Header title="My List" />
      </div>
      <div className="imgbody">
      <List movies={favourites}  handleFavouriteClick={removeFavourite}  favouriteComponent={RemoveMovie}/>
      </div>
    
    </div>
  );
}

export default App;
