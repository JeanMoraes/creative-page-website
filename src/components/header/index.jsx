import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { SocialLinks } from "./SocialLinks";

export function Header() {
    return (
        <header className="w-full h-20 flex justify-between items-center px-8 mt-1 fixed top-0 left-0">
            <Logo />
            <Navigation />
            <SocialLinks />
        </header>
    )
}