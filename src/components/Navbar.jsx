import logo from '../assets/kevinRushLogo.png';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



const Navbar = () => {
  return (
   <nav className="mb-20 flex items-center justify-between py-6">
<div className="flex flex-shrink-0 items-center">
  <span className="mx-2 w-10 text-neutral-200 text-5xl font-serif" >KC</span>
  {/* <img className='mx-2 w-10' src={logo} alt="logo" /> */}
  </div>
  <div className="m-8 flex items-center justify-center gap-4  text-3xl">
    <a href="https://www.linkedin.com/in/keyur-chaudhari-5635051ba/"><FaLinkedin/></a>
    <a href="https://github.com/chaudharikeyur"><FaGithub /></a>
   </div>   
</nav>
  )
}

export default Navbar
