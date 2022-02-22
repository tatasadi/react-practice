import React, { useState } from "react";
const list = [
  "apple",
  "banana",
  "peach",
  "pear",
  "pineapple",
  "melon",
  "lemon",
  "orange",
  "grapes",
];

const SearchFilter = (props) => {
  const [filteredList, setfilteredList] = useState(list);

  const filterList = (text) => {
    setfilteredList(text ? list.filter((item) => item.includes(text)) : list);
  };

  return (
    <>
      <div className="header">{props.title}</div>
      <div style={{ textAlign: "center" }}>
        Search:{" "}
        <input
          type="text"
          onChange={(event) => filterList(event.target.value)}
        />
        {filteredList.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
      <hr />
    </>
  );
};

export default SearchFilter;
