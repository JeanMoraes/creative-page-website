import { motion } from 'framer-motion'

const variants = {
    hidden: { opacity: 0, x: 0, y: '-100vh' },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: '-100vh' },
}

const variants2 = {
    hidden: { opacity: 1, x: 0, y: '-100vh' },
    enter: { opacity: 1, x: 0, y: '100vh' },
    exit: { opacity: 1, x: 0, y: '-100vh' },
}

export function Layout({ children}) {
    return (
        <div>
            <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: 'linear', delay: 1 }}
        >
            <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants2}
                transition={{ duration: .5, ease: 'easeInOut' }}
                // layoutId="box-transition"
                className="w-screen h-screen bg-primary absolute top-50 left-0 z-50"
            >
            </motion.div>

            { children }
        </motion.div>
        </div>
    )
}