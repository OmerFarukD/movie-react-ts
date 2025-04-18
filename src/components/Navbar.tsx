import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
function Navbar() {

  /*  const [isAuthenticated, setIsAuthenticated] = useState(false);

    const token = getToken()

    if (token) {
        setIsAuthenticated(true);
    }else {
        setIsAuthenticated(false);
    }*/
    return (
        <Box sx={{ flexGrow: 1 , marginBottom:3}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

                    </Typography>


                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link style={{textDecoration:"none", color:"white"}} to={"/"}> Filmler</Link>
                        </Typography>



                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link style={{textDecoration:"none", color:"white"}} to={"/categories"}>
                            Kategoriler
                            </Link>

                        </Typography>


                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link style={{textDecoration:"none", color:"white"}} to={"/directors"}>
                            Yönetmenler
                        </Link>

                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link style={{textDecoration:"none", color:"white"}} to={"/artists"}>
                            Oyuncular
                        </Link>

                    </Typography>

                 {/*   {
                        isAuthenticated ? (<Button color="inherit" size="small" endIcon={<LogoutOutlinedIcon/>}> Çıkış Yap</Button> ): <Button endIcon={<LoginOutlinedIcon/>} color="inherit"> <Link style={{textDecoration:"none", color:"white"}} to="/login">Giriş Yap</Link></Button>

                    }*/}

                    <Button endIcon={<LoginOutlinedIcon/>} color="inherit"> <Link style={{textDecoration:"none", color:"white"}} to="/login">Giriş Yap</Link></Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;