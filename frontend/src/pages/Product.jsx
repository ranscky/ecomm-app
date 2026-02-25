import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const { productID } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [ productData, setProductData ] = useState(false);
  const [ image, setImage ] = useState('');
  const [ size, setSize ] = useState(''); 

  useEffect(()=> {
    const fetchProductData = () => {
      products.map((item) => {
        if (item._id === productID) {
          setProductData(item)
          setImage(item.image[0])
          return null;
        }
      })
    }
    fetchProductData();
  },[productID, products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Details */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[19.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img src={item} key={index} onClick={()=>setImage(item)} className='w-[24%] sm:w-full sm:mb-3 shrink-0 cursor-pointer' alt="" />
              ))
            }
          </div>

          <div className='w-full sm:w-[80%]'>
            <img src={image} alt="" className='w-full h-auto'/>
          </div>
        </div>

        <div className='flex-1'>
            <h1 className='font-medium text-3xl mt-2'>{productData.name}</h1>
            <div className='flex items-center gap-1 mt-4'>
              <img src={assets.star_icon} alt="" className='w-3 5'/>
              <img src={assets.star_icon} alt="" className='w-3 5'/>
              <img src={assets.star_icon} alt="" className='w-3 5'/>
              <img src={assets.star_icon} alt="" className='w-3 5'/>
              <img src={assets.star_dull_icon} alt="" className='w-3 5'/>
              <p className='pl-2'>(122)</p>
            </div>
            <p className='mt-5 text-3xl font-medium'>{currency} {productData.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
            <div className='flex flex-col gap-4 my-8'>
              <p>Select Size</p>
              <div className='flex gap-2'>
                {
                  productData.sizes.map((item, index)=>(
                    <button onClick={()=>setSize(item)} className={`py-2 px-4 bg-gray-100 ${item === size ? ' border border-black-500' : ''}`} key={index}>{item}</button>
                  ))
                }
              </div>
            </div>
            <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>Add to Cart</button>
            <hr className='mt-8 sm:w-4/5'/>
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>100% Original Product</p>
              <p>Cash on Delivery</p>
              <p>7 days Return and Exchange Policy</p>
            </div>
        </div>
      </div>

      {/* Decription and Review Section */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border border-gray-300 px-5 py-3 text-sm'>Description</b>
          <p className='border border-gray-300 px-5 py-3 text-sm'>Reviews (121)</p>
        </div>
        <div className='flex flex-col gap-4 border border-gray-300 px-6 py-6 text-sm text-gray-500'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam asperiores ab neque harum totam unde!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis officiis quis molestiae sed ea molestias! Harum, itaque repellat. Praesentium commodi, debitis eius totam obcaecati vitae aspernatur eligendi repellendus? Ex, iste.</p>
        </div>
      </div>

      {/* Display related products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product