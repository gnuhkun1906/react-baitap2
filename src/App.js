import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Slider from './component/Slider';
import Detail from './component/Detail';
import Product from './component/Product';
import Find from './component/Find';
import Client from './component/Client';
import Sign from './component/Sign';
import Info from './component/Info';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <>
  <div className="hero_area">
    {/* header section strats */}
     <Header></Header>
    {/* end header section */}
    {/* slider section */}
     <Slider></Slider>
    {/* end slider section */}
  </div>
  {/* detail section */}
    <Detail> </Detail>
  {/* end detail section */}
  {/* products section */}
    <Product></Product>
  {/* end products section */}
  {/* find section */}
    <Find></Find>
  {/* end find section */}
  {/* client section */}
    <Client></Client>
  {/* end client section */}
  {/* sign section */}
    <Sign></Sign>
  {/* end sign section */}
  {/* info section */}
   <Info></Info>
  {/* end info section */}
  {/* footer section */}
   <Footer></Footer>
  {/* footer section */}
</>

    </div>
  );
}

export default App;
