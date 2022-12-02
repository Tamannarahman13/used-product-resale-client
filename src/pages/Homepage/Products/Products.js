import React from 'react';
import Product from './Product';

const Products = () => {

    const productData = [
        {
            "id": 1,
            "img": "https://1000fix.com/wp-content/uploads/2022/07/Samsung-Galaxy-A53-5G-600x508.webp",
            "name": "Samsung Galaxy A53 5G",
            "price": 15000
        },
        {
            "id": 2,
            "img": "https://mamurdukan.com/wp-content/uploads/2021/06/Oppo-F17-pro-Metallic-White-600x600.jpg",
            "name": "Oppo F17",
            "price": 18000
        },
        {
            "id": 3,
            "img": "https://www.mobiledokan.com/wp-content/uploads/2022/06/Realme-9-Pro-plus.jpg",
            "name": "Realme 9 pro",
            "price": 15000
        }
    ]

    return (
        <div>
            <div>
                <h1 className='text-center mb-6 text-2xl'>Products</h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 '>

                {
                    productData.map(product => <Product
                        key={product.id}
                        product={product}

                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;