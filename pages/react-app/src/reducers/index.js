export default (state, action) => {
    switch (action.type) {
        case 'INCREASE':
            return {id: state.id + 1};
        default:
            return state
    }
}
