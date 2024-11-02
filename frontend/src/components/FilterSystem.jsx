import React from 'react'

const FilterSystem = ({clearfilter , setFilter , filter , filters }) => {
  return (
    <section className='flex flex-col gap-3 pl-2'>
        <h1 className='text-3xl font-semibold '>Filters</h1>
        <div>
            <h1 className='text-xl '>categories</h1>
        {
        filters.categories.map((item , index) =>(
            <label key={index} htmlFor={item} className='flex items-center gap-2'> 
             <input type="radio" name="category"  checked={filter.category === item }  id={item} onChange={(e)=> e.target.checked ?  setFilter(c => ({...c , category : item})) : '' } />   
            <p>{item}</p>
            </label>
        ))  
           }
        </div>
        <div>
            <h1 className=' text-2xl '>Colors</h1>
        {
        filters.colors.map((item , index) =>(
            <label key={index}  htmlFor={item} className='flex items-center gap-2'> 
             <input type="radio" name="color" id="" checked={filter.color === item }  onChange={(e)=> e.target.checked  ? setFilter(c => ({...c , color : item})) : ''} />   
            <p>{item}</p>
            </label>
        ))  
           }
        </div>
        <div>
            <h1 className=' text-2xl '>Pricing</h1>
        {
        filters.priceRange.map((item , index) =>(
            <label key={index} htmlFor={item} className='flex items-center gap-2'> 
             <input type="radio" name="pricing" id="" checked={filter.priceRange === item }  onChange={(e)=> e.target.checked  ? setFilter(c => ({...c , priceRange : item})) : ''} />   
            <p>{item.label}</p>
            </label>
        ))  
           }
        </div>
        <div className='flex flex-col items-start gap-2'>
        {/* <button className='w-28 bg-black text-white px-2 py-2 rounded'>filter</button> */}
        <button className='w-28 bg-red-400 text-white px-2 py-2 rounded first-letter:uppercase' onClick={clearfilter}>clear filter</button>
        </div>
    </section>
  )
}

export default FilterSystem
