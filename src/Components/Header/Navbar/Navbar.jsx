import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
    return (
        <div>
            <nav className="md:flex justify-center md:justify-between text-center md:text-start py-5 px-4 md:px-6 lg:px-20">
                <div className="text-center mx-auto md:mx-0 mb-5 md:mb-0 lg:mb-0">
                <Logo></Logo>
                </div>
                <ul className="md:flex items-center justify-center gap-10 md:justify-start text-center md:text-start">
                    <li className="my-2">
                        <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                        }
                        >
                        Home
                        </NavLink>
                    </li>
                    <li className="my-2">
                        <NavLink
                        to="/donations"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                        }
                        >
                        Donation
                        </NavLink>
                    </li>
                    <li className="my-2">
                        <NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                        }
                        >
                        Statistics
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;