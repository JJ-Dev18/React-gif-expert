import '@testing-library/jest-dom'
import React from 'react'
import { shallow } from 'enzyme'
import { GiftGrid } from '../components/GiftGrid'
import { useFetchGifs } from '../hooks/useFetchGifs'
jest.mock('../hooks/useFetchGifs');


describe('Prueba de el GifGrid', () => {
    
    test('Se debe cargar correctamente el GifGrid', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading : true 
        });
        const wrapper = shallow(<GiftGrid category ='one punch'/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan imagenes useFechGifs', () => {
        
        const gifs = [{
            id:'ABC',
            url: 'http:s//localhost/cualquier/cosa.jpg',
            title :'Cualquier cosa'
        }]
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading : false 
        });
         
        const wrapper = shallow(<GiftGrid category ='one punch'/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
    });

    
    
    
})
