import { useEffect, useState } from "react"

function Destination() {
  const [selectedPlanet, setSelectedPlanet] = useState({
    name : '',
    image: '',
    details: '',
    distance: '',
    travel: ''
  });
  const destinationsDB = [
    { name : 'moon',
      image: '/src/images/destination/image-moon.png',
      details: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
      distance: '384,400 Km',
      travel: '3 Days' 
    },
    { name : 'mars',
      image: '/src/images/destination/image-mars.png',
      details: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
      distance: '225 MIL. km',
      travel: '9 months' 
    },
    { name : 'europa',
      image: '/src/images/destination/image-europa.png',
      details: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
      distance: '628 MIL. km',
      travel: '3 years' 
    },
    { name : 'titan',
      image: '/src/images/destination/image-titan.png',
      details: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
      distance: '1.6 BIL. km',
      travel: '7 years' 
    },
  ];
  useEffect(() => {
    setSelectedPlanet(destinationsDB[0]);
  }, [])
  
  function handleDestination(e) {
    const selectedDestination = e.target.textContent.toLowerCase();
    const newDestination = destinationsDB.find((destination) => destination.name === selectedDestination);
    setSelectedPlanet(newDestination);
  }
  return (
    <div className="destination-bg">

      <div className="destination">

        <div className="destination-display">
          <h5 className="sub-heading-5">
            <span className="section-title">01</span>
            Pick Your Destination
          </h5>
          <img src={selectedPlanet.image} alt={selectedPlanet.name} />
        </div>

        <div className="current-destination">
          <ul className="destinations-selection">
            <li onClick={handleDestination}><a>Moon</a></li>
            <li onClick={handleDestination}><a>Mars</a></li>
            <li onClick={handleDestination}><a>Europa</a></li>
            <li onClick={handleDestination}><a>Titan</a></li>
          </ul>
          
          <div className="destination-information">
            <h2 className="heading-2">{selectedPlanet.name}</h2>
            <p className="body-text">{selectedPlanet.details}</p>
            
            <div className="avg-travel">

              <div className="avg-distance">
                <div className="sub-head-2">Avg. Distance</div>
                <div className="des-head-2">{selectedPlanet.distance}</div> 
              </div>
              <div className="est-travel">
                <div className="sub-head-2">Est. Travel Time</div>
                <div className="des-head-2">{selectedPlanet.travel}</div> 
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Destination