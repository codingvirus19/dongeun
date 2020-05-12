import React from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Contents from "./contents/Contents";
import Footer from "./footer/Footer";

export default class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="sidebar-contents_container">
          <Sidebar />
          <Contents />
        </div>
        <Footer />
      </div>
    );
  }
}
