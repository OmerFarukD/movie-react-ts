import {FC, useEffect, useState} from "react";
import {MovieAddRequestDto} from "../../models/movies/MovieAddRequestDto.ts";
import {Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import api from "../../services/api.ts";
import {CategoryResponse} from "../../models/categories/CategoryResponse.ts";
import {DirectorResponseDto} from "../../models/directors/DirectorResponseDto.ts";
import Paper from "@mui/material/Paper";

const MovieAddForm:FC =()=> {
    const [movie,setMovie] = useState<MovieAddRequestDto>({
        name:"",
        imdb:0,
        description:"",
        publishDate:"",
        categoryId:0,
        directorId:0,
        image:null,
        isActive:true
    })

    const [categories,setCategories] = useState<CategoryResponse[]>([])

    const [directors,setDirectors] = useState<DirectorResponseDto[]>([])


    const  fetchCategories = async ()=>{
        const response = await api.get("/categories/getall");
        setCategories(response.data)

    }

    const fetchDirectors = async ()=>{
        const  response = await  api.get("/directors/getall")
        setDirectors(response.data)
    }


    const fetchData = async ()=>{
        await  fetchDirectors();
        await  fetchCategories()
    }

    useEffect(() => {
        fetchData()
    }, []);




    return (
        <Paper  sx={{maxWidth:500, mx:"auto",mt:5, p:3}}>
            <Typography variant="h5" color="textSecondary" gutterBottom>Film Ekle</Typography>
            <Box component="form">
                <TextField
                    label={"Film Adı"}
                    type={"text"}
                    variant="outlined"
                    fullWidth={true}
                    margin={"normal"}
                    name={"name"}
                    value={movie.name}

                />


                <TextField
                    label={"Film Açıklaması"}
                    type={"text"}
                    variant="outlined"
                    fullWidth={true}
                    margin={"normal"}
                    name={"description"}
                    value={movie.description}

                />

                <TextField
                    label={"IMDB Puanı"}
                    type={"number"}
                    variant="outlined"
                    fullWidth={true}
                    margin={"normal"}
                    name={"description"}
                    value={movie.description}

                />

                <TextField
                    label={"Yayın Tarihi"}
                    type={"date"}
                    variant="outlined"
                    fullWidth={true}
                    margin={"normal"}
                    name={"publishDate"}
                    value={movie.publishDate}
                    InputLabelProps={{shrink:true}}

                />
                <FormControl>
                    <InputLabel sx={{marginY:1}}>Kategoriler</InputLabel>
                    <Select sx={{width:500}} variant={"outlined"}>
                        {
                            categories.map((category)=>(
                                <MenuItem key={category.id} value={category.id}>
                                    {category.name}
                                </MenuItem>
                            ))
                        }


                    </Select>
                </FormControl>


                <FormControl sx={{marginY:1}}>
                    <InputLabel >Yönetmenler</InputLabel>
                    <Select sx={{width:500}} variant={"outlined"}>
                        {
                            directors.map((director)=>(
                                <MenuItem key={director.id} value={director.id}>
                                    {director.name} {director.surname}
                                </MenuItem>
                            ))
                        }


                    </Select>


                    <Button sx={{marginY:2}} variant="outlined" component="label" >Resim Yükle

                        <input type="file" hidden={true} accept={"/image"}/>
                    </Button>
                </FormControl>



                <Button type="submit" variant={"contained"} fullWidth sx={{mt:2}} color={"success"} >
                    Ekle
                </Button>
            </Box>
        </Paper>
    );
}

export default MovieAddForm;


