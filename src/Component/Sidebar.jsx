import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="left-sidebar">
            <aside>
                <ul className="list-unstyled nav-sidebar doc-nav">
                    <li className="nav-item">
                        <div className="title">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active-link" : ""}`
                                }
                            >
                                Home
                            </NavLink>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="title">
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active-link" : ""}`
                                }
                            >
                                About Us
                            </NavLink>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="title">
                            <NavLink
                                to="/terms-condition"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active-link" : ""}`
                                }
                            >
                                Terms and Condition
                            </NavLink>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="title">
                            <NavLink
                                to="/privacy-policy"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active-link" : ""}`
                                }
                            >
                                Privacy Policy
                            </NavLink>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="title">
                            <NavLink
                                to="/delete-account"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active-link" : ""}`
                                }
                            >
                                Delete Account
                            </NavLink>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="title">
                            <NavLink
                                to="/eula"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active-link" : ""}`
                                }
                            >
                                EULA
                            </NavLink>
                        </div>
                    </li>
                     <li className="nav-item">
                        <div className="title">
                            <NavLink
                                to="/plans"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active-link" : ""}`
                                }
                            >
                               Plans
                            </NavLink>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="title">
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active-link" : ""}`
                                }
                            >
                                Contact
                            </NavLink>
                        </div>
                    </li>
                </ul>
            </aside>
        </div>
    );
};

export default Sidebar;
