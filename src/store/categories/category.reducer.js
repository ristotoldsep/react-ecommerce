import { CATEGORIES_ACTION_TYPES } from "./category.types";

// The initial state for the categories reducer
export const CATEGORIES_INITIAL_STATE = {
    categories: [],
    isLoading: false,
    error: null
};

// The categoriesReducer function handles state changes based on action types
export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
    // Destructure type and payload from the action object
    const { type, payload } = action;

    // Switch statement to handle different action types
    switch (type) {
        // When fetching categories starts, set isLoading to true
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
            return { ...state, isLoading: true };

        // When fetching categories is successful, update categories and set isLoading to false
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
            return { ...state, categories: payload, isLoading: false };

        // When fetching categories fails, set the error and set isLoading to false
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
            return { ...state, error: payload, isLoading: false };

        // Default case returns the current state if action type is not matched
        default:
            return state;
    }
}