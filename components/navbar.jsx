import { links } from './data';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link'


const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-transparent">
    <Link href="/">
      <a>
        
      <img className="navbar-logo" src="/images/bg_oglogo.png" />

      </a>
    </Link>
    <div className="navbar-collapse">
        <ul className="navbar-nav navleft">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li className="nav-item" key={id}>

                  <Link href={url}>
                    <a className="nav_link">
                      <h5 className="nav-title">{text}</h5>
                    </a>
                  </Link>
                  

                </li>
              );
            })}

            <li className="nav-item">

                <Link href="/login">
                  <Button className="nav-title" color="secondary" size="large" sx={{ border: 1, borderColor: 'text.primary'  }}>
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