import './App.css'
import { Box, Stack,Button,Typography, duration} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn,faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHouse ,faUser,faLaptopCode,faAward,faPhone,faSuitcase} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import ImageDemo from './components/ImageDemo';
import { useRef } from 'react';








function App() {

  useEffect(() => {
    AOS.init({duration:1000}); // Initialisation de AOS
  }, []);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const workRef = useRef(null);
  const awardRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToSection = (homeRef,aboutRef,skillsRef,workRef) => {
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    skillsRef.current.scrollIntoView({ behavior: 'smooth' });
    workRef.current.scrollIntoView({ behavior: 'smooth' });
    awardRef.current.scrollIntoView({ behavior: 'smooth' });
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  const emailAddress = 'eraymutabesha4@gmail.com'; 

  return (
    
    <section>
      
      <Box sx={{ display:"flex",border:"1px solid red"}}>
{/* ............................one one one one................................. */}
        <Box sx={{
          background:"rgba(85, 85, 252)",
          height:"100vh",
          position:"fixed",
          width:"130px",
          color:"white",
          zIndex:"10",
          
        }}>

          <Box sx={{ 
          display:"grid",
          gap:"20px",
          margin:"5px auto",
          width:"fit-content",
          marginTop:"100px"
          
          }}>
          
             <Stack onClick={() => scrollToSection(homeRef)} direction="row" spacing={1} sx={{
               padding:"10px",
              
               transition:"1s",
               borderRadius:"7PX",
               color:"white",
               '&:hover': {
                border:"0.5px solid rgba(211, 211, 211, 0.671)",
                 boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
                 cursor:"pointer"
               },
             }}>
             <FontAwesomeIcon icon={faHouse} /> 
             <Typography >Home</Typography>
             </Stack>
            
        
             <Stack onClick={() => scrollToSection(aboutRef)}  direction="row" spacing={1}  sx={{
               padding:"10px",
               
               transition:"1s",
               borderRadius:"7PX",
               color:"white",
               '&:hover': {
                border:"0.5px solid rgba(211, 211, 211, 0.671)",
                 boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
                 cursor:"pointer"
               },
             }}><FontAwesomeIcon icon={faUser }/>
             <Typography>About</Typography>
             </Stack>
         
          
             <Stack onClick={() => scrollToSection(skillsRef)}  direction="row" spacing={1}  sx={{
               padding:"10px",
               
               transition:"1s",
               borderRadius:"7PX",
               '&:hover': {
                border:"0.5px solid rgba(211, 211, 211, 0.671)",
                 boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
                 cursor:"pointer"
               },
             }}><FontAwesomeIcon icon={faLaptopCode }/>
             <Typography>Skills</Typography>
             </Stack>

             <Stack onClick={() => scrollToSection(workRef)} direction="row" spacing={1}  sx={{
               padding:"10px",
               
               transition:"1s",
               borderRadius:"7PX",
               '&:hover': {
                border:"0.5px solid rgba(211, 211, 211, 0.671)",
                 boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
                 cursor:"pointer"
               },
             }}><FontAwesomeIcon icon={faSuitcase }/>
             <Typography>Work</Typography>
             </Stack>
         
             <Stack onClick={() => scrollToSection(awardRef)}   direction="row" spacing={1}  sx={{
               padding:"10px",
              
               transition:"1s",
               borderRadius:"7PX",
               '&:hover': {
                border:"0.5px solid rgba(211, 211, 211, 0.671)",
                 boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
                 cursor:"pointer"
               },
             }}><FontAwesomeIcon icon={faAward }/>
             <Typography>Award</Typography>
             </Stack>
         
             <Stack onClick={() => scrollToSection(contactRef)}  direction="row"  spacing={1}  sx={{
               padding:"10px",
               
               transition:"1s",
               borderRadius:"7PX",
               '&:hover': {
                border:"0.5px solid rgba(211, 211, 211, 0.671)",
                 boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
                 cursor:"pointer"
               },
             }}><FontAwesomeIcon icon={faPhone }/>
             <Typography>Contact</Typography>
             </Stack>
          
          
            
          
          </Box>
        </Box>

        <Box sx={{
        
          width:"90%",
          marginLeft:"10%",
          zIndex:"10"
        }}>


          
          {/* ....................................eray home....................................................... */}
          <Box  sx={{
          marginLeft:"auto",
          marginRight:"auto",
          
          width:"90%",
         
        }}>
     
     
     
     <Box ref={homeRef} sx={{border:"1px solid white"}}>
        
        <Stack  id="home"   
        direction="row" spacing={10} sx={{ 
          marginLeft:"auto",
          marginRight:"auto",
          marginTop:"150px",
          width:"80%",
          alignItems:"center",
          
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
                  }}>
                    
                    <FontAwesomeIcon icon={faLinkedinIn } />
                    
                    </Box></a>

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
                  }}>
                    
                    <FontAwesomeIcon icon={faXTwitter} />
                    
                    </Box></a>

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
                  }}>
                    
                    <FontAwesomeIcon icon={faGithub} /></Box></a>
                  
                </Stack>
                
             </Box>
          
        </Stack>
        </Box>
{/* ......................................eray home end.................................... */}

        {/* .........................ABOUT ................................................................. */}
        <Box ref={aboutRef} sx={{border:"1px solid red"}}>
        <Box   data-aos="fade-up" sx={{
          marginLeft:"auto",
          marginRight:"auto",
          marginTop:"300px",
        
          background:"white",
          zIndex:"15"
        }}>

        <Typography mt={-20} variant="h4" >About me</Typography>
        <Typography  mt={5} sx={{
          color:"rgba(92, 91, 91, 0.904)"
        }}>I am an enthusiastic web developer and entrepreneur who is passionate about innovation. I have extensive experience in full-stack development and possess skills in various frameworks/libraries such as jQuery, Laravel/InertiaJs, Codeigniter, VueJS/Nuxt, React, Bootstrap/TailwindCSS... My expertise lies in creating user-friendly interfaces and robust web applications/websites, and I have a proven track record in dynamic sectors like Fintech, IoT, and ERP. Whether I'm working independently or as part of a team, I always strive to deliver exceptional results that I can take pride in
          I am an enthusiastic web developer and entrepreneur who is passionate about innovation. I have extensive experience in full-stack development and possess skills in various frameworks/libraries such as jQuery, Laravel/InertiaJs, Codeigniter, VueJS/Nuxt, React, Bootstrap/TailwindCSS... My expertise lies in creating user-friendly interfaces and robust web applications/websites, and I have a proven track record in dynamic sectors like Fintech, IoT, and ERP. Whether I'm working independently or as part of a team, I always strive to deliver exceptional results that I can take pride in
          I am an enthusiastic web developer and entrepreneur who is passionate about innovation. I have extensive experience in full-stack development and possess skills in various frameworks/libraries such as jQuery, Laravel/InertiaJs, Codeigniter, VueJS/Nuxt, React, Bootstrap/TailwindCSS... My expertise lies in creating user-friendly interfaces and robust web applications/websites, and I have a proven track record in dynamic sectors like Fintech, IoT, and ERP. Whether I'm working independently or as part of a team, I always strive to deliver exceptional results that I can take pride in.</Typography>
        
        </Box>
        </Box>
        {/* .........................END OF ABOUT ................................................................. */}
        
        
        {/* ..............................SKILLS........................................................................ */}
       


  <Box sx={ {border:"1px solid white"}} ref={skillsRef}>
        <Typography variant="h4" mt={20} >STACK & DAILY USED TOOLS</Typography>

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
           <Typography>React js</Typography>

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
        </Box>
      
{/* ...............................END OF SKILLS............................................................... */}


{/* ........................................PROJECTS......................................................... */}
        
<Box mt={25} ref={workRef}>
        <Typography variant="h4"  >FEATURED PROJECTS</Typography>

        <Stack direction="row" spacing={10} mt={5} sx={{
            border:"0.5px solid rgba(211, 211, 211, 0.671)",
            transition:"1s",
            borderRadius:"15PX",
            padding:"10px",
            background:"white",
            '&:hover': {
              boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
            },
         }}>

        <Box>
        <ImageDemo />
        </Box>

        <Box>
         <Typography  variant="h4" className='eray'>SMS</Typography>
         <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas necessitatibus vitae aliquid ullam sint quae ut repellat facilis, repudiandae provident sequi quia nisi quis laborum soluta quam placeat consequuntur iusto.</Typography>
         <Button>Check it ou here </Button>
        </Box>

        </Stack>
        
        <Stack direction="row" spacing={10} mt={5} sx={{
            
            border:"0.5px solid rgba(211, 211, 211, 0.671)",
            transition:"1s",
            borderRadius:"15PX",
            padding:"10px",
            background:"white",
            '&:hover': {
              boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
            },
         }}>

        <Box>
        <ImageDemo />
        </Box>

        <Box>
         <Typography  variant="h4" className='eray'>SMS</Typography>
         <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas necessitatibus vitae aliquid ullam sint quae ut repellat facilis, repudiandae provident sequi quia nisi quis laborum soluta quam placeat consequuntur iusto.</Typography>
         <Button>Check it ou here </Button>
        </Box>

        </Stack>
   
        <Stack direction="row" spacing={10} mt={5} sx={{
            border:"0.5px solid rgba(211, 211, 211, 0.671)",
            transition:"1s",
            borderRadius:"15PX",
            background:"white",
            padding:"10px",
            '&:hover': {
              boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
            },
         }}>

        <Box>
        <ImageDemo />
        </Box>

        <Box>
         <Typography  variant="h4" className='eray'>SMS</Typography>
         <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas necessitatibus vitae aliquid ullam sint quae ut repellat facilis, repudiandae provident sequi quia nisi quis laborum soluta quam placeat consequuntur iusto.</Typography>
         <Button>Check it ou here </Button>
        </Box>

        </Stack>
        </Box>

        
       
      {/* ...........................................END OF PROJECTS................................................... */}

        {/* .............................................AWARDS............................................ */}
        <Box ref={awardRef} className='award'     sx={{ 
          marginLeft:"auto",
          marginRight:"auto",
          marginTop:"150px",
          width:"100%",
          alignItems:"center",
          textAlign:"center",
          
        }}>
      <Typography variant="h4" mt={20} className='eray' >
        Certificates & awards</Typography>

        <Stack direction="row" spacing={10} sx={{
          width:"fit-content",
          margin:"50px auto"
        }}>

        <Box sx={{
            border:"0.5px solid rgba(211, 211, 211, 0.671)",
            borderRadius:"5PX",
            width:"150px",
            textAlign:"center",
            display:"grid",
            gap:"30px",
            background:"white"
            }}>
              
              <Box>
              <img src='public\images.png' alt='image' className='freecodecamp_image'/>
              <Typography>Web developement</Typography>
              </Box>
              <Box sx={{
                background:"rgb(182, 182, 182)",
                width:"100%",
                
              }}>
              <Typography sx={{
                borderTop:"0.5px solid rgba(211, 211, 211, 0.671)",
                color:"rgba(92, 91, 91, 0.678)"}}>provide by freecodecamp</Typography>
              </Box>
              
            </Box>

            <Box sx={{
            border:"0.5px solid rgba(211, 211, 211, 0.671)",
            borderRadius:"5PX",
            width:"150px",
            textAlign:"center",
            display:"grid",
            gap:"30px",
            background:"white"
            }}>
              
              <Box>
              <img src='public\images.png' alt='image' className='freecodecamp_image'/>
              <Typography>JS algorithms and...</Typography>
              </Box>
              <Box sx={{
                background:"rgb(182, 182, 182)",
                width:"100%",
                
              }}>
              <Typography sx={{
                borderTop:"0.5px solid rgba(211, 211, 211, 0.671)",
                color:"rgba(92, 91, 91, 0.678)"}}>provide by freecodecamp</Typography>
              </Box>
              
            </Box>

            <Box sx={{
            border:"0.5px solid rgba(211, 211, 211, 0.671)",
            borderRadius:"5PX",
            width:"150px",
            textAlign:"center",
            display:"grid",
            gap:"30px",
            background:"white"
            }}>
              
              <Box>
              <img src='public\images.png' alt='image' className='freecodecamp_image'/>
              <Typography>JS algorithms and...</Typography>
              </Box>
              <Box sx={{
                background:"rgb(182, 182, 182)",
                width:"100%",
                
              }}>
              <Typography sx={{
                borderTop:"0.5px solid rgba(211, 211, 211, 0.671)",
                color:"rgba(92, 91, 91, 0.678)"}}>provide by freecodecamp</Typography>
              </Box>
              
            </Box>

            <Box sx={{
            border:"0.5px solid rgba(211, 211, 211, 0.671)",
            borderRadius:"5PX",
            width:"150px",
            textAlign:"center",
            display:"grid",
            gap:"30px",
            background:"white"
            }}>
              
              <Box>
              <img src='public\images.png' alt='image' className='freecodecamp_image'/>
              <Typography>JS algorithms and...</Typography>
              </Box>
              <Box sx={{
                background:"rgb(182, 182, 182)",
                width:"100%",
                
              }}>
              <Typography sx={{
                borderTop:"0.5px solid rgba(211, 211, 211, 0.671)",
                color:"rgba(92, 91, 91, 0.678)"}}>provide by freecodecamp</Typography>
              </Box>
              
            </Box>
        </Stack>
      </Box>
      
   

    {/* .........................................END OF AWARDS................................................... */}
      
      
      {/* contact................................................................. */}
      <Box ref={contactRef}  sx={{
    
    margin:"auto"
   }}>
      <Typography variant="h4"  >CONTACT</Typography>
        <Typography variant="h5" mt={5} sx={{color:"rgba(92, 91, 91, 0.678)"}}>Get in Touch</Typography>

        <Box mt={2} data-aos="zoom-in-down"  sx={{width:"100%",
          display:"flex",
          justifyContent:"space-between"
        }}>

          <Box sx={{border:"0.5px solid rgba(211, 211, 211, 0.671)",
            borderRadius:"5PX",
            width:"45%",
            height:"150px",
            textAlign:"center",
            padding:"10px",
            background:"white",
            transition:"1s",
            '&:hover': {
              boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
            },
           }}>

         <img src='public\whatshapp-removebg-preview.png' alt='email' className='image_wtp_contact'/>
         <a href='https://wa.me/+250791434737?text=Hello%2C%20I%20am%20interested%20in%20your%20services'><Typography>+250 791434737</Typography></a>
         <Typography sx={{ color:"rgba(92, 91, 91, 0.678)"}}>Let's chat on whatsApp</Typography>
          
          </Box>

          <Box sx={{
            border:"0.5px solid rgba(211, 211, 211, 0.671)",
            borderRadius:"5PX",
            width:"45%",
            height:"150px",
            textAlign:"center",
            padding:"10px",
            background:"white",
            transition:"1s",
            '&:hover': {
              boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
            },
            }}>

               <img src='public\eemm.png' alt='email' className='image_email_contact'/>
               <a  href={`mailto:${emailAddress}`}><Typography>eraymutabesha4@gmail.com</Typography></a>
               <Typography sx={{color:"rgba(92, 91, 91, 0.678)"}}>Email me</Typography>
          
          </Box>

        </Box>
        </Box>
          {/* END OF contact................................................................. */}  

          
          

          {/* footer...................................................................... */}
          <Box sx={{
            width:"100%",
            background:"rgba(3, 3, 3, 0.767)",
            
            }}>


          <Box mt={10} spacing={10}  sx={{
            display:"grid",
            gridTemplateColumns:"30% 30% 30%",
            justifyContent:"space-around",
            color:"white",
            padding:"25px"
            
          }}>
            <Box>
              <Typography variant='h5'>useful links</Typography>
              <Typography>Home</Typography>
              <Typography>About</Typography>
              <Typography>Projects</Typography>
              <Typography>Awards</Typography>
              <Typography>Contact</Typography>
            </Box>
            <Box>
              <Typography variant='h5'>Contact me</Typography>
              <Typography>Rwanda :</Typography>
              <Typography>+250 791434737</Typography>
              <Typography>Email :</Typography>
              <Typography>eraymutabesha4@gmail.com</Typography>
            </Box>
            <Box>
              <Typography variant='h5'>About Eray</Typography>
              <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet repellat libero quisquam qui voluptas, nostrum eum itaque, incidunt nisi, minima sapiente perspiciatis delectus doloremque. Libero eaque laborum quas dicta beatae.</Typography>
            </Box>
          </Box>


          </Box>
        </Box>
        
      </Box>
      </Box>
      {/*........................................END OF FOOTER.............................. */}
      
     
      </section>
  )
}

export default App
