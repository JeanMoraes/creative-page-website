import Link from "next/link";
import { useContext } from "react";
import { CursorContext } from "../../context/CursorContext";

export function Navigation() {

    const { mouseOverEvent, mouseOutEvent } = useContext(CursorContext)

    const navLinks = [
        { href: '/about', text: 'ABOUT'},
        { href: '/services', text: 'SERVICES'},
        { href: '/', text: 'WORKS'},
        { href: '/', text: 'NEWS'},
        { href: '/', text: 'CONTACT'},
    ]

    return (
        <nav className="flex items-center justify-items-center gap-9">
            {
                navLinks.map( navLink => (
                    <Link key={navLink.text} href={navLink.href}>
                        <a
                            className="block text-neutral-100 text-sm font-medium tracking-widest hover:text-primary transition"
                            onMouseOver={mouseOverEvent}
                            onMouseOut={mouseOutEvent}
                        >
                            {navLink.text}
                        </a>
                    </Link>
                ))
            }
        </nav>
    )
}