import { links } from './data';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link'


const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-transparent">
    <Link href="/">
        <img className="navbar-logo" src="/images/bg_oglogo.png" />
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
    </button>
    <div className="navbar-collapse" id="navbarNav">
        <ul className="navbar-nav navleft">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li className="nav-item" key={id}>
                  <div className="nav-link">
                  <Link href={url}>
                    <a className="nav_link">
                      <h5 className="nav2-title">{text}</h5>
                    </a>
                  </Link>
                  </div>

                </li>
              );
            })}

            <li className="nav-item">

              <Link href="/login">
                <Button className="nav_link nav-title2" color="secondary" size="large" sx={{ border: 1 }}>
                  {/*<h5 className="nav-title">Login to Dashboard</h5>*/}
                  Login to Dashboard
                </Button>
              </Link>

              </li>
        </ul>
    </div>
  </nav>
  )
}

export default navbar

