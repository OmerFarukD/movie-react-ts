
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import {Box, Button} from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {FC, useEffect, useState} from "react";
import {MovieResponseDto} from "../../models/movies/MovieResponseDto.ts";
import api from "../../services/api.ts";
import DeleteIcon from "@mui/icons-material/Delete";
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router";

const MoviesPage:FC =()=> {

    const  [movies,setMovies] = useState<MovieResponseDto[]>([])

    useEffect(() => {
        fetchData()
    }, []);


    const  fetchData = async ()=>{
        const  response = await api.get("/Movies/getall");
        if (response.status===200){
            setMovies(response.data)
        }
    }


    return (
        <Box>
            <Typography variant="h5" color="textSecondary" sx={{marginBottom:2}}> Filmler Listesi</Typography>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                     <TableRow>
                      <TableCell>Film Adı</TableCell>
                      <TableCell>Imdb Puanı</TableCell>
                      <TableCell>Yayın Tarihi</TableCell>
                      <TableCell>Kategori Adı</TableCell>
                      <TableCell>Yönetmen Adı</TableCell>
                      <TableCell>İşlemler</TableCell>
                     </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            movies.map((movie)=>(
                                <TableRow>
                                    <TableCell>{movie.name}</TableCell>
                                    <TableCell>{movie.imdb}</TableCell>
                                    <TableCell>{movie.publishDate}</TableCell>
                                    <TableCell>{movie.categoryName}</TableCell>
                                    <TableCell>{movie.directorName}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="outlined"
                                            sx={{marginX:2}}
                                            color="error"
                                            endIcon={<DeleteIcon fontSize="small"/>}
                                            size="small"
                                        >
                                            Sil</Button>
                                        <Button size="small" variant="outlined" color="warning" endIcon={<AutoFixNormalIcon/>}>Güncelle</Button>

                                        <Button size={"small"} color={"info"} variant={"outlined"}  sx={{marginX:2}} endIcon={<InfoOutlineIcon/>} >
                                           <Link style={{textDecoration:"none"}} to={`/movies/${movie.id}`}>Detaya Git</Link>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))


                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant="contained" color="success" sx={{marginY:2}} endIcon={<AddIcon/>}>Ekle</Button>

        </Box>

    );
}

export default MoviesPage;