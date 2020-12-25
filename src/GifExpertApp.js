import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

export const GifExpertApp = ({defaultCategories = []}) => {
     
   
    const [categories, setCategories] = useState(defaultCategories);
   
    
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
