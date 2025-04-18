
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

function App() {

  return (
    <>
        <Container>

            <Navbar/>
            <Routes>
                <Route path={"/"} element={<MoviesPage/>}/>
                <Route path={"/categories"} element={<CategoriesPage/>}/>
                <Route path={"/directors"} element={<DirectorsPage/>}/>
                <Route path={"/artists"} element={<ArtistsPage/>}/>
                <Route path={"/login"} element={<LoginPage/>}/>
                <Route path={"/categoryAdd"} element={<CategoryAddForm/>}/>
            </Routes>
        </Container>

    </>
  )
}

export default App
