import { LOGIN, LOGOUT } from "../actions/authActions";

const savedUser = localStorage.getItem("movieUser");

const initialState = {
    isAuthenticated: !!savedUser,
    user: savedUser ? JSON.parse(savedUser) : null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOGIN:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
            };

        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };

        default:
            return state;
    }
};

export default authReducer;