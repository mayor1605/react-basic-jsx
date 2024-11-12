import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg'>
    <div className="app-container">
      <h1 className="header">My Favorite Movies:</h1>
       <h1 className="secondHeader">"Dunc, Deadpool and Antman" </h1>
      <div className="movie-info">
        <p className="description">
          Movies have always been more than just entertainment for me—they're an escape, a source of inspiration, and a window into different worlds. Whether it's a gripping thriller, a heartwarming drama, or a visually stunning sci-fi adventure, I’m always excited to dive into a good story.
            Movies have a unique way of making me feel connected to others, no matter how different our experiences are.
        </p>
        
        <div className="images">
          <div>
          <img
            src="https://dunenewsnet.com/wp-content/uploads/2021/08/Dune-Movie-Official-Poster-banner-feature-770x364.jpg"
            alt="Inception Movie Poster"
            className="movie-poster"
          />
          <p>Dune  is a visually stunning sci-fi film about Paul Atreides' struggle for control over the desert planet Arrakis. It’s a breathtaking adaptation of Frank Herbert’s novel.</p>
          </div>
          <div>
          <img
            src="https://musicart.xboxlive.com/7/7e206d00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"
            alt="Inception Scene"
            className="movie-scene"
          />
          <p>Deadpool  is a bold, irreverent superhero film starring Ryan Reynolds as a wisecracking, action-packed anti-hero. With its humor, violence, and fourth-wall breaks, it redefined the genre and became an instant hit.</p>
          </div>
          <div>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3EFFB27899BB98E35192120407F8C2C14FFDE4756F2D8E667F706DCD23F57F6B/scale?width=506&aspectRatio=2.00&format=webp"
            alt="Inception Scene"
            className="movie-scene"
          />
          <p>Ant-Man  is a fun, action-packed Marvel film about Scott Lang, a thief who becomes the size-shifting hero, Ant-Man, to stop a villain from using a dangerous technology.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default App
