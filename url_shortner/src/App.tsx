import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from './components/Content.Home'
import './App.css'

function App() {
  return (
    <>
      <Header title="uShort"/>
      <div className="body">
        <HomePage />
      </div>
      <Footer />
    </>
  )
}

export default App
