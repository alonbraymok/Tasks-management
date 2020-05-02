import { SET_TASKS } from "../actions.type";

const INITIAL_STATE = {
  tasks: [],
};

const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TASKS:
      return { ...state, tasks: action.payload };

    default:
      break;
  }
  return state;
};

export default taskReducer;
