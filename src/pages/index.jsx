import { Header } from "../components/header";

import { FaMobileAlt } from 'react-icons/fa'
import Link from "next/link";


import { motion } from "framer-motion"
import { Layout } from "../components/Layout";

export default function Home() {

  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
}
{/* <motion.div
        transition={{ duration: 1, ease: 'easeInOut' }}
        layoutId="box-transition"
        className="w-screen h-36 bg-primary absolute -top-40 left-0"
      >
      </motion.div> */}
      
  return (
      
      <Layout>      
      <div
        className="flex flex-col flex-1 w-screen h-screen items-center justify-center px-64 text-center bg-full-image bg-cover bg-no-repeat"
        // variants={variants}
        // initial="hidden"
        // animate="enter"
        // exit="exit"
        // transition={{ duration: 0.5, delay: 1 }}
      >
        <Header />
        <motion.h1
          className="text-neutral-100 text-[52px] leading-[56px] font-semibold"
          variants={variants}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Website <span className="text-primary">designer</span> and
          <span className="text-primary"> developer</span> based on California
        </motion.h1>
        <p className="text-neutral-100 mt-10 px-20">
          Dolor excepteur enim elit est consectetur sit cupidatat quis magna eu aute nisi fugiat id velit dolor officia aliqua aliqua occaecat laborum officia esse magna fugiat irure exercitation duis nisi velit non est.
        </p>

        <div className="flex mt-6 gap-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href="/">
              <a className="bg-primary text-neutral-900 py-3 px-7 text-xs font-bold border-2 border-primary">
                WHO WE ARE
              </a>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href="/">
              <a className="bg-transparent text-neutral-100 py-3 px-7 text-xs font-bold border-2 border-neutral-100">
                WHAT WE DO
              </a>
            </Link>
          </motion.div>
        </div>

        <div className="fixed flex items-center justify-center -left-20 top-2/4 -rotate-90 gap-4 text-sm">
          <FaMobileAlt color="#F7E626" /> 
          <span className="text-neutral-100 font-light tracking-[0.5rem]">+55 9 9999-9999</span>
        </div>
      </div>

      </Layout>
  )
}
