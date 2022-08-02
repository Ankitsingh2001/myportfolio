import React from "react";
import {FaBars,} from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiX } from 'react-icons/hi';
import Navicon from "../../image/letter-a-symbol.png"
import './style.scss';

const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT ME",
    to: "/about  ",
  },
  {
    label: "SKILLS",
    to: "/skills",
  },
  {
    label: "RESUME",
    to: "/resume",
  },
  {
    label: "PROJECT",
    to: "/projects",
  },
  {
    label: "CONTACT",
    to: "/contact",
  },
];

const NavBar = () => {

  const [toggleIcon , setToggleIcon] =React.useState(false);
  
  const handleToggleIcon=()=>{
    return setToggleIcon(!toggleIcon)
  }
  const hideNav=()=>{
    return setToggleIcon(!toggleIcon)
  }


  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            <img src={Navicon}  alt=""/>
          </Link>
        </div>
        <ul className={`navbar__container__menu ${toggleIcon ? "active":" "}`}>
          {data.map((item , key)=>(
            <li key={key} className='navbar__container__menu__items' onClick={hideNav}>
             <Link className="navbar__container__menu__items__links" to={item.to}>
               {item.label}
             </Link>
            </li>
          ))
          }
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
           {
            toggleIcon ? <HiX size={30}/> :<FaBars size={30}/>
           }    
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
