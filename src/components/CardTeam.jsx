import Image from 'next/image'

import { SocialLink } from './header/SocialLinks'
import { FaFacebookF } from 'react-icons/fa'

export function CardTeam({ picture }) {

    return (
        <div className="group flex flex-col justify-center w-full h-auto">
            <div>
                <Image
                  src={`/team/${picture}.jpg`}
                  alt="people name"
                  className='group-hover:scale-110 transition duration-700'
                  width={500}
                  height={749}
                />
            </div>
            <div>
                <h4>Name People</h4>
                <p>Occupation</p>
                <SocialLink>
                    <FaFacebookF />
                </SocialLink>
            </div>
        </div>
    )
}