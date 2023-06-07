import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef(null); // Create a ref for the dropdown element

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [dropdown, ref]);

  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>
          <button onClick={() => setDropdown(!dropdown)}>
            Services <span>&#8595;</span>
          </button>
          {dropdown && (
            <ul ref={ref}>
              <li>Design</li>
              <li>Development</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
