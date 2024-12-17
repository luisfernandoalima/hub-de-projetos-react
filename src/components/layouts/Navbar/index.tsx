import { Link } from "react-router-dom"

export const Navbar = () => {
    return(
        <nav>
            <ul className="flex justify-center items-center gap-x-4 text-slate-50 font-semibold text-lg">
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/"}>Home</Link></li>
            </ul>
        </nav>
    )
}