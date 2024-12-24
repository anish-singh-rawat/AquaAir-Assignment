import React,{useState, useEffect} from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import HeroSection from '../Components/HeroSection';

const Home = () => {
    const [open, setOpen] = useState(true);
    useEffect(()=>{
        setInterval(() => {
            if (document.readyState === 'complete') {
                setOpen(false);
            }
            }, 100);
    },[]);

  return (
    <>
     {
     open===true ? 
     <CircularProgress color="inherit" />
     :
     <HeroSection/>
     }
    </>
  )
}

export default Home