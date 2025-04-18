
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {Box, Button} from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import DeleteIcon from "@mui/icons-material/Delete";
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import {useEffect, useState} from "react";
import {DirectorResponseDto} from "../../models/directors/DirectorResponseDto.ts";
import api from "../../services/api.ts";
import AddIcon from "@mui/icons-material/Add";

function DirectorsPage() {

    const [directors,setDirectors] = useState<DirectorResponseDto[]>([]);

    useEffect(()=>{
        fetchData()
    },[])

    const  fetchData = async ()=>{
        const  response = await  api.get("/Directors/getall")
        if(response.status == 200){
            setDirectors(response.data);
        }
    }

    return (
        <Box>
            <Typography variant="h5" color="textSecondary" sx={{marginBottom:2}}>Oyuncular Listesi</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Yönetmen Adı</TableCell>
                            <TableCell>Yönetmen Soyadı</TableCell>
                            <TableCell>Doğum Tarihi</TableCell>
                            <TableCell>İşlemler</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            directors.map((item)=>(
                                <TableRow>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.surname}</TableCell>
                                    <TableCell>{item.birthDay}</TableCell>
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
                                            Detaya Git
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

export default DirectorsPage;