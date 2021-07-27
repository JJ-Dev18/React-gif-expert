import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';
import Typewriter from "typewriter-effect";

export const GifExpertApp = ({defaultCategories = []}) => {
     
   
    const [categories, setCategories] = useState(defaultCategories);
   
    
    return (
      <div className="container">
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter.typeString("Gif Expert App ").start();
          }}
        />

        <AddCategory setCategories={setCategories} categories={categories} />
        <hr className="animate__animated animate__bounceInDown" />

        <ol>
          {categories.map((category) => (
            <GiftGrid key={category} category={category} />
          ))}
        </ol>
      </div>
    );
}
