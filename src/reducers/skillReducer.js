import { GET_SKILL, ADD_SKILL, DELETE_SKILL } from "../actions/types";

const initialState = {
  skills: []
};
// Skills reducers
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SKILL:
      return {
        ...state,
        skills: action.payload
      };
    case ADD_SKILL:
      return { ...state, skills: [action.payload, ...state.skills] };
    case DELETE_SKILL:
      return {
        ...state,
        skills: state.skills.filter(skill => skill.id !== action.payload)
      };
    default:
      return state;
  }
}
