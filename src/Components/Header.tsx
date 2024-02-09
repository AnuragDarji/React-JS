import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { useRecoilState, useRecoilValue } from 'recoil';
import { cardState,openLogin } from '../Store/atom';

const Header = () => {

    const [open, setOpen] = useRecoilState(openLogin);
    const item = useRecoilValue(cardState);

    const loginHandler = () =>{
      setOpen(!open);
    }

  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
        <a className="navbar-brand" href="#">Cart App</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            
          </ul>


          <ShoppingCartTwoToneIcon sx={{color: 'white'}} /><span className='text-white'>({item})</span>

          <button
              className="btn btn-outline-success ml-3 my-2 my-sm-0"
              type="submit"
              onClick={loginHandler}>
                Login
          </button>
        </div>
      </nav>
    </>
  )
}

export default Header