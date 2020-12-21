import '@testing-library/jest-dom'
import React  from 'react'
import { shallow } from 'enzyme'
import { GifExpertApp } from '../GifExpertApp'


 describe('Prueba en el componente principal GifExpertAPP', () => {
        test('Debe cargarse correctamente el gifExpertApp', () => {
            
            const wrapper = shallow(<GifExpertApp />)

            expect(wrapper).toMatchSnapshot();
        });

        test('debe de mostrar una lista de categorias', () => { 

            const categories = ['one punch', 'dragon ball'];

            const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>)

            expect(wrapper).toMatchSnapshot();

            expect(wrapper.find('GiftGrid').length).toBe(categories.length)
            
        })
        
        
 })
 
