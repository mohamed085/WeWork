export default {
    userId(state) {
        return state.userId;
    },
    token(state) {
        return state.token;
    },
    name(state) {
        return state.name;
    },
    email(state) {
        return state.email;
    },
    is_authenticated(state) {
        return !!state.token;
    }
}