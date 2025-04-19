import {ChangeEvent, FormEvent, useState} from 'react';
import Paper from "@mui/material/Paper";
import {Alert, Box, Button, Snackbar, TextField, Typography} from '@mui/material';
import {CategoryAddRequest} from "../../models/categories/CategoryAddRequest.ts";
import api from "../../services/api.ts";
import {useNavigate} from "react-router";

function CategoryAddForm() {

    const navigate = useNavigate();


    // Snackbar States

    const [openSnackbar,setOpenSnackbar] = useState<boolean>(false);
    const [snackbarMessage, setSnackbarMessage] = useState<string>();
    const  [snackbarSeverity, setSnackbarSeverity] = useState<'success'|'error'>("success");


    const  [category,setCategory]=useState<CategoryAddRequest>({
        name:""
    });

    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setCategory({...category, [name]:value});
    }

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addCategory()
        console.log(category)
    }

    const  addCategory = async ()=>{

        try{
            const  response = await  api.post("/Categories/add",category);

            if (response.status === 200){

                setSnackbarMessage(response.data)
                setSnackbarSeverity("success")
                setOpenSnackbar(true)

                setTimeout(()=> navigate("/categories"),1500)
            }
        }catch (error : any){
            const  message = error.response.data.detail;
            setSnackbarMessage(message);
            setOpenSnackbar(true)
            setSnackbarSeverity("error");
        }



    }

    return (
        <Paper sx={{maxWidth:500, mx:"auto",mt:5, p:3}}>
            <Typography variant="h5" color="textSecondary" gutterBottom>Kategori Ekle</Typography>

            <Box component="form" onSubmit={handleSubmit}>
                <TextField
                label={"Kategori Adı"}
                type={"text"}
                variant="outlined"
                fullWidth={true}
                margin={"normal"}
                name={"name"}
                value={category.name}
                onChange={handleChange}
                />


                <Button type="submit" variant={"contained"} fullWidth sx={{mt:2}} color={"success"} >
                    Ekle
                </Button>
            </Box>

            <Snackbar
            open={openSnackbar}
            autoHideDuration={3000}
            onClose={()=>setOpenSnackbar(false)}
            anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
            >

                <Alert
                onClose={()=>setOpenSnackbar(false)}
                severity={snackbarSeverity}
                >
                    {snackbarMessage}
                </Alert>

            </Snackbar>
        </Paper>
    );
}

export default CategoryAddForm;