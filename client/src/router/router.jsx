import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import {
    HomePage,
    AnimalPage,
    ShowAnimalPage,
    DetailAnimalPage,
    FoodPage,
    ShowFoodPage,
    DetailFoodPage,
    ProfilePage,
    ErrorPage,
} from "../pages/index"
import RootLayout from "../components/layouts/RootLayout"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route path="*" element={<ErrorPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="animals" element={<AnimalPage />}>
                <Route index element={<ShowAnimalPage />} />
                <Route path=":id" element={<DetailAnimalPage />} />
            </Route>
            <Route path="foods" element={<FoodPage />}>
                <Route index element={<ShowFoodPage />} />
                <Route path=":id" element={<DetailFoodPage />} />
            </Route>
            <Route index element={<HomePage />} />
        </Route>
    )
)

export default router