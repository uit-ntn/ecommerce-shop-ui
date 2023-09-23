import React from "react";
import Header from "../../Header/Header";


function Layout({ children }) {
    return (
        <div className="Layout">
            <Header></Header>
            <span>{children}</span>
        </div>
    )
}
export default Layout;