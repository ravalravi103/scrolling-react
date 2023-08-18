import React from "react";

const tempArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const UsingRef = () => {
  const dayRef = React.useRef([]);

  React.useEffect(() => {}, []);

  const handleClick = (day) => {
    
    if (dayRef) {
      console.log(
        dayRef.current[day].scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        })
      );
    }
  };

  return (
    <>
      <div
        style={{ display: "flex", position: "fixed", top: "0", left: "300px" }}
      >
        {console.log(dayRef)}
        {tempArr.map((item, index) => (
          <div
            onClick={() => handleClick(index)}
            style={{
              backgroundColor: "red",
              padding: "10px 30px",
              margin: "5px",
            }}
          >
            {item}
          </div>
        ))}
      </div>

      <div>
        {tempArr.map((item, index) => (
          <div
            id={index}
            style={{
              backgroundColor: "wheat",
              padding: "100px",
              margin: "10px",
            }}
            ref={(el) => (dayRef.current[index] = el)}
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
};

export default UsingRef;
