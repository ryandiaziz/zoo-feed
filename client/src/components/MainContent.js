import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
    HomePage,
    AnimalPage,
    ShowAnimalPage,
    CreateAnimalPage,
    LoginPage,
    EditItemPage,
    DetailAnimalPage,
    FoodPage,
    CreateBrandPage,
    ShowFoodPage,
    EditBrandPage,
} from '../pages'

const MainContent = () => {
    return (
        <>
            <Routes>
                <Route path='' element={
                    <HomePage></HomePage>
                }></Route>
                <Route path='animals' element={<AnimalPage></AnimalPage>}>
                    <Route path='' element={<ShowAnimalPage></ShowAnimalPage>}></Route>
                    <Route path='create' element={<CreateAnimalPage></CreateAnimalPage>}></Route>
                    <Route path='detail'>
                        <Route path=':id' element={<DetailAnimalPage></DetailAnimalPage>}></Route>
                    </Route>
                    <Route path='edit'>
                        <Route path=':id' element={<EditItemPage></EditItemPage>}></Route>
                    </Route>
                </Route>
                <Route path='foods' element={<FoodPage></FoodPage>}>
                    <Route path='' element={<ShowFoodPage></ShowFoodPage>}></Route>
                    <Route path='create' element={<CreateBrandPage></CreateBrandPage>}></Route>
                    <Route path='detail' element={<CreateBrandPage></CreateBrandPage>}></Route>
                    <Route path='edit'>
                        <Route path=':id' element={<EditBrandPage></EditBrandPage>}></Route>
                    </Route>
                </Route>
                <Route path='login' element={<LoginPage></LoginPage>}></Route>
            </Routes>
        </>
    )
}

export default MainContent