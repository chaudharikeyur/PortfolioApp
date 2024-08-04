import {RiReactjsLine} from "react-icons/ri";
import { FaNodeJs} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import {  SiExpress } from "react-icons/si";
import { BiLogoPhp } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoJquery } from "react-icons/bi";
import {motion} from "framer-motion";


const iconVariants = (delay) => ({
    initial: {y:-10},
    animate:{
       y:[10,-10],
       transition : {duration: 0.5 ,  delay :  delay , repeat: Infinity,
        repeatType: "reverse"
       }

    }
   
})

const Technologies = () => {
  return (
    <div className="border-p border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">
            Technologies
        </h1>
        <motion.div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div variants={iconVariants(2.5)} initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
               <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div 
            variants={iconVariants(2)} initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
               <FaNodeJs  className="text-7xl text-yellow-400" />
            </motion.div>
            <motion.div 
            variants={iconVariants(6)} initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
               <SiMongodb  className="text-7xl text-green-500" />
            </motion.div>
            <motion.div 
            variants={iconVariants(2.2)} initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
               <SiExpress  className="text-7xl text-gray-100" />
            </motion.div>
            <motion.div 
            variants={iconVariants(1)} initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
               <BiLogoPhp  className="text-7xl text-blue-400" />
            </motion.div>
            <motion.div
            variants={iconVariants(5)} initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
               <BiLogoTailwindCss   className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div 
            variants={iconVariants(2.9)} initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
               <BiLogoHtml5   className="text-7xl text-red-500" />
            </motion.div>
            <motion.div 
            variants={iconVariants(2.1)} initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
               <BiLogoJquery   className="text-7xl text-lime-100" />
            </motion.div>
          
        </motion.div>
      
    </div>
  )
}

export default Technologies
