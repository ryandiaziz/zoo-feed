import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
    HomePage,
    AnimalPage,
    ShowAnimalPage,
    CreateAnimalPage,
    SignInPage,
    SignUpPage,
    EditItemPage,
    DetailAnimalPage,
    FoodPage,
    CreateBrandPage,
    ShowFoodPage,
    EditBrandPage,
    DetailFoodPage,
    ProfilePage
} from '../pages'

const MainContent = (props) => {
    const { loginStatus, loginCbHandler, userData } = props;
    return (
        <>
            <Routes>
                <Route path='' element={
                    <HomePage></HomePage>
                }></Route>
                <Route path='animals' element={<AnimalPage></AnimalPage>}>
                    <Route path='' element={<ShowAnimalPage loginStatus={loginStatus} userData={userData} />}></Route>
                    <Route path='create' element={<CreateAnimalPage></CreateAnimalPage>}></Route>
                    <Route path='detail'>
                        <Route path=':id' element={<DetailAnimalPage></DetailAnimalPage>}></Route>
                    </Route>
                    <Route path='edit'>
                        <Route path=':id' element={<EditItemPage></EditItemPage>}></Route>
                    </Route>
                </Route>
                <Route path='foods' element={<FoodPage></FoodPage>}>
                    <Route path='' element={<ShowFoodPage userData={userData} />}></Route>
                    <Route path='create' element={<CreateBrandPage></CreateBrandPage>}></Route>
                    <Route path='detail'>
                        <Route path=':id' element={<DetailFoodPage></DetailFoodPage>}></Route>
                    </Route>
                    <Route path='edit'>
                        <Route path=':id' element={<EditBrandPage></EditBrandPage>}></Route>
                    </Route>
                </Route>
                <Route path='signin' element={<SignInPage loginCbHandler={loginCbHandler} />}></Route>
                <Route path='signup'>
                    <Route path=':roleId' element={<SignUpPage loginCbHandler={loginCbHandler} />}></Route>
                </Route>
                <Route path='profile' element={<ProfilePage userData={userData} />}></Route>
            </Routes>
        </>
    )
}

export default MainContent