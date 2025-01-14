/**
 * Fetches categories asynchronously from the database.
 * @generator
 * @function fetchCategoriesAsync
 * @yields {void}
 * @throws Will dispatch fetchCategoriesFailure action if there is an error.
 */

/**
 * Listens for the FETCH_CATEGORIES_START action and triggers fetchCategoriesAsync.
 * @generator
 * @function onFetchCategories
 * @yields {void}
 */

/**
 * Combines all category sagas into a single saga.
 * @generator
 * @function categoriesSaga
 * @yields {void}
 */
import { takeLatest, put, all, call } from 'redux-saga/effects';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import { fetchCategoriesSuccess, fetchCategoriesFailure } from './category.action';

import { CATEGORIES_ACTION_TYPES } from './category.types';


export function* fetchCategoriesAsync() {
    try {
        const categoriesArray = yield call(getCategoriesAndDocuments, 'categories'); // yield is like pausing functions, similar to (async) await
        yield put(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
        yield put(fetchCategoriesFailure(error));
    }
}

export function* onFetchCategories() {
    yield takeLatest(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
        fetchCategoriesAsync
    );
}

export function* categoriesSaga() {
    yield all([call(onFetchCategories)]);
}




