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
              <Typography mt={2}>hello</Typography>
              
              <Typography variant="h3" mt={2}>I'M <span className='eray'>ERAY</span> MUTABESHA </Typography>
              <Typography mt={3}>Fullstack Developer | No-code Webflow expert | Cofounder of <span className='eray'>@kVolts_lab </span>and <span className='eray'>Tony elumelu foundation</span> certified business manager.
                Experienced in building modern web applications and IoT solutions</Typography>
                <Stack direction="row" spacing={2} mt={2}>
                  <Box><Button variant="contained">resume</Button></Box>
                  <Box  sx={{
                    padding:"10px",
                    border:"0.5px solid rgba(211, 211, 211, 0.671)",
                    transition:"1s",
                    borderRadius:"7PX",
                    '&:hover': {
                      boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
                      cursor:"pointer"
                    },
                  }}><FontAwesomeIcon icon={faEnvelope} /></Box>
                   <Box  sx={{
                    padding:"10px",
                    border:"0.5px solid rgba(211, 211, 211, 0.671)",
                    transition:"1s",
                    borderRadius:"7PX",
                    '&:hover': {
                      duration:"1.5s",
                      boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
                      cursor:"pointer"
                    },
                  }}><FontAwesomeIcon icon={faEnvelope} /></Box>
                  <Box  sx={{
                    padding:"10px",
                    border:"0.5px solid rgba(211, 211, 211, 0.671)",
                    transition:"1s",
                    borderRadius:"7PX",
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
