/**
 * Selector to get the categories slice from the state.
 * 
 * @param {Object} state - The root state of the application.
 * @returns {Object} The categories slice of the state.
 */

/**
 * Memoized selector to get the categories array from the categories slice.
 * 
 * @param {Object} categoriesSlice - The categories slice of the state.
 * @returns {Array} The array of categories.
 */

/**
 * Memoized selector to get the categories map from the categories array.
 * 
 * @param {Array} categories - The array of categories.
 * @returns {Object} The categories map where keys are category titles in lowercase and values are category items.
 * 
 * Memoization is used here to improve performance by caching the result of the selector.
 * This ensures that the selector only recalculates the result when the input state changes,
 * avoiding unnecessary recalculations and re-renders in the application.
 */

import { createSelector } from 'reselect'; // Using reselect to memoize the selector

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) =>
        categories.reduce((acc, { title, items }) => {
            acc[title.toLowerCase()] = items;
            return acc;
        }, {})
);
