
import './App.css'
import CategoriesPage from "./pages/categories/CategoriesPage.tsx";
import {Container} from "@mui/material";
import Navbar from "./components/Navbar.tsx";
import {Routes,Route} from "react-router";
import MoviesPage from "./pages/movies/MoviesPage.tsx";
import DirectorsPage from "./pages/directors/DirectorsPage.tsx";
import ArtistsPage from "./pages/artists/ArtistsPage.tsx";
import LoginPage from "./pages/users/LoginPage.tsx";
import CategoryAddForm from "./pages/categories/CategoryAddForm.tsx";
import MovieDetailsPage from "./pages/movies/MovieDetailsPage.tsx";
import DirectorDetailsPage from "./pages/directors/DirectorDetailsPage.tsx";
import ArtistDetailsPage from "./pages/artists/ArtistDetailsPage.tsx";

function App() {

  return (
    <>
        <Container>

            <Navbar/>
            <Routes>
                <Route path={"/"} element={<MoviesPage/>}/>
                <Route path={"/movies/:id"} element={<MovieDetailsPage/>}/>
                <Route path={"/categories"} element={<CategoriesPage/>}/>
                <Route path={"/directors"} element={<DirectorsPage/>}/>
                <Route path={"/directors/:id"} element={<DirectorDetailsPage/>}/>


                <Route path={"/artists"} element={<ArtistsPage/>}/>
                <Route path={"/artists/:id"} element={<ArtistDetailsPage/>}/>



                <Route path={"/login"} element={<LoginPage/>}/>


                <Route path={"/categoryAdd"} element={<CategoryAddForm/>}/>
            </Routes>
        </Container>

    </>
  )
}

export default App
