import React from 'react';
import ContentRowMovies from "./ContentRowMovies";
import GenresInDb from "./GenresInDb";
import LastMoviesInDb from "./LastMoviesInDb";
import ContentWrapper from "./ContentWrapper";
import Footer from "./Footer";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

import '../assets/css/app.css';


function App() {
  return (
    <React.Fragment>
    <div id="wrapper">
      <SideBar />
      
      <div>
        <ContentWrapper /> 
      <TopBar/>
      <ContentRowMovies></ContentRowMovies>
      
      <div>
        <LastMoviesInDb/>
      <GenresInDb/>
      </div> 
      
      <Footer></Footer>
    </div>
    
    </div>
  
</React.Fragment>




     

      
    


  );
}

export default App;
