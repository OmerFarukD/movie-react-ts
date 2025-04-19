import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {getMonthName, parseDateModel} from "../../utils/date/dateUtils.ts";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import {ArtistResponseDto} from "../../models/artists/ArtistResponseDto.ts";
import {DateModel} from "../../utils/date/DateModel.ts";
import {AxiosResponse} from "axios";
import api from "../../services/api.ts";

function ArtistDetailsPage(props) {

    const {id} = useParams();
    const  [artist,setArtist]=useState<ArtistResponseDto>({id:0,imageUrl:"",birthDate:"",fullName:""});

    const dateModel:DateModel = parseDateModel(artist.birthDate)

    useEffect(() => {
        fetchData()
    }, [id]);

    const fetchData = async ()=>{

        const  response: AxiosResponse<ArtistResponseDto> = await  api.get(`/Artists/getbyid?id=${id}`)
        setArtist(response.data)
    }


    return (
        <Card>
            <CardMedia
                sx={{ height: 200 }}
                image={artist.imageUrl}
                title={artist.fullName}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {artist.fullName}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Doğum Tarihi : {dateModel.day} / {getMonthName(dateModel.month)} / {dateModel.year}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="outlined">Anasayfaya Dön</Button>
            </CardActions>
        </Card>
    );
}

export default ArtistDetailsPage;
