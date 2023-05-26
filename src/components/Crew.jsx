import { useEffect, useState } from "react";
import { crewsDB } from "../utils/database";


function Crew() {
  const [selectedCrew, setSelectedCrew] = useState({
    position: '',
    crewName: '',
    details: '',
    image: ''
  })
  const [isSelected, setIsSelected] = useState(1);

  useEffect(() => {
    setSelectedCrew(crewsDB[0]);
  },[])

  function handleSelectedCrew(e) {
    const crewSelected = e.target.getAttribute('data-page-index');
    const newCrewSelected = crewsDB.find(crew => crew.id === Number(crewSelected))
    setSelectedCrew(newCrewSelected);
  }

  function isUnderlineSelected(num) {
    setIsSelected(num);
  }

  return (
    <div className="crew-bg">
      <div className="crew-container">
        <h5 className="sub-heading-5">
          <span className="section-title">02</span>
            Meet Your Crew
        </h5>

        <div className="crew-information">
          <h4 className="heading-4">{selectedCrew.position}</h4>
          <h3 className="heading-3">{selectedCrew.crewName}</h3>
          <p className="body-text">{selectedCrew.details}</p>
        </div>

        <div className="page">
            <span 
              onClick={(e) => {
                handleSelectedCrew(e);
                isUnderlineSelected(1)
              }}
              data-page-index='1' 
              className={`btn-dot${isSelected === 1 ? ' dot-active' : ''}`}>
            </span>
            <span 
              onClick={(e) => {
                handleSelectedCrew(e);
                isUnderlineSelected(2)
              }} 
              data-page-index='2'
              className={`btn-dot${isSelected === 2 ? ' dot-active' : ''}`}>
            </span>
            <span 
              onClick={(e) => {
                handleSelectedCrew(e);
                isUnderlineSelected(3)
              }} 
              data-page-index='3' 
              className={`btn-dot${isSelected === 3 ? ' dot-active' : ''}`}>
            </span>
            <span 
              onClick={(e) => {
                handleSelectedCrew(e);
                isUnderlineSelected(4)
              }} 
              data-page-index='4'
              className={`btn-dot${isSelected === 4 ? ' dot-active' : ''}`}>
            </span>
        </div>

        <div className="crew-img-container">
          <img className="crew-img" src={selectedCrew.image} alt={selectedCrew.crewName}/>
        </div>
        
      </div>
    </div>
  )
}

export default Crew;