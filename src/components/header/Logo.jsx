import Image from "next/image";

import logo from '../../assets/images/logo.png'

export function Logo() {
    return (
        <Image
          src={logo}
          alt="Logo"
          width="48"
          height="48" />
    )
}