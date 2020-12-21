import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import React from 'react'
import {GifGridItem} from '../components/GifGridItem'

describe('Pruebas en grifGridItem', () => {
    
    const id = '1asdf';
    const title = 'El mejor';
    const url = "asfraraasdaf";
    const wrapper = shallow( 
    <GifGridItem 
        id={id} 
        title={title} 
        url={url}
        />)
    test('Debe mostrar <gifgriditem /> correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de tener un parrafo con el title ', () => {
        
          const p = wrapper.find('p')
          expect(p.text().trim()).toBe(title)
    });
    
    test('Debe de tener la imagen igual al url de los props  ', () => {
        
        const img = wrapper.find('img')
       expect(img.props().src).toBe(url)
        
    });

    test('debe tener animate__fadein', () => {

        const div = wrapper.find('div');

        console.log(div.hasClass('animate__rubberBand'))
        expect(div.hasClass('animate__rubberBand')).toBe(true)
        
    })
    
    
    
});

