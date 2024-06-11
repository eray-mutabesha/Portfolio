import './App.css'
import { Box, Stack,Button,Typography, duration} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn,faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init({duration:2000}); // Initialisation de AOS
  }, []);
  return (
    
    <section>
    
      <Box sx={{
        width:"100%",
        display:"grid",
        gridTemplateColumns:"10% 90%"
       
      }}>
        <Box sx={{background:"gray"}}>
          <h1>one</h1>
        </Box>
        <Box>
        <Stack direction="row" spacing={10} sx={{ 
          marginLeft:"auto",
          marginRight:"auto",
          marginTop:"150px",
          width:"80%",
          alignItems:"center"
        }}>
             <img src='public\ErayProfil.jpg' className='profil_picture'/>
             <Box  data-aos="zoom-in" sx={{
              alignItems:"center",
              height:"fit-content"
              
             }}>
              <Typography mt={2}>hello</Typography>
              
              <Typography variant="h3" mt={2}>I'M <span className='eray'>ERAY</span> MUTABESHA </Typography>
              <Typography mt={3} sx={{
                color:"rgba(58, 58, 58, 0.904)"
              }}>Fullstack Developer | No-code Webflow expert | Cofounder of <span className='eray'>@kVolts_lab </span>and <span className='eray'>Tony elumelu foundation</span> certified business manager.
                Experienced in building modern web applications and IoT solutions</Typography>
                <Stack direction="row" spacing={2} mt={2}>
                  <Box><Button variant="contained">resume</Button></Box>
                  <a href="https://www.linkedin.com/in/eray-mutabesha-186240256/">
                  <Box  sx={{
                    padding:"10px",
                    border:"0.5px solid rgba(211, 211, 211, 0.671)",
                    transition:"1s",
                    borderRadius:"7PX",
                    '&:hover': {
                      boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
                      cursor:"pointer"
                    },
                  }}><FontAwesomeIcon icon={faLinkedinIn } /></Box></a>
                  <a href='https://x.com/ErayMutabesha'>
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
                  }}><FontAwesomeIcon icon={faXTwitter} /></Box></a>
                  <a href='https://github.com/eray-mutabesha'>
                  <Box  sx={{
                    padding:"10px",
                    border:"0.5px solid rgba(211, 211, 211, 0.671)",
                    transition:"1s",
                    borderRadius:"7PX",
                    '&:hover': {
                      boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
                      cursor:"pointer"
                    },
                  }}><FontAwesomeIcon icon={faGithub} /></Box></a>
                  
                </Stack>
                
             </Box>
          
        </Stack>
        <Box data-aos="fade-up" sx={{
          marginLeft:"auto",
          marginRight:"auto",
          marginTop:"150px",
          width:"90%",
        }}>
        <Typography variant="h4" mt={25} >About me</Typography>
        <Typography mt={5} sx={{
          color:"rgba(58, 58, 58, 0.904)"
        }}>I am an enthusiastic web developer and entrepreneur who is passionate about innovation. I have extensive experience in full-stack development and possess skills in various frameworks/libraries such as jQuery, Laravel/InertiaJs, Codeigniter, VueJS/Nuxt, React, Bootstrap/TailwindCSS... My expertise lies in creating user-friendly interfaces and robust web applications/websites, and I have a proven track record in dynamic sectors like Fintech, IoT, and ERP. Whether I'm working independently or as part of a team, I always strive to deliver exceptional results that I can take pride in.</Typography>
        </Box>

        <Box  sx={{
          marginLeft:"auto",
          marginRight:"auto",
          marginTop:"150px",
          width:"90%",
        }}>
        <Typography variant="h4" mt={25} >STACK & DAILY USED TOOLS</Typography>

        {/* skills logs */}
        <Box mt={5} sx={{
          
          display:"grid",
          gridTemplateColumns:"auto auto auto auto auto auto auto auto "
        }} >
          <Box sx={{
            
             border:"0.5px solid rgba(211, 211, 211, 0.671)",
             transition:"1s",
             borderRadius:"15PX",
             height:"90px",
             width:"80px",
             textAlign:"center",
             '&:hover': {
               boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
              
             },
           
          }}>
            <img src='public\javascriptImage.png' alt='logo' className='image_skill'/>
            <Typography >javascript</Typography>
          </Box>
          <Box sx={{
            
            border:"0.5px solid rgba(211, 211, 211, 0.671)",
            transition:"1s",
            borderRadius:"15PX",
            height:"90px",
            width:"80px",
            textAlign:"center",
            '&:hover': {
              boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
             
            },
          
         }}>
           <img src='public\reactimage.png' alt='logo' className='image_skill'/>
           <Typography >React js</Typography>
         </Box>
         <Box sx={{
            
            border:"0.5px solid rgba(211, 211, 211, 0.671)",
            transition:"1s",
            borderRadius:"15PX",
            height:"90px",
            width:"80px",
            textAlign:"center",
            '&:hover': {
              boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
             
            },
          
         }}>
           <img src='public\nodejsimage.png' alt='logo' className='image_skill'/>
           <Typography >Node js</Typography>
         </Box>
         <Box sx={{
            
            border:"0.5px solid rgba(211, 211, 211, 0.671)",
            transition:"1s",
            borderRadius:"15PX",
            height:"90px",
            width:"80px",
            textAlign:"center",
            '&:hover': {
              boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
             
            },
          
         }}>
           <img src='public\materialui.png' alt='logo' className='image_skill'/>
           <Typography >MaterialUI</Typography>
         </Box>
         <Box sx={{
            
            border:"0.5px solid rgba(211, 211, 211, 0.671)",
            transition:"1s",
            borderRadius:"15PX",
            height:"90px",
            width:"80px",
            textAlign:"center",
            '&:hover': {
              boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
             
            },
          
         }}>
           <img src='public\SQLiteimage.png' alt='logo' className='image_skill'/>
           <Typography >Sqlite</Typography>
         </Box>
         <Box sx={{
            
            border:"0.5px solid rgba(211, 211, 211, 0.671)",
            transition:"1s",
            borderRadius:"15PX",
            height:"90px",
            width:"80px",
            textAlign:"center",
            '&:hover': {
              boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
             
            },
          
         }}>
           <img src='public\htmlimage.png' alt='logo' className='image_skill'/>
           <Typography >HTML</Typography>
         </Box>
         <Box sx={{
            
            border:"0.5px solid rgba(211, 211, 211, 0.671)",
            transition:"1s",
            borderRadius:"15PX",
            height:"90px",
            width:"80px",
            textAlign:"center",
            '&:hover': {
              boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
             
            },
          
         }}>
           <img src='public\sassimage.png' alt='logo' className='image_skill'/>
           <Typography >Sass</Typography>
         </Box>
         <Box sx={{
            
            border:"0.5px solid rgba(211, 211, 211, 0.671)",
            transition:"1s",
            borderRadius:"15PX",
            height:"90px",
            width:"80px",
            textAlign:"center",
            '&:hover': {
              boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
             
            },
          
         }}>
           <img src='public\git.png' alt='logo' className='image_skill'/>
           <Typography >Git</Typography>
         </Box>
         <Box mt={2} sx={{
            
            border:"0.5px solid rgba(211, 211, 211, 0.671)",
            transition:"1s",
            borderRadius:"15PX",
            height:"90px",
            width:"80px",
            textAlign:"center",
            '&:hover': {
              boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
             
            },
          
         }}>
           <img src='public\css3image.png' alt='logo' className='image_skill'/>
           <Typography >Css</Typography>
         </Box>
         <Box mt={2} sx={{
            
            border:"0.5px solid rgba(211, 211, 211, 0.671)",
            transition:"1s",
            borderRadius:"15PX",
            height:"90px",
            width:"80px",
            textAlign:"center",
            '&:hover': {
              boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
             
            },
          
         }}>
           <img src='public\figma.jpg' alt='logo' className='image_skill'/>
           <Typography >Figma</Typography>
         </Box>
          
    
         
        </Box>
        <Typography variant="h4" mt={25} >FEATURED PROJECTS</Typography>
        </Box>
        </Box>
        
      </Box>
      
     
      </section>
  )
}

export default App
