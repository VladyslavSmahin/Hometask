export const logger = (store) => {
    console.log(store)
    return (dispatch) => {
        console.log(dispatch)
        return (action) => {
            console.log(store.getState())
            const res = dispatch(action)
            console.log(store.getState())
            return res;
        }
    }
}