import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  const colorArray = colors.map((Color) => {
    return <li key={Color} style={{color: Color}}>{Color}</li>
  })

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {colorArray}
      </ol>
    </div>
  );
}

export default ColorList;
