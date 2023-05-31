import { useState } from "react";
import { NavLink } from "react-router-dom";

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
        <img src="../src/images/shared/logo.svg" alt="logo"/>
      </div>
      
      <button 
        onClick={handleMenu}
        className="burger-menu">
      </button>

      <ul className={`primary-navigation ${isOpen ? 'menu-open': ''}`}>
        <li 
          className={`list-item ${isSelected === 'HOME' && 'selected'}`}
          onClick={() => isUnderlineSelected('HOME')}>
          <NavLink to="/">
            <span className="list-item-number">00</span>
            HOME
          </NavLink>
        </li>
        <li 
          className={`list-item ${isSelected === 'DESTINATION' && 'selected'}`}
          onClick={() => isUnderlineSelected('DESTINATION')}>
          <NavLink to="/destination">
            <span className="list-item-number">01</span>
            DESTINATION
          </NavLink>
        </li>
        <li 
          className={`list-item ${isSelected === 'CREW' && 'selected'}`}
          onClick={() => isUnderlineSelected('CREW')}>
          <NavLink to="/crew">
            <span className="list-item-number">02</span>
            CREW
          </NavLink>
        </li>
        <li 
          className={`list-item ${isSelected === 'TECHNOLOGY' && 'selected'}`}
          onClick={() => isUnderlineSelected('TECHNOLOGY')}>
          <NavLink to="/technology">
            <span className="list-item-number">03</span>
            TECHNOLOGY
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation