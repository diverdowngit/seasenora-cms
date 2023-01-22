import React from "react";
import { Link } from "gatsby";
// import github from "../img/github-icon.svg";
import {
  AiOutlineInstagram,

  AiOutlineYoutube,
} from 'react-icons/ai';
import classnames from 'classnames';
import { FaFacebookF } from 'react-icons/fa';
import Logo from "../img/Icon.png";

import * as styles from "./styles/Navbar.module.css";
const Navbar = () => {
 
  const [active, setActive] = React.useState(false);
  const innerHeight = window.innerHeight - 74;

  React.useEffect(() => {
    document.addEventListener('scroll', changeNavbarColor);
    return () => window.removeEventListener('scroll', changeNavbarColor);
  }, []);

  function changeNavbarColor() {
    if ( document.scrollY >= innerHeight) {
      setActive(true);
    } else {
      setActive(false);
    }
  }
  return (  <div
    className={
      active ? classnames(styles.container, styles.active) : styles.container
    }
  >
    <div className={styles.wrapper}>
      <div className={styles.logo}><Link to='/'><img src={Logo} alt="logo of sea senora"/></Link></div>
      <div className={styles.menuContainer}>
        <div className={styles.hamburgermenu}>
        <input id="menutoggle" type="checkbox" />
  <label className={styles.menubtn} htmlFor="menutoggle">
  <div className={styles.topbun}></div>
<div className={styles.meat}></div>
<div className={styles.bottombun}></div>
  </label>
        <ul className={styles.menu}>
          <li className={styles.menuitem}>
            <Link to='/PhotoGallery'>Photo Gallery</Link>
          </li>
          <li className={styles.menuitem}>
            <Link to='/blog'>blog</Link>
          </li>
          <li className={styles.menuitem}>
            <Link to='/about'>about</Link>
          </li>
          <li className={styles.menuitem}>
            <Link to='/keepafloat'>Keep afloat</Link>
          </li>
        </ul>
        </div>
      </div>
      <div className={styles.social}>
      <a href="https://www.instagram.com/svseasenora/"target="_blank" rel="noreferrer" ><AiOutlineInstagram /></a>
          <a href="https://www.youtube.com/channel/UCpaA07tlk3PA44WApp8oKDw"target="_blank" rel="noreferrer" ><AiOutlineYoutube /></a> 
          <a href="https://www.facebook.com/profile.php?id=100085674495009" target="_blank" rel="noreferrer" ><FaFacebookF /></a>
        <div className={styles.searchbox}>

</div> 
      </div>
    </div>
  </div>
);
}
export default Navbar;
//     <nav
//       className="navbar"
//       role="navigation"
//       aria-label="main-navigation"
//     >
//       <div className="container">
//         <div className="navbar-brand">
//           <Link to="/" className="navbar-item" title="Logo">
//             <img src={logo} alt="Sea Senora" style={{ width: "100%"}} />
//           </Link>
//           {/* Hamburger menu */}
//           <button
//             className={`navbar-burger burger ${isActive && "is-active"}`}
//             aria-expanded={isActive}
//             onClick={() => setIsActive(!isActive)}
//           >
//             <span />
//             <span />
//             <span />
//           </button>
//         </div>
//         <ul id="navMenu" className={` navbar-start has-text-centered navbar-menu ${isActive && "is-active"}`}>
//             {/* TODO: inline override of padding is a result of refactoring
//                 to a ul for accessibilty purposes, would like to see a css
//                 re-write that makes this unneccesary.
//              */}
//             <li className="navbar-item" style={{padding: "0px"}}>
//               <Link className="navbar-item" to="/about">
//                 About
//               </Link>
//             </li>
//             <li className="navbar-item" style={{padding: "0px"}}>
//             <Link className="navbar-item" to="/products">
//               Products
//             </Link>
//             </li>
//             <li className="navbar-item" style={{padding: "0px"}}>
//             <Link className="navbar-item" to="/blog">
//               Blog
//             </Link>
//             </li>
//             <li className="navbar-item" style={{padding: "0px"}}>
//             <Link className="navbar-item" to="/contact">
//               Contact
//             </Link>
//             </li>
//             <li className="navbar-item" style={{padding: "0px"}}>
//             <Link className="navbar-item" to="/contact/examples">
//               Form Examples
//             </Link>
//             </li>
//           <li className="navbar-end has-text-centered">
//             <a
//               className="navbar-item"
//               href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               {/* <span className="icon">
//                 <img src={github} alt="Github" />
//               </span> */}
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

