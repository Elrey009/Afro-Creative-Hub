import { Link, NavLink } from "react-router-dom";

const ContactLink = () => {
  return (
    <div>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? " bg-duckyYellow text-midnight  px-6 py-9 md:py-6 whitespace-nowrap font-medium"
            : "bg-lightTan text-midnight px-6 py-3 md:py-6 whitespace-nowrap font-medium "
        }
      >
        Contact Us
      </NavLink>
    </div>
  );
};

export default ContactLink;
