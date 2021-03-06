import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ logo, to }) => {
  return (
    <div style={{ paddingRight: "10px" }}>
      <Link className="brand-logo" to={to} style={{ position: "relative" }}>
        {logo}
      </Link>
    </div>
  );
};

export default Logo;
