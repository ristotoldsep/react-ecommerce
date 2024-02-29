import { createContext, useState, useEffect } from "react";

import { /* addCollectionAndDocuments,  */getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

// import SHOP_DATA from '../shop-data';

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    // Used once to seed Firebase database with products data
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, []);

    useEffect(() => {
        const getCategories = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            // console.log(categoryMap, 'categories');

            setCategoriesMap(categoryMap);
        }

        getCategories();
    }, [])

    const value = { categoriesMap };

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}
