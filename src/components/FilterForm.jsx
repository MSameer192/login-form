import React, { useState } from "react";

export default function FilterForm() {

  const [number, setNumber] = useState();
  const [list, setList] = useState([]);

  const filterArray = () => {
    setList([...list, number]);
    setNumber("");
  };

  return (
    <>
      <form
        action=""
        className="container mt-5 text-center"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        Please put your number :
        <input
          className="mx-3 "
          type="text"
          name=""
          id=""
          value={number}
          onChange={(event) => {
            setNumber(event.target.value);
          }}
        />
        <button className="btn btn-primary" onClick={filterArray}>
          {" "}
          Filter Array{" "}
        </button>
      </form>

      <div className="container text-center mt-5">

          Input all numbers of data mentioned below:

          {
              list.map(mainArray =>(
                  <li> {mainArray} </li>
              ))

          }  

          <br /> <br /> <br />


          Negative Numbers mentioned below:

          {
              list.filter(pNum => pNum < 0).map(positiveNum => (
                  <li>
                      {positiveNum}
                  </li>
              ))                          
          }

          <br /> <br /> <br />


          Positive Numbers mentioned below:
          {
              list.filter(nNum => nNum > 0).map(negativeNum => (
                  <li>
                      {negativeNum}
                  </li>
              ))
          }

      </div>

    </>
  );
}
