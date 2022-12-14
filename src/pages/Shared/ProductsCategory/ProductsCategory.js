
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProductsCategory = () => {
    const [categoty, setCategory] = useState([])


    useEffect(() => {
        axios.get(' https://assignment-12-delta.vercel.app/category')
            .then(res => {
                const data = res.data

                const withoutDuplicates = [...new Set(data)];

                setCategory(withoutDuplicates)

            })
    }, [])

    return (

        <div className='text-center'>
            <div className="inline-flex rounded-md shadow-sm text-center" role="group">

                <button className='bg-primary px-3 py-1 text-[#fff] m-2 shadow-lg'>All</button>

                {
                    categoty.map((item, index) => <button
                        key={index}
                        className='bg-primary px-3 py-1 text-[#fff] m-2 shadow-lg'>{item.toUpperCase()}</button>

                    )
                }






            </div>
        </div>

    );
};

export default ProductsCategory;