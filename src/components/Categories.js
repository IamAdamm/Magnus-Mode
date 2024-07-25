import React from 'react'
import '../styles/Categories.css'
import tshirt from '../assets/Tshirt.png'
import useIntersectionObserver from '../helpers/IntersectionObserver'

function Categories() {

    useIntersectionObserver('.categoriesTitle', 'categoriesTitlePhaseInFromRight');
    useIntersectionObserver('.categoriesTitleh5', 'categoriesTitlePhaseInFromRighth5');
    useIntersectionObserver('.categoriesProducts', 'categoriesProductsScaleOnSight');

  return (
    <div className='categories'>
        <div className='categoriesTitle'>
            <h5 className='categoriesTitleh5'>OUR PRODUCTS</h5>
            <h2>Each Product made with passion</h2>
        </div> 
        <div className='categoriesProducts'>
            <img src={tshirt} className='tshirtImg'/>
            <img src={tshirt} className='hoodieImg'/>
            <img src={tshirt} className='shoesImg'/>
            <img src={tshirt} className='accessoriesImg'/>
        </div>
    </div>
  )
}

export default Categories