import Navbar from "./components/Navbar"
import "./App.css"
import Banner from "./components/Banner"
import Form from "./components/Form"
import Stat from "./components/Stat"
import FooterBanner from "./components/FooterBanner"
import Footer from "./components/Footer"
const App = () => {
  return (
    <div style={{width:"100vw", overflowX:"hidden", maxWidth:"1500px", marginInline:"auto"}}>
      <Navbar/>
      <Banner/>
      <Form/>
      <Stat/>
      <FooterBanner/>
      <Footer/>
    </div>
  )
}

export default App