import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import api from "../../services/api.ts";
import {FC, useEffect, useState} from "react";
import {ArtistResponseDto} from "../../models/artists/ArtistResponseDto.ts";
import {AxiosResponse} from "axios";
import {Box, Button} from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import DeleteIcon from "@mui/icons-material/Delete";
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router";

const ArtistsPage:FC = ()=> {

    const [artists,setArtists] = useState<ArtistResponseDto[]>([]);

    const fetchData = async () => {
        const response:AxiosResponse<ArtistResponseDto[]> = await api.get("/Artists/getall")
        setArtists(response.data)
    }



    useEffect(()=>{
        fetchData()
    },[])

    return (
        <Box>
            <Typography variant="h5" color="textSecondary" sx={{marginBottom:2}}>Oyuncular Listesi</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Oyuncu Adı</TableCell>
                            <TableCell>Doğum Tarihi</TableCell>
                            <TableCell>İşlemler</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            artists.map((artist)=>(

                                <TableRow>
                                    <TableCell>{artist.fullName}</TableCell>
                                    <TableCell>{artist.birthDate}</TableCell>
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
                                           <Link style={{textDecoration:"none"}} to={`/artists/${artist.id}`}>Detaya Git</Link>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        }

                     <TableRow>
                     </TableRow>
                    </TableBody>


                </Table>

            </TableContainer>

            <Button variant="contained" color="success" sx={{marginY:2}} endIcon={<AddIcon/>}>Ekle</Button>

        </Box>
    );
}

export default ArtistsPage;