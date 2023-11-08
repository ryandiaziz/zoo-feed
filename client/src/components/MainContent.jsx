import { Routes, Route } from 'react-router-dom';
import {
    HomePage,
    AnimalPage,
    ShowAnimalPage,
    CreateAnimalPage,
    EditAnimalPage,
    DetailAnimalPage,
    FoodPage,
    CreateFoodPage,
    ShowFoodPage,
    EditBrandPage,
    DetailFoodPage,
    ProfilePage,
} from '../pages'

const MainContent = () => {
    return (
        <Routes>
            <Route path='' element={<HomePage />} />
            <Route path='animals' element={<AnimalPage />}>
                <Route path='' element={<ShowAnimalPage />} />
                <Route path='create' element={<CreateAnimalPage />} />
                <Route path='detail'>
                    <Route path=':id' element={<DetailAnimalPage />} />
                </Route>
                <Route path='edit'>
                    <Route path=':id' element={<EditAnimalPage />} />
                </Route>
            </Route>
            <Route path='foods' element={<FoodPage />}>
                <Route path='' element={<ShowFoodPage />} />
                <Route path='create' element={<CreateFoodPage />} />
                <Route path='detail'>
                    <Route path=':id' element={<DetailFoodPage />} />
                </Route>
                <Route path='edit'>
                    <Route path=':id' element={<EditBrandPage />} />
                </Route>
            </Route>
            <Route path='profile' element={<ProfilePage />} />
        </Routes>
    )
}

export default MainContent