import React from 'react'
import NavBar from '../components/NavBar/NavBar'



const Layout = ({children}) => {
  
  return (
   
    <div>
      {/* Navbar */}
      <NavBar/>
      <main>
        {children} 
      </main>




      
      {/* <footer>
        footer
      </footer> */}
    </div>
  );
};




export default Layout
