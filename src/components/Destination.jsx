import { useEffect, useState } from "react";
import { destinationsDB } from "../utils/database";

function Destination() {
  const [selectedPlanet, setSelectedPlanet] = useState({
    name : '',
    image: '',
    details: '',
    distance: '',
    travel: ''
  });
  const [isSelected, setIsSelected] = useState(null);
  
  useEffect(() => {
    setSelectedPlanet(destinationsDB[0]);
  }, [])
  
  function handleDestination(e) {
    console.log(e.target.textContent);
    const selectedDestination = e.target.textContent.toLowerCase();
    const newDestination = destinationsDB.find((destination) => destination.name === selectedDestination);
    setSelectedPlanet(newDestination);
  }
  function isUnderlineSelected(item) {
    setIsSelected(item);
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
            <li className={isSelected === 'Moon' && 'selected'} 
              onClick={(e) => {
                isUnderlineSelected('Moon')
                handleDestination(e)
              }}>
              <a>Moon</a>
            </li>
            <li className={isSelected === 'Mars' && 'selected'} 
              onClick={(e) => {
                isUnderlineSelected('Mars')
                handleDestination(e)
              }}>
              <a>Mars</a>
            </li>
            <li className={isSelected === 'Europa' && 'selected'} 
              onClick={(e) => {
                isUnderlineSelected('Europa')
                handleDestination(e)
              }}>
              <a>Europa</a>
            </li>
            <li className={isSelected === 'Titan' && 'selected'} 
              onClick={(e) => {
                isUnderlineSelected('Titan')
                handleDestination(e)
              }}>
              <a>Titan</a>
            </li>
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