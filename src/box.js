import React from "react";
import Scroll from "react-scroll";
var Element = Scroll.Element;

const Box = ({ item }) => {
  return (
    <Element
      name={`${item}`}
      style={{ padding: "200px", margin: "30px", backgroundColor: "red" }}
    >
      {item}
    </Element>
  );
};

export default Box;
