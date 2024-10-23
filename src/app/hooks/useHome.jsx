// As many functions and as many logic as home reted will be written in these use hooks

import useHandleChangeState from "./useHandleChangeState";
const initialState = {
  name: "",
  description: "",
  date: new Date(),
  priority: {
    title: "Low",
    color: "green",
  },
  tags: "",
};

function useHome() {
  // call use handel hook
  const { state, handleChange } = useHandleChangeState(initialState);
  console.log(state);

  return { handleChange };
}

export default useHome;
