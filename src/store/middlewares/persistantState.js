export const localstorageMiddleware = storeAPI => next => action => {
    let result = next(action)
    localStorage.setItem('store-state', JSON.stringify(storeAPI.getState()));
    return result
};