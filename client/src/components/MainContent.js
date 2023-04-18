import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
    HomePage,
    AnimalPage,
    ShowAnimalPage,
    CreateAnimalPage,
    SignInPage,
    SignUpPage,
    EditAnimalPage,
    DetailAnimalPage,
    FoodPage,
    CreateFoodPage,
    ShowFoodPage,
    EditBrandPage,
    DetailFoodPage,
    ProfilePage,
    ClassPage,
    ClassDetail,
    HabitatPage,
    HabitatDetail
} from '../pages'

const MainContent = (props) => {
    const {
        loginStatus,
        loginCbHandler,
        userData,
        userCheck,
        setUserCheck,
    } = props;
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
                        <Route path=':id' element={<DetailAnimalPage loginStatus={loginStatus} userData={userData}></DetailAnimalPage>}></Route>
                    </Route>
                    <Route path='edit'>
                        <Route path=':id' element={<EditAnimalPage></EditAnimalPage>}></Route>
                    </Route>
                </Route>
                <Route path='foods' element={<FoodPage></FoodPage>}>
                    <Route path='' element={<ShowFoodPage loginStatus={loginStatus} userData={userData} />}></Route>
                    <Route path='create' element={<CreateFoodPage></CreateFoodPage>}></Route>
                    <Route path='detail'>
                        <Route path=':id' element={<DetailFoodPage loginStatus={loginStatus} userData={userData}></DetailFoodPage>}></Route>
                    </Route>
                    <Route path='edit'>
                        <Route path=':id' element={<EditBrandPage></EditBrandPage>}></Route>
                    </Route>
                </Route>

                <Route path='classType' >
                    <Route path='' ></Route>
                    <Route path='detail'>
                        <Route path=':id' element={<ClassDetail loginStatus={loginStatus} userData={userData}></ClassDetail>}></Route>
                    </Route>
                </Route>

                <Route path='habitats' element={<HabitatPage></HabitatPage>}>
                    <Route path='' ></Route>
                    <Route path='detail'>
                        <Route path=':id' element={<HabitatDetail loginStatus={loginStatus} userData={userData}></HabitatDetail>}></Route>
                    </Route>
                </Route>

                <Route path='signin' element={<SignInPage loginCbHandler={loginCbHandler} />}></Route>
                <Route path='signup'>
                    <Route path=':roleId' element={<SignUpPage loginCbHandler={loginCbHandler} />}></Route>
                </Route>
                <Route path='profile' element={<ProfilePage userData={userData} setUserCheck={setUserCheck} userCheck={userCheck} />}></Route>
            </Routes>
        </>
    )
}

export default MainContent