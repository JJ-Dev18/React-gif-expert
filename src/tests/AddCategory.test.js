import React from 'react';
import '@testing-library/jest-dom'; // para sugerencias
import { shallow } from 'enzyme';
import { AddCategory } from '../components/AddCategory';
 
  
    describe('Prueba en el Componente en addCatagory', () => {
 
//const setCategories = () => {}; la cambiamos por jest que es una funcion
       const setCategories = jest.fn();
       let wrapper = 
       shallow(<AddCategory setCategories={setCategories}/>); 
 
        beforeEach(() => {
          jest.clearAllMocks();
           wrapper = shallow(<AddCategory setCategories={setCategories}/>); 
      })
 
            test('debe de mostrarse correctamente ', () => {
              expect  (wrapper).toMatchSnapshot();
     })
 
 
        test('debe de cambiar la caja de texto', () => {
              const input = wrapper.find('input');
               const value = 'Hola Mundo';
               input.simulate('change',{target: {value}});
               expect (wrapper.find('p').text().trim()).toBe(value);
       })
 
         test('no debe de postear la informacion con submit', () => {
    
             wrapper.find('form').simulate('submit', { preventDefault(){} });
 
               expect( setCategories).not.toHaveBeenCalled();
 
         });

         test('Debe de llamar el setcategories y limpiar la caja de texto ', () => {
             const value = 'hola mundo';
             
             
              wrapper.find('input').simulate('change',{ target : {value}});
              wrapper.find('form').simulate('submit', { preventDefault(){ } });
              expect( setCategories).toHaveBeenCalled();
              expect(wrapper.find('input').prop('value')).toBe('')
             
         })
         
 
 
 
 
 
})