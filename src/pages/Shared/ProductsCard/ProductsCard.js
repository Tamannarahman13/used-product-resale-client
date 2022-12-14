import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { AuthContext } from '../../../Contexts/AuthProvider';



const ProductsCard = ({ product }) => {
    const { user } = useContext(AuthContext)



    // const {user}= useContext(AuthContext);
    const [fill, setFill] = useState(false)
    const { productInfo, _id } = product
    const { title, imageUrl, price, ratings } = productInfo
    const { resalePrice } = price
    const { count, stars } = ratings

    const handleWishList = (product) => {

        const dbProd = { ...product }
        dbProd.email = user?.email
        dbProd.color = "red"
        delete dbProd._id

        fetch(` https://assignment-12-delta.vercel.app/wishlist`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dbProd)

        })
            .then(res => res.json())
            .then(result => {
                setFill(true)
                toast.success('added successfully')
            })
            .catch(err => toast.error(err.message))


    }

    return (

        <div className="w-full mx-auto max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Link href="#">

                <img className="rounded-t-lg" src={imageUrl} alt="productimage" />
            </Link>
            <div className="px-5 pb-5">
                <Link href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </Link>
                <div className="flex items-center mt-2.5 mb-5">
                    <StarRatings
                        rating={stars}
                        starDimension="20px"
                        starSpacing="2px"
                    />
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">({count})</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${resalePrice}</span>
                    <div className='flex items-center'>
                        <button onClick={() => handleWishList(product)} className={'w-8 text-center mr-2 '}>

                            <svg xmlns="http://www.w3.org/2000/svg" fill={product.color ? product.color : "none"} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>




                        </button>
                        <Link to={`/shop/${_id}`} className="text-[#fff] bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">see Details</Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProductsCard;