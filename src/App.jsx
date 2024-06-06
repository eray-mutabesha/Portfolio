import './App.css'
import { Box, Stack,Button} from '@mui/material';


function App() {


  return (
    
    <section>
    
      <Box sx={{
        width:"100%",
        height: "100vh",
        display:"grid",
        gridTemplateColumns:"10% 90%"
       
      }}>
        <Box sx={{background:"red"}}>
          <h1>one</h1>
        </Box>
        <Box sx={{}}>
        <Stack direction="row" spacing={2}>
             <img src='public\ErayProfil.jpg'/>
             <Box>
              <p>hello</p>
              <h1>I'M ERAY MUTABESHA DIEUMERCI</h1>
              <p>Fullstack Developer | No-code Webflow expert | Cofounder of @kVolts_lab and Tony elumelu foundation certified business manager.
                Experienced in building modern web applications and IoT solutions</p>
                <Box><Button variant="contained">resume</Button></Box>
             </Box>
          
        </Stack>
        </Box>
      </Box>
     
      </section>
  )
}

export default App
