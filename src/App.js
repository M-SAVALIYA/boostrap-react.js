import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Footer from "./components/Footer";


function App() {
  return (

    <>
       <Navbar/>
       <Banner/>
    
      <div className="row col-md-12">
        <div className="col-md-3">
          <Card />
        </div>
        <div className="col-md-3">
          <Card />
        </div>
        <div className="col-md-3">
          <Card />
        </div>
        <div className="col-md-3">
          <Card />
        </div>
      </div>
      <Footer/>
      
    </>
  );
}

export default App;