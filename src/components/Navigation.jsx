import { useState } from "react";

function Navigation() {
  const [isSelected, setIsSelected] = useState('HOME');
  const [isOpen, setIsOpen] = useState(false);

  function isUnderlineSelected(item) {
    setIsSelected(item);
  }
  function handleMenu(e) {
    setIsOpen(!isOpen);
    if(isOpen) {
      console.dir(e.currentTarget.style.backgroundImage = `url('/src/images/shared/icon-hamburger.svg')`);
    } else {
      console.dir(e.currentTarget.style.backgroundImage = `url('/src/images/shared/icon-close.svg')`);
    }
  }

  return (
    <nav className="primary-header">
      <div className="logo">
          <img src="/src/images/shared/logo.svg" alt="logo"/>
      </div>
      
      <button 
        onClick={handleMenu} 
        data-="false"
        className="burger-menu">
      </button>

      <ul className={`primary-navigation ${isOpen ? 'menu-open': ''}`}>
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