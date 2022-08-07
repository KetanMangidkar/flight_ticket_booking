import { Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <Box
        bg="Black"
        w="100%"
        p={6}
        color="white"
        display={"flex"}
        justifyContent="space-between"
      >
        <div>
          {" "}
          <Link to="/">Flight Ticket Booking</Link>
        </div>
        <div className="connect">
          {" "}
          <div>
            <Link to="/login">LogIn</Link>
          </div>
          <div></div>
          <div>
            <Link to="/signup">SignUp</Link>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default Navbar;
