import './App.css'
import Banner from './components/banner'
import Footer from './components/footer'
import Navbar from './components/navbar'
import PortfolioCard from './components/portfolioCard'
import CardSection from './components/subcards'

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Banner />
        <CardSection />
        <PortfolioCard />
        <Footer />
      </div>
    </>
  )
}

export default App
