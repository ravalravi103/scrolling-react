import logo from "./logo.svg";
import "./App.css";
import Box from "./box";
import { Link } from "react-scroll";
import Scroll from "react-scroll";
import UsingRef from "./usingref";

const tempArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, , 10];
var Element = Scroll.Element;
function App() {
  return (
    <div className="App">
      {/* <div style={{ position: "fixed", top: "0px", left: "300px" }}>
        {tempArr.map((item) => (
          <Link
            to={`${item}`}
            duration={2000}
            smooth={true}
            style={{
              backgroundColor: "yellow",
              padding: "10px 30px",
              margin: "5px",
            }}
          >
            {item}
          </Link>
        ))}
      </div>
      <Element id="containerElement">
        {tempArr.map((item) => (
          <Box item={item}></Box>
        ))}
      </Element> */}

      <UsingRef />
    </div>
  );
}

export default App;
