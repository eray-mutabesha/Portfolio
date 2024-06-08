import './App.css'
import { Box, Stack,Button,Typography} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function App() {


  return (
    
    <section>
    
      <Box sx={{
        width:"100%",
        height: "100vh",
        display:"grid",
        gridTemplateColumns:"10% 90%"
       
      }}>
        <Box sx={{background:"gray"}}>
          <h1>one</h1>
        </Box>
        <Box sx={{}}>
        <Stack direction="row" spacing={10} sx={{ 
          marginLeft:"auto",
          marginRight:"auto",
          marginTop:"100px",
          width:"80%",
          alignItems:"center"
        }}>
             <img src='public\ErayProfil.jpg' className='profil_picture'/>
             <Box sx={{
              alignItems:"center",
              height:"fit-content"
              
             }}>
              <p>hello</p>
              
              <Typography variant="h3">I'M <span className='eray'>ERAY</span> MUTABESHA </Typography>
              <p>Fullstack Developer | No-code Webflow expert | Cofounder of @kVolts_lab and Tony elumelu foundation certified business manager.
                Experienced in building modern web applications and IoT solutions</p>
                <Stack direction="row" spacing={2}>
                  <Box><Button variant="contained">resume</Button></Box>
                  <Box  sx={{
                    padding:"10px",
                    boxShadow:"0px 0px 1px 0px black",
                    '&:hover': {
                      boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
                      cursor:"pointer"
                    },
                  }}><FontAwesomeIcon icon={faEnvelope} /></Box>
                   <Box  sx={{
                    padding:"10px",
                    boxShadow:"0px 0px 1px 0px black",
                    
                    '&:hover': {
                      duration:"1.5s",
                      boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
                      cursor:"pointer"
                    },
                  }}><FontAwesomeIcon icon={faEnvelope} /></Box>
                  <Box  sx={{
                    padding:"10px",
                    boxShadow:"0px 0px 1px 0px black",
                    '&:hover': {
                      boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
                      cursor:"pointer"
                    },
                  }}><FontAwesomeIcon icon={faEnvelope} /></Box>
                  
                </Stack>
                
             </Box>
          
        </Stack>
        </Box>
      </Box>
     
      </section>
  )
}

export default App
