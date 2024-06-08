import { Link } from "react-router-dom";

function NavBar() {
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Projects", path: "/projects" },
    { title: "Work", path: "/work" },
  ];

  return (
    <ul className="flex text-red-600 geist-regular gap-5 mb-16">
      {navLinks.map((navLink) => (
        <li key={navLink.path}>
          <Link to={navLink.path}>{navLink.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default NavBar;
