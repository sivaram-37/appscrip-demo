import "./CSS/App.css";
import "./CSS/Heading.css";
import "./CSS/Title.css";
import "./CSS/Toolbar.css";
// import "./Demo.css";
import "./CSS/Product.css";
import "./CSS/Footer.css";
import React from "react";
import HeadingComponent from "./HeadingComponent";
import TitleComponent from "./TitleComponent";
import ToolbarComponent from "./ToolbarComponent";
import ProductComponent from "./ProductComponent";
import FooterComponent from "./FooterComponent";
// import Demo from "./Demo";

function App() {
  return (
    <div>
      <HeadingComponent />
      <TitleComponent />
      <ToolbarComponent />
      <ProductComponent />
      {/* <Demo /> */}
      <FooterComponent />
    </div>
  );
}

export default App;
