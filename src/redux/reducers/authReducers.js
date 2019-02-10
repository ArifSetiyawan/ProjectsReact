const initialState = {
    authError:null
}

const authReducers = (state = initialState , action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login Success');
            return {
                ...state,
                authError: 'Login Failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login Success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout Success');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('signup Success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('Error Sign up');
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state;
    }
    }

export default authReducers;