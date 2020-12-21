import '@testing-library/jest-dom'
import { getGifs } from '../Helpers/getGifs'

describe('Pruebas con getGifs fetch', () => {
    
    test('debe traer 10 elementos ', async () => {
        
        const gif = await getGifs('one punch ');
        expect(gif.length).toBe(10)
    });

    test('debe traer 10 elementos ', async () => {
        
        const gif = await getGifs('');
        expect(gif.length).toBe(0)
    })
    
    
})
