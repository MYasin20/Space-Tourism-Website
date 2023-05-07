
function Navigation() {
  return (
    <nav className="nav">
      <div className="logo">
        <img src="/src/images/shared/logo.svg" alt="logo"/>
      </div>
      <div className="line"></div>
      <ul className="nav-lists">
        <li className="list-item is-underline-selected">
          <span className="list-item-number">00</span>
          <a href="/#">HOME</a>
        </li>
        <li className="list-item">
          <span className="list-item-number">01</span>
          <a href="/#">DESTINATION</a>
        </li>
        <li className="list-item">
          <span className="list-item-number">02</span>
          <a href="/#">CREW</a>
        </li>
        <li className="list-item">
          <span className="list-item-number">03</span>
          <a href="/#">TECHNOLOGY</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation