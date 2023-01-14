import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({children}){
    return <>
    <Header/>
    <div className="pt-5 pb-4" style={{backgroundColor: '#fdfdfd'}}>{children}</div>
    <Footer/>
    </>
}

export default Layout;