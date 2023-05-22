
function Crew() {
  return (
    <div className="crew-bg">
      <div className="crew-container">
        <div className="crew">
          <div className="crew-information">
            <h5 className="sub-heading-5">
              <span className="section-title">02</span>
                Meet Your Crew
            </h5>
            <h4 className="heading-4">Commander</h4>
            <h3 className="heading-3">Douglas Hurley</h3>
            <p className="body-text">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
          
            <div className="page">
              <span className="btn-dot dot-active"></span>
              <span className="btn-dot"></span>
              <span className="btn-dot"></span>
              <span className="btn-dot"></span>
            </div>
          </div>

          <div className="crew-img-container">
            <img className="crew-img" src="/src/images/crew/image-douglas-hurley.png"/>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Crew;