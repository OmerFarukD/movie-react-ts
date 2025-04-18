import React, {FC, useEffect,useState} from 'react';
import {CategoryResponse} from "../../models/categories/CategoryResponse.ts";
import  {AxiosResponse} from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Box, Button} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import AddIcon from '@mui/icons-material/Add';
import api from "../../services/api.ts";
import { Link } from 'react-router';

const CategoriesPage:FC =()=> {

    const [categories, setCategories] = useState<CategoryResponse[]>([])

    useEffect(()=>{
        fetchData();
    },[])


    const  fetchData = async ()=>{

        try{
            const response:AxiosResponse<CategoryResponse[]> = await api.get("/categories/getall")
            setCategories(response.data)

        }catch (e){
            console.log(e)
        }


    }

    return (
        <Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 350 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Kategori Adı</TableCell>
                            <TableCell>İşlemler</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            categories.map((item)=>(
                                <TableRow key={item.id}>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.name}</TableCell>
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

                                    </TableCell>

                                </TableRow>

                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>

            <Button variant="contained" color="success"  sx={{marginY:2}} endIcon={<AddIcon/>}><Link style={{textDecoration:"none", color:"white"}} to={"/categoryAdd"}>Ekle</Link></Button>
        </Box>


    );
}

export default CategoriesPage;
