export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const loginUser = (name, email, password) => {
    return (dispatch) => {
        if (!name || !email || !password) {
            return false;
        }

        const user = {
            name: name,
            email: email,
        };

        localStorage.setItem(
            "movieUser",
            JSON.stringify(user)
        );

        dispatch({
            type: LOGIN,
            payload: user,
        });

        return true;
    };
};

export const logoutUser = () => {
    return (dispatch) => {
        localStorage.removeItem("movieUser");

        dispatch({
            type: LOGOUT,
        });
    };
};