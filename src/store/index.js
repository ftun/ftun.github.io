import { configureStore, combineSlices } from "@reduxjs/toolkit";
import profileReducer from './reducers/profile';

// export const store = configureStore({
//     reducer: {
//         profile: profileReducer
//     }
// })

const rootReducer = combineSlices({
    profile: profileReducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(), //.concat(logger),
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
})

// function logger({ getState }) {
//     return next => action => {
//         console.log('will dispatch', action)

//         // Call the next dispatch method in the middleware chain.
//         const returnValue = next(action)

//         console.log('state after dispatch', getState())

//         // This will likely be the action itself, unless
//         // a middleware further in chain changed it.
//         return returnValue
//     }
// }