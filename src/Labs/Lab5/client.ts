import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENT_API = `${REMOTE_SERVER}/lab5/assignment`;
const TODOS_API = `${REMOTE_SERVER}/lab5/todos`;

// GENERAL API
export const fetchWelcomeMessage = async () => {
    const response = await axios.get(`${REMOTE_SERVER}/lab5/welcome`);
    return response.data;
};

// ASSIGNMENT API
export const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_API}`);
    return response.data;
};

export const updateTitle = async (title: string) => {
    const response = await axios.get(`${ASSIGNMENT_API}/title/${title}`);
    return response.data;
};

// TODOS API
export const fetchTodos = async () => {
    const response = await axios.get(TODOS_API);
    return response.data;
};

export const removeTodo = async (todo: any) => {
    const response = await axios.get(`${TODOS_API}/${todo.id}/delete`);
    return response.data;
};

export const createTodo = async () => {
    const response = await axios.get(`${TODOS_API}/create`);
    return response.data;
};
