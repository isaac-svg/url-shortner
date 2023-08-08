import Navbar from "./components/Navbar"
import "./App.css"
import Banner from "./components/Banner"
import Form from "./components/Form"
const App = () => {
  return (
    <div style={{width:"100vw"}}>
      <Navbar/>
      <Banner/>
      <Form/>
    </div>
  )
}

export default App