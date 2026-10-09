/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { fetchPolicies } from "../api";

const linkClass = ({ isActive }) => `nav-link ${isActive ? "active-link" : ""}`;

const SidebarLink = ({ to, label }) => (
    <li className="nav-item">
        <div className="title">
            <NavLink to={to} end className={linkClass} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                {label}
            </NavLink>
        </div>
    </li>
);

// Shown until the API answers (and if it fails) so navigation never disappears.
const FALLBACK_POLICIES = [
    { slug: "about", title: "About Us" },
    { slug: "terms-condition", title: "Terms and Condition" },
    { slug: "privacy-policy", title: "Privacy Policy" },
    { slug: "delete-policy", title: "Delete Account" },
    { slug: "eula", title: "EULA" },
    { slug: "plans", title: "Plans" },
];

const Sidebar = () => {
    const [policies, setPolicies] = useState(FALLBACK_POLICIES);

    useEffect(() => {
        let active = true;
        fetchPolicies()
            .then((list) => {
                if (active && list.length) setPolicies(list);
            })
            .catch((error) => console.error("Unable to load policies for the sidebar:", error));
        return () => {
            active = false;
        };
    }, []);

    return (
        <div className="left-sidebar">
            <aside>
                <ul className="list-unstyled nav-sidebar doc-nav">
                    <SidebarLink to="/" label="Home" />
                    {policies.map((policy) => (
                        <SidebarLink key={policy.slug} to={`/${policy.slug}`} label={policy.title} />
                    ))}
                    <SidebarLink to="/contact" label="Contact" />
                </ul>
            </aside>
        </div>
    );
};

export default Sidebar;
