import Cursor from '../components/Cursor'
import { CursorProvider } from '../context/CursorContext'
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion'

import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {
  return (
    <CursorProvider>
      <Cursor />
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
          >
              <Component {...pageProps} key={router.pathname} />
        </AnimatePresence>
      </AnimateSharedLayout>
    </CursorProvider>
    
  )
}

export default MyApp
