import React  from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

// import { getGifs } from '../Helpers/getGifs';


export const GiftGrid = ({category}) => {

    // const [images, setImages] = useState([])
    const {data: images ,loading} = useFetchGifs(category);
  
    // useEffect(() => {
    //    getGifs(category).then( imgs => setImages(imgs))
    // },[category])
   

    return (
       <>
         <h3 className="animate__animated animate__rubberBand">{category}</h3>
         {loading && <p className="animate__animated animate__flash"> Loading ...</p>}

        
         <div className="card-grid">  
               {
                  images.map(img =>(
                    <GifGridItem 
                    key={img.id}
                    {...img}/>
                  )) 
               }     
        </div>
       </>
        
    )
}

GiftGrid.propTypes = {

   category : PropTypes.string.isRequired
}