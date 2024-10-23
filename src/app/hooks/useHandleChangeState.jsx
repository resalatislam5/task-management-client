import { useState } from "react";

// The work of this use handle function is to bring the data from the input and store it in the state
// this function will be used wherever there is input
function useHandleChangeState(initialState) {
  // Form State
  const [state, setState] = useState(initialState);

  // handle input values
  const handleChange = (e) => {
    console.log("e ->>>>", [e.name]);

    // if input field are date then this if block are work
    if (e.name === "date") {
      setState((prev) => ({
        ...prev,
        [e.name]: e.date,
      }));
      return;
    }

    // if input field are priority then this if block are work
    if (e?.target?.name === "priority") {
      let obj = e.target.value;
      const newObj = JSON.parse(obj);
      setState((prev) => ({
        ...prev,
        [e.target.name]: newObj,
      }));
      return;
    }

    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  //retun state and a change handlear function
  return { state, handleChange };
}

export default useHandleChangeState;
