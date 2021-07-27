import React, { useState } from 'react'
import Proptypes from 'prop-types'


export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');
   

      const handleInputChange = (e) => {
         console.log(e.target.value);
         setInputValue(e.target.value);

         console.log('HandleInputChange llamado')
         
     }

     const handleSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories( cats => [ inputValue, ...cats, ] );
            setInputValue('');
        }
     }
    return (
      <form onSubmit={handleSubmit}>
        <h2 className="animate__animated animate__bounceInDown">
          Add Category
        </h2>

        <input
          className="animate__animated animate__bounceInDown"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Min 3 words"
        ></input>
      </form>
    );

   
}

AddCategory.propTypes = {

    setCategories : Proptypes.func.isRequired

}



