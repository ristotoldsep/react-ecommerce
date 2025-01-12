/**
 * This file contains action creators for category-related actions in the Redux store.
 * These actions are used to manage the state of categories in the application.
 * 
 * The actions include:
 * - `fetchCategoriesStart`: Initiates the fetching of categories.
 * - `fetchCategoriesSuccess`: Dispatched when categories are successfully fetched.
 * - `fetchCategoriesFailed`: Dispatched when there is an error fetching categories.
 * 
 * These actions help in managing the asynchronous flow of fetching category data
 * and updating the state accordingly.
 */
import { CATEGORIES_ACTION_TYPES } from './category.types';
import { createAction } from '../../utils/reducer/reducer.utils';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

export const fetchCategoriesStart = () =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
    createAction(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
        categoriesArray
    );

export const fetchCategoriesFailure = (error) =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesStartAsync = () => {
    return async (dispatch) => {
        dispatch(fetchCategoriesStart());
        try {
            const categoriesArray = await getCategoriesAndDocuments('categories');
            dispatch(fetchCategoriesSuccess(categoriesArray));
        } catch (error) {
            dispatch(fetchCategoriesFailure(error));
        }
    };
};