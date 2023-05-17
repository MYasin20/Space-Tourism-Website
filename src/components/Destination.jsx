
function Destination() {
  return (
    <div className="destination-bg">

      <div className="destination">

        <div className="destination-display">
          <h5 className="sub-heading-5">
            <span className="destination-number">01</span>
            Pick Your Destination
          </h5>
          <img src="/src/images/destination/image-moon.png" alt="moon" />
        </div>

        <div className="current-destination">
          <ul className="destinations-selection">
            <li><a>Moon</a></li>
            <li><a>Mars</a></li>
            <li><a>Europa</a></li>
            <li><a>Titan</a></li>
          </ul>

          <div className="destination-information">
            <h2 className="heading-2">Moon</h2>
            <p className="body-text">See our planet as you&apos;ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
            
            <div className="avg-travel">
              <div className="avg-distance">
                <div className="sub-head-2">Avg.  Distance</div>
                <div className="des-head-2">384,400 km</div> {/* no css style yet */}
              </div>
              <div className="est-travel">
                <div className="sub-head-2">Est. Travel Time</div>
                <div className="des-head-2">3 Days</div> {/* no css style yet */}
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Destination