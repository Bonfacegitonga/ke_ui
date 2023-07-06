"use client"
import { courses } from './utils/data'
import Example from './components/Trial'
import { MdAdd } from 'react-icons/md'
import React, { useState } from 'react';
import { ItemForm } from './components/form';

export default function Home() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [items, setItems] = useState(courses); 


  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleAddItemClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (formData) => {
    const finalItems = {id: 1, course: "django", module: formData.name, descriptio:formData.description}
    setItems([...items, finalItems]);
    setShowForm(false);
  };

  const itemsList = items.map((module) => <Example name={module.module} description={module.descriptio}/>);


  return (
    <main >
      <div class="flex flex-row bg-white">
        <div class="relative column-1 w-3/12 h-screen bg-slate-900 justify-center">
          <div class="flex flex-col items-end py-4 bg-green-600 h-13 mb-2">
            
              <button type="button" onClick={handleAddItemClick} className="text-white mr-2 bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-1 py-2.5 text-center inline-flex dark:focus:ring-[#3b5998]/55 ">
                <MdAdd className="text-xl" />
                Add
              </button>
          </div>
          <ul role="list" className="divide-y divide-gray-200">{itemsList}</ul>
          
        </div>
        <div className=''>

        {selectedItem && (
          <div className='bg-white'> 
          </div>
        )}
        {showForm && <ItemForm onSubmit={handleFormSubmit} />}
        </div>
        
      </div>

    </main>
  )
}
