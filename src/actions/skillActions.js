import axios from "axios";
import { GET_SKILL, ADD_SKILL, DELETE_SKILL } from "./types";

const api = axios.create({ baseURL: "http://localhost:3001" });

// Find Skills
export const findSkills = () => dispatch => {
  api
    .get("/skills")
    .then(res => {
      dispatch({
        type: GET_SKILL,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_SKILL,
        payload: {}
      })
    );
};

export const addSkill = skill => dispatch => {
  api.post("/skills", skill).then(res => {
    dispatch({ type: ADD_SKILL, payload: res.data });
  });
};

export const deleteSkill = id => dispatch => {
  api.delete(`/skills/${id}`).then(res => {
    dispatch({ type: DELETE_SKILL, payload: id });
  });
};
