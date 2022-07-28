import { useContext } from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram} from 'react-icons/fa'
import { CursorContext } from '../../context/CursorContext'

export const SocialLink = ({ children, href }) => {
  const { mouseOverEvent, mouseOutEvent } = useContext(CursorContext)
  return (
    <a
      href={href}
      className='cursor-pointer text-neutral-100 hover:text-primary'
      onMouseOver={mouseOverEvent}
      onMouseOut={mouseOutEvent}
    >
        { children }
    </a>
  )
}

export function SocialLinks() {

    return (
        <div className='flex justify-between gap-6'>
          <SocialLink href="#">
            <FaFacebookF />
          </SocialLink>

          <SocialLink href="#">
            <FaTwitter />
          </SocialLink>

          <SocialLink href="#">
            <FaLinkedinIn />
          </SocialLink>

          <SocialLink href="#">
            <FaInstagram />
          </SocialLink>
        </div>
    )
}