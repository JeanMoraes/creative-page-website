import { motion } from 'framer-motion'

import { CloseButtonContainer } from "../components/CloseButtonContainer";
import { TitlePage } from "../components/TitlePage";

export default function Services() {
    const variants = {
        hidden: { opacity: 0 },
        enter: { opacity: 1 },
        exit: { opacity: 0 },
    }

    return (
        <>
        
        <motion.div
            layoutId="box-transition"
            className="w-screen h-screen bg-primary absolute -bottom-full left-0 z-50"
            transition={{ duration: 1, ease: 'easeInOut' }}
        >
        </motion.div>

        <motion.div
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: 'linear', delay: 0.5 }}
            className="flex items-start bg-neutral-900 w-screen h-screen pt-20 overflow-y-scroll"
        >
            <CloseButtonContainer />
            <div className="flex flex-col w-full items-start justify-center text-center max-w-7xl px-2 mx-auto">
                <TitlePage>
                    <span>OUR</span> SERVICES
                </TitlePage>

                <div className="grid grid-cols-2 w-full">
                    <p className="mt-2 text-neutral-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, maiores reprehenderit culpa obcaecati asperiores doloremque aliquid quis numquam recusandae odit dolorum delectus rem veniam rerum, quisquam est eveniet? Soluta, dignissimos!</p>
                    <p className="mt-2 text-neutral-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, maiores reprehenderit culpa obcaecati asperiores doloremque aliquid quis numquam recusandae odit dolorum delectus rem veniam rerum, quisquam est eveniet? Soluta, dignissimos!</p>
                    <p className="mt-2 text-neutral-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, maiores reprehenderit culpa obcaecati asperiores doloremque aliquid quis numquam recusandae odit dolorum delectus rem veniam rerum, quisquam est eveniet? Soluta, dignissimos!</p>
                    <p className="mt-2 text-neutral-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, maiores reprehenderit culpa obcaecati asperiores doloremque aliquid quis numquam recusandae odit dolorum delectus rem veniam rerum, quisquam est eveniet? Soluta, dignissimos!</p>
                    <p className="mt-2 text-neutral-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, maiores reprehenderit culpa obcaecati asperiores doloremque aliquid quis numquam recusandae odit dolorum delectus rem veniam rerum, quisquam est eveniet? Soluta, dignissimos!</p>
                    <p className="mt-2 text-neutral-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, maiores reprehenderit culpa obcaecati asperiores doloremque aliquid quis numquam recusandae odit dolorum delectus rem veniam rerum, quisquam est eveniet? Soluta, dignissimos!</p>
                    <p className="mt-2 text-neutral-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, maiores reprehenderit culpa obcaecati asperiores doloremque aliquid quis numquam recusandae odit dolorum delectus rem veniam rerum, quisquam est eveniet? Soluta, dignissimos!</p>
                    <p className="mt-2 text-neutral-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, maiores reprehenderit culpa obcaecati asperiores doloremque aliquid quis numquam recusandae odit dolorum delectus rem veniam rerum, quisquam est eveniet? Soluta, dignissimos!</p>
                    <p className="mt-2 text-neutral-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, maiores reprehenderit culpa obcaecati asperiores doloremque aliquid quis numquam recusandae odit dolorum delectus rem veniam rerum, quisquam est eveniet? Soluta, dignissimos!</p>
                    <p className="mt-2 text-neutral-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, maiores reprehenderit culpa obcaecati asperiores doloremque aliquid quis numquam recusandae odit dolorum delectus rem veniam rerum, quisquam est eveniet? Soluta, dignissimos!</p>
                    <p className="mt-2 text-neutral-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, maiores reprehenderit culpa obcaecati asperiores doloremque aliquid quis numquam recusandae odit dolorum delectus rem veniam rerum, quisquam est eveniet? Soluta, dignissimos!</p>
                    <p className="mt-2 text-neutral-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, maiores reprehenderit culpa obcaecati asperiores doloremque aliquid quis numquam recusandae odit dolorum delectus rem veniam rerum, quisquam est eveniet? Soluta, dignissimos!</p>
                    <p className="mt-2 text-neutral-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, maiores reprehenderit culpa obcaecati asperiores doloremque aliquid quis numquam recusandae odit dolorum delectus rem veniam rerum, quisquam est eveniet? Soluta, dignissimos!</p>
                    <p className="mt-2 text-neutral-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, maiores reprehenderit culpa obcaecati asperiores doloremque aliquid quis numquam recusandae odit dolorum delectus rem veniam rerum, quisquam est eveniet? Soluta, dignissimos!</p>
                    <p className="mt-2 text-neutral-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, maiores reprehenderit culpa obcaecati asperiores doloremque aliquid quis numquam recusandae odit dolorum delectus rem veniam rerum, quisquam est eveniet? Soluta, dignissimos!</p>
                    <p className="mt-2 text-neutral-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, maiores reprehenderit culpa obcaecati asperiores doloremque aliquid quis numquam recusandae odit dolorum delectus rem veniam rerum, quisquam est eveniet? Soluta, dignissimos!</p>
                    <p className="mt-2 text-neutral-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, maiores reprehenderit culpa obcaecati asperiores doloremque aliquid quis numquam recusandae odit dolorum delectus rem veniam rerum, quisquam est eveniet? Soluta, dignissimos!</p>
                    <p className="mt-2 text-neutral-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, maiores reprehenderit culpa obcaecati asperiores doloremque aliquid quis numquam recusandae odit dolorum delectus rem veniam rerum, quisquam est eveniet? Soluta, dignissimos!</p>
                    <p className="mt-2 text-neutral-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, maiores reprehenderit culpa obcaecati asperiores doloremque aliquid quis numquam recusandae odit dolorum delectus rem veniam rerum, quisquam est eveniet? Soluta, dignissimos!</p>
                    <p className="mt-2 text-neutral-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, maiores reprehenderit culpa obcaecati asperiores doloremque aliquid quis numquam recusandae odit dolorum delectus rem veniam rerum, quisquam est eveniet? Soluta, dignissimos!</p>
                    <p className="mt-2 text-neutral-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, maiores reprehenderit culpa obcaecati asperiores doloremque aliquid quis numquam recusandae odit dolorum delectus rem veniam rerum, quisquam est eveniet? Soluta, dignissimos!</p>
                    <p className="mt-2 text-neutral-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, maiores reprehenderit culpa obcaecati asperiores doloremque aliquid quis numquam recusandae odit dolorum delectus rem veniam rerum, quisquam est eveniet? Soluta, dignissimos!</p>
                    <p className="mt-2 text-neutral-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, maiores reprehenderit culpa obcaecati asperiores doloremque aliquid quis numquam recusandae odit dolorum delectus rem veniam rerum, quisquam est eveniet? Soluta, dignissimos!</p>
                    <p className="mt-2 text-neutral-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, maiores reprehenderit culpa obcaecati asperiores doloremque aliquid quis numquam recusandae odit dolorum delectus rem veniam rerum, quisquam est eveniet? Soluta, dignissimos!</p>
                </div>
            </div>        
        </motion.div>
        </>
    )
}