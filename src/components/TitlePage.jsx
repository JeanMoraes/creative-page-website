import style from '../styles/TitlePage.module.scss'

export function TitlePage({ children }) {

    return (
        <div className="w-full mb-14">
            <h1 className={`text-neutral-900 font-black tracking-widest text-6xl ${style.stroke}`}>
                { children }
            </h1>
        </div>
    )
}