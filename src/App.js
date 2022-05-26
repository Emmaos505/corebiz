import Header from "./Components/Header";
import Banner from "./Components/Banner";
import SliderSection from "./Components/SliderSection";
import './App.css';
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";
import { DataContextProvider } from "./Context/data-context";

function App() {
  return (
    <>
      <DataContextProvider>
        <Header />
        <Banner />
        <SliderSection />
        <Newsletter />
        <Footer />
      </DataContextProvider>
    </>
  );
}

export default App;
