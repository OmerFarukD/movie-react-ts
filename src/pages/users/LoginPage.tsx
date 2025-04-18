import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {Box, Button, TextField} from "@mui/material";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import {useState} from "react";
import {LoginRequest} from "../../models/users/LoginRequest.ts";
import api from "../../services/api.ts";
import {AxiosResponse} from "axios";
import {AccessToken} from "../../models/users/AccessToken.ts";
import {setToken} from "../../services/authentication.ts";
import { useNavigate } from "react-router";

function LoginPage() {

    const [form,setForm] = useState<LoginRequest>({email:"",password:""});

    const  navigate = useNavigate();

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
            setForm({...form, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        try{
            const response:AxiosResponse<AccessToken> = await api.post('/auth/login', form)
            if (response.status === 200){
                setToken(response.data.token)
                navigate("/")
            }else{
                console.log(response.data)
            }
        }catch (e){
            console.log(e)
        }



    }

    return (






        <Box>
            <Paper sx={{padding:4}}>
                <Typography variant="h5" component="h5" color="textSecondary" sx={{marginBottom:2, textAlign:"center"}}>Giriş Yap Sayfası </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="email"
                        type="email"
                        name="email"
                        variant="outlined"
                        required
                        value={form.email}
                        onChange={handleOnChange}
                        fullWidth
                        margin="normal"

                    />


                    <TextField
                        label="password"
                        variant="outlined"
                        name="password"
                        value={form.password}
                        onChange={handleOnChange}
                        required
                        fullWidth
                        margin="normal"
                        type="password"

                    />

                    <Button type="submit" variant="contained" size="small" endIcon={<LoginOutlinedIcon/>}>Giriş Yap</Button>
                </form>

            </Paper>


        </Box>

    );
}

export default LoginPage;