import './App.css'
import Card from './components/Card'
import fate from './assets/netflixFate.png'
import gambit from './assets/netflixGambit.png'
import outside from './assets/netflixOutside.png'
import startrek from './assets/netflixStarTrek.png'
import witcher from './assets/netflixWitcher.png'

function App() {

  return (
    <div className='wrapper'>
      <h1>Netflix Clone</h1>
      <div className="gallery">
        <Card posterImg={fate} altText="Fate" />
        <Card posterImg={gambit} altText="Gambit" />
        <Card posterImg={outside} altText="Outside" />
        <Card posterImg={startrek} altText="StarTrek" />
        <Card posterImg={witcher} altText="Witcher" />
      </div>
    </div>
  )
}

export default App
