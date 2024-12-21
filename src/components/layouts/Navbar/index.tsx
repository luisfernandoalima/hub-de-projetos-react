import { Link } from "react-router-dom"

export const Navbar = () => {
    return(
        <nav>
            <ul className="flex justify-center items-center gap-x-4 text-slate-50 font-semibold text-lg">
                <li><Link to={"/hub-de-projetos-react"}>Home</Link></li>
                <li><Link to={"/hub-de-projetos-react/projects"}>Projetos</Link></li>
            </ul>
        </nav>
    )
}