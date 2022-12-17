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
    <>
  <TopBar></TopBar>
    <ContentWrapper/> 
    <ContentRowMovies/>

    <div>

      <LastMoviesInDb/>
 <GenresInDb/>
    </div>
     


     

      
    
<SideBar></SideBar>

    <Footer/>
    </>
  );
}

export default App;
