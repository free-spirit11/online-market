// import { createContext, useState, useEffect } from "react";
// // import PRODUCTS from "../shop-data.json";
// // import SHOP_DATA from '../shop-data.js';
// import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

// export const CategoriesContext = createContext({
//     categoriesMap: {}
// });

// export const CategoriesProvider = ({ children }) => {
//     const [categoriesMap, setCategoriesMap] = useState({});

//     useEffect(() => {
//         //since the result of the async function getCategoriesAndDocuments is the promise, we need to call it and await for it in asyn function inside useEffect
//         const getCategoriesMap = async () => {
//             const categoryMap = await getCategoriesAndDocuments();
//             setCategoriesMap(categoryMap);
//         };
//         getCategoriesMap();
//     }, []);

//     // useEffect(() => { //used to add data from the SHOP_DATA to the DB once. To avoid doing it repeatedly commented the method
//     //     addCollectionAndDocuments('categories', SHOP_DATA);
//     // }, [])
//     const value = { categoriesMap };

//     return (
//         <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
//     )
// };