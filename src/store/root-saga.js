/**
 * Redux Saga is used to manage side effects in a Redux application. 
 * It allows you to handle asynchronous operations, such as data fetching 
 * and impure functions, in a more manageable and testable way. 
 * By using generator functions, Redux Saga makes it easier to write 
 * complex asynchronous code that can be paused, resumed, and cancelled.
 */

import { all, call } from 'redux-saga/effects';

// This is a generator function named 'rootSaga' which is intended to be the root saga for a Redux-Saga middleware setup in a React application.
// Redux-Saga is a library that aims to make side effects (like data fetching, impure things like accessing the browser cache, etc.) easier to manage, more efficient to execute, and better at handling failures.
// The 'rootSaga' function will typically yield an array of sagas using the 'all' effect, which allows multiple sagas to be run concurrently.

import { categoriesSaga } from './categories/category.saga';

export function* rootSaga() {
    yield all([call(categoriesSaga)]);
}