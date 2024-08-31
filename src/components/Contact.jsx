import { CONTACT } from "../constants"
import {motion} from "framer-motion";

const Contact = () => {
  return (
    <motion.div
    whileInView={{opacity:1 , x:0}} 
    initial={{opacity:0 , x: -100}}
    transition={{duration:1}}
    className="border-b border-neutral-900 pb-20">
      <h1 className="my-8 text-center text-4xl">Get In Touch</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4"> {CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="border-bmy-4">{CONTACT.email}</a>
      </div>
    </motion.div>
  )
}

export default Contact
