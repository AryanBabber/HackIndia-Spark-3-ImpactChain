import React, { Fragment } from "react";
import Directory from "../../components/directory/Directory";
import { Outlet } from "react-router";

const Home = () => {
    return (
        <Fragment>
            <Directory />
            <Outlet />
        </Fragment>
    );
};

export default Home;
