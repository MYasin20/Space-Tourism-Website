
function Navigation() {
  return (
    <nav className="nav">
      <div className="logo">
        <img src="/src/images/shared/logo.svg" alt="logo"/>
      </div>
      <div className="line"></div>
      <button className="burger-menu"></button>
      <ul className="nav-lists">
        <li className="list-item is-underline-selected">
          <a href="/#">
            <span className="list-item-number">00</span>
            HOME
          </a>
        </li>
        <li className="list-item">
          <a href="/#">
            <span className="list-item-number">01</span>
            DESTINATION
          </a>
        </li>
        <li className="list-item">
          <a href="/#">
            <span className="list-item-number">02</span>
            CREW
          </a>
        </li>
        <li className="list-item">
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