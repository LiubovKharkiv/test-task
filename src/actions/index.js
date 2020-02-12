import jsonPlaceholder from "../api/jsonPlaceholder";


export const fetchPosts = userId => async dispatch => {
  const response = await jsonPlaceholder.get(`/posts/${userId}`);

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUsers = () => async dispatch => {
  const response = await jsonPlaceholder.get("/users");

  dispatch({ type: "FETCH_USERS", payload: response.data });
};

export const getUserPosts = userId => async dispatch => {
  const response = await jsonPlaceholder.get(`/posts/${userId}`);

  dispatch({ type: "FETCH_USER_POSTS", payload: response.data });
};

