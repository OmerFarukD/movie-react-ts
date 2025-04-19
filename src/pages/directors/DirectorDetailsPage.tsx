import {FC, useEffect, useState} from "react";
import {useParams} from "react-router";
import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import api from "../../services/api.ts";
import {DirectorResponseDto} from "../../models/directors/DirectorResponseDto.ts";
import {AxiosResponse} from "axios";
import {getMonthName, parseDateModel} from "../../utils/date/dateUtils.ts";
import {DateModel} from "../../utils/date/DateModel.ts";
const  DirectorDetailsPage:FC =()=> {


    const {id} = useParams();
    const  [director,setDirector] = useState<DirectorResponseDto>({
        id:0,
        imageUrl:"",
        birthDay:"",
        surname:"",
        name:""
    })

    useEffect(() => {
        fetchData()
    }, [id]);



    const dateModel:DateModel = parseDateModel(director.birthDay)

    const fetchData = async ()=>{
        try{
            const response:AxiosResponse<DirectorResponseDto> = await  api.get(`/Directors/getbyid?id=${id}`)
            setDirector(response.data)

        }catch (e:any){
            console.log(e.response)
        }
    }

    return (
        <Card>
            <CardMedia
                sx={{ height: 200 }}
                image={director.imageUrl}
                title={director.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {director.name} {director.surname}
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

export default DirectorDetailsPage;