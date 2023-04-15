import React, { useState } from 'react'

interface Props {
  closeModal: () => void;
 
}


const AddIngredient: React.FC<Props> = ({ closeModal }) =>  {
  const [ingredient, setIngredient] = useState('');
  const [location, setLocation] = useState('');

  // const handleSave = () => {
  //   onSave({ name, email });
  // };
  return (
    <div className='absolute backdrop-blur-3xl bg-black/20 drop-shadow-xl flex justify-center items-center w-[100vw] h-[70vh]'>

      <div className="bg-blue-600 shadow-lg rounded-lg px-4 py-6  w-[70%]  ">
        <div className="flex justify-end mb-4 ">
          <button className="text-gray-500 hover:text-red-700 -mr-16" onClick={closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <h4 className='text-gray-700 font-medium'>Ingredient Name</h4>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            The Ingredient you know in the food
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="ingredient"
            type="text"
            placeholder="Add an ingredient"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Location
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            type="text"
            placeholder="From where you adding the ingredient"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"

          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}





export default AddIngredient