import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

export const GifExpertApp = () => {
     
   
    const [categories, setCategories] = useState(['One punch']);
   
    
    return (
        <>
              
               <h2>GifExpertApp</h2>
               <AddCategory  setCategories={setCategories} categories={categories}/>
               <hr/>
               
               <ol>
                  {
                          categories.map( category => (
                           <GiftGrid 
                           key={category}
                           category = {category} />
                      ))
                  }
               </ol>
        </>
    )
}
