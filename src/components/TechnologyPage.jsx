
function TechnologyPage () {
  return (
    <div className="technology-bg">
      <div className="technology">

        <div className="technology-info-container">
          <h5 className="sub-heading-5">
            <span className="section-title">03</span>
              Space Launch 101
          </h5>

          <div className="technology-info">
            <div className="btn-numbers">
              <span className="btn-numbered-dot">1</span>
              <span className="btn-numbered-dot">2</span>
              <span className="btn-numbered-dot">3</span>
            </div>

            <div className="technology-details">
              <p className="body-text">THE TERMINOLOGY…</p>
              <h3 className="heading-3">LAUNCH VEHICLE</h3>
              <p className="body-text">
                A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth&apos;s surface to space,
                usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall,
                it&apos;s quite an awe-inspiring sight on the launch pad!
              </p>
            </div>
            <picture>
              <source 
                srcSet="/src/images/technology/image-launch-vehicle-landscape.png"
                media="(max-width: 925px)"
              />
              <img src="/src/images/technology/image-launch-vehicle-portrait.jpg" alt="spaceship"/>
            </picture>
          </div>

        </div>

      </div>
    </div>
  )
}

export default TechnologyPage;