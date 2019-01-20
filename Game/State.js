const initialState = {
  separated: false
};

export function state() {
  let state = Object.freeze(initialState);

  function getState() {
    return state;
  }

  function setState(property, value) {
    const newState = {};

    for (let key in state) {
      if ((key = property)) {
        newState[property] = value;
      } else {
        newState[key] = state[key];
      }
    }
    state = Object.freeze(newState);
    return state;
  }

  return {
    getState,
    setState
  };
}

export const State = state();
