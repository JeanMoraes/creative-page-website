import Link from "next/link";
import { useContext } from "react";
import { FiX } from 'react-icons/fi'
import { CursorContext } from "../context/CursorContext";

export function CloseButtonContainer() {

    const { mouseOverEvent, mouseOutEvent} = useContext(CursorContext)

    return (
        <div className="absolute top-0 right-0 p-8">
            <Link href="/">
                <a
                    className="text-neutral-100"
                    onMouseOver={mouseOverEvent}
                    onMouseOut={mouseOutEvent}
                >
                    <FiX size={44} />
                </a>
            </Link>
        </div>
    )
}