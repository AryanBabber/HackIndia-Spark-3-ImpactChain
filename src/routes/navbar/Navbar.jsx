import React, { Fragment } from "react";
import PreNav from "../../components/prenav/PreNav";
import MainNav from "../../components/mainnav/MainNav";

const Navbar = () => {
    return (
        <Fragment>
            <PreNav />
            <MainNav />
        </Fragment>
    );
};

export default Navbar;
