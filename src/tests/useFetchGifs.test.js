import '@testing-library/jest-dom'
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';


describe('Pruebas en el custom HOOK useFetchGifs', () => {
    
    test('debe de retornar el estado inicial  ', async () => {

       const {result, waitForNextUpdate} =  renderHook(() => useFetchGifs('one punch')) 
       const { data:images , loading} = result.current ;
        // console.log(images ,loading )
        await waitForNextUpdate()
        expect(images).toEqual([])
        expect(loading).toBe(true)
    });

    test('debe de retornar un arreglo de imgs y el loading en false', async () => {
        
        const {result, waitForNextUpdate} =  renderHook(() => useFetchGifs('one punch')) 
        await waitForNextUpdate()
        const { data:images , loading} = result.current ;
        // console.log(images ,loading )
        expect(images.length).toBe(10)
        expect(loading).toBe(false)

    })
    
    
})
