import Navigation from './Navigation.jsx';

function LandingPage() {
  return (
    <div className='landing-bg'>
      <Navigation />
      <div className='container'>
          <div>
            <h5 className='sub-heading-5'>SO, YOU WANT TO TRAVEL TO</h5>
            <h1 className='heading'>SPACE</h1>
            <p className='body-text'>Let&apos;s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we&apos;ll give you a truly out of this world experience!</p>
          </div>

          <a className='explore-btn' href='/#'>EXPLORE</a>
      </div>
    </div>
  )
}

export default LandingPage