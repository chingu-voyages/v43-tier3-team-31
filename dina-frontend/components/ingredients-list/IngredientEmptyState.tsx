import React, { useState } from 'react'
import AddIngredient from './AddIngredientModal';

const IngredientEmptyState = () => {

    const [openAddIngredientModal, setOpenAddIngredientModal] = useState(false);


    const openModal = () => {
        setOpenAddIngredientModal(true);
    }
    const closeModal = () => {
        setOpenAddIngredientModal(false);
    }
    return (
        <div className='w-full h-screen flex justify-center items-start'>
            <div className='w-1/2 text-center h-2/5  '>
                <h4 className='font-medium my-10'>Welcome, Anthony</h4>
                <p className='my-4'>Edit your ingredient to manage tags of the food posts</p>
                <button className="bg-green-600 text-white py-2 px-3 rounded-lg" onClick={openModal}>+  Add Ingredeint</button>
            </div>
            {openAddIngredientModal ? <AddIngredient closeModal={closeModal} /> : ""}
        </div>
    )
}

export default IngredientEmptyState

interface Props {
    closeModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
  }