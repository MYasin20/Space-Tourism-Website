import { useState } from "react";

function Navigation() {
  const [isSelected, setIsSelected] = useState('HOME');
  function isUnderlineSelected(item) {
    setIsSelected(item);
  }
  return (
    <nav className="nav">
      <div className="logo">
        <a href="/" alt="home">
          <img src="/src/images/shared/logo.svg" alt="logo"/>
        </a>
      </div>
      <div className="line"></div>
      <button className="burger-menu"></button>
      <ul className="nav-lists">
        <li 
          className={`list-item ${isSelected === 'HOME' && 'selected'}`}
          onClick={() => isUnderlineSelected('HOME')}>
          <a href="/#">
            <span className="list-item-number">00</span>
            HOME
          </a>
        </li>
        <li 
          className={`list-item ${isSelected === 'DESTINATION' && 'selected'}`}
          onClick={() => isUnderlineSelected('DESTINATION')}>
          <a href="/#">
            <span className="list-item-number">01</span>
            DESTINATION
          </a>
        </li>
        <li 
          className={`list-item ${isSelected === 'CREW' && 'selected'}`}
          onClick={() => isUnderlineSelected('CREW')}>
          <a href="/#">
            <span className="list-item-number">02</span>
            CREW
          </a>
        </li>
        <li 
          className={`list-item ${isSelected === 'TECHNOLOGY' && 'selected'}`}
          onClick={() => isUnderlineSelected('TECHNOLOGY')}>
          <a href="/#">
            <span className="list-item-number">03</span>
            TECHNOLOGY
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation