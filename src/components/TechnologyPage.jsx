import { useState, useEffect } from "react";
import { technologyDB } from "../utils/database";

function TechnologyPage () {
  const [selectedTech, setSelectedTech] = useState({
    techName: '',
    details: '',
    imgLandscape: '',
    imgPortrait: '',
  })
  const [isSelected, setIsSelected] = useState(1);

  useEffect(() => {
    setSelectedTech(technologyDB[0]);
  },[])

  function handleSelectedShip(e) {
    const techSelected = e.target.textContent.toLowerCase();
    console.log(techSelected);
    const newTechSelected = technologyDB.find(tech => tech.id === Number(techSelected));
    setSelectedTech(newTechSelected);
  }

  function activeTechSelected(num) {
    setIsSelected(num);
  }

  return (
    <div className="technology-bg">

      <div className="technology-info-container">
        <h5 className="sub-heading-5">
          <span className="section-title">03</span>
            Space Launch 101
        </h5>

        <div className="technology-info">
          <div className="btn-numbers">
            <span 
              onClick={(e) => {
                handleSelectedShip(e);
                activeTechSelected(1)
              }}
              className={`btn-numbered-dot${isSelected === 1 ? ' space-active': ''}`}>1
            </span>
            
            <span 
              onClick={(e) => {
                handleSelectedShip(e);
                activeTechSelected(2)
              }}
              className={`btn-numbered-dot${isSelected === 2 ? ' space-active': ''}`}>2
            </span>

            <span 
              onClick={(e) => {
                handleSelectedShip(e);
                activeTechSelected(3)
              }}
              className={`btn-numbered-dot${isSelected === 3 ? ' space-active': ''}`}>3
            </span>
          </div>

          <div className="technology-details">
            <p className="body-text">THE TERMINOLOGY…</p>
            <h3 className="heading-3">{selectedTech.techName}</h3>
            <p className="body-text">
              {selectedTech.details}
            </p>
          </div>
        </div>

        <picture>
          <source 
            srcSet={selectedTech.imgLandscape}
            media="(max-width: 960px)"
          />
          <img src={selectedTech.imgPortrait} alt={selectedTech.techName}/>
        </picture>

      </div>

    </div>
  )
}

export default TechnologyPage;