import { useEffect } from 'react';
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'

import 'aos/dist/aos.css';
import AOS from 'aos';

  // function MainContent (props){
  //   return (
  //     <li className='border-2 p-5 list-none rounded-lg hover:bg-amber-400 hover:shadow-2xl shadow-amber-400 ' >
  //       <img src={props.img} alt={props.title}/>
  //       <div className='text-2xl'>{props.title}</div>
  //       <div className='text-xl'>Description: {props.desc}</div>
  //     </li>
  //   )
  // }



function App() {
  useEffect(() => {
    AOS.init({
      duration: 600, // thời gian chạy animation (ms)
      offset: 100,    // khoảng cách scroll để bắt đầu
      once: true,     // chỉ chạy 1 lần, không lặp lại khi scroll lên xuống
    });
  }, []);
  return <>
    <div className="bg-gray-100 text-gray-900 font-monserrat">
      {/* <div className='grid grid-cols-2 gap-4 mx-20 my-10 mt-20'>
        <MainContent 
        img="https://via.placeholder.com/150"
        title="First Title"
        desc="This is a sample description for the MainContent component."
        />
        <MainContent 
        img="hittps://via.placeholder.com/150"
        title="Sample Title"
        desc="This is a sample description for the MainContent component."
        />
        <MainContent 
        img="https://via.placeholder.com/150"
        title="Sample Title"
        desc="This is a sample description for the MainContent component."
        />
        </div> */}
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        </div>
  </>
  
}

export default App
