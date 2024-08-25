import logo from './logo.svg';
import './App.css';
import { Navbar } from './Component/Navbar';
import Banner from './Component/Banner';
import Services from './Component/Services';
import Footer from './Component/Footer';
import { Products } from './Component/Products';
import DealsIn from './Component/DealsIn';
import PaymentAndQuestionSection from './Component/Payment&Question';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Services />
      <Products />
      <DealsIn />
      <PaymentAndQuestionSection />
      <Footer />
    </div>
  );
}

export default App;
