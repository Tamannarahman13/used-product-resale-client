import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../../Contexts/AuthProvider';

const MyOrder = () => {
    const { user } = useContext(AuthContext)
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(` https://assignment-12-delta.vercel.app/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [user?.email])

    console.log(data)
    return (
        <div className='container mx-auto my-20 shadow-xl'>
            <h2 className='text-center font-semibold text-3xl'>your Total orders :{data.length}</h2>

            {/* data table */}


            <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-20" >
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                                Product name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                TRX ID
                            </th>

                            <th scope="col" className="py-3 px-6">
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(orderProd =>
                                <tr
                                    key={orderProd._id}

                                    className="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                        {orderProd.productName}
                                    </th>

                                    {orderProd.transactionId}
                                    <td className="py-4 px-6">
                                        $ {orderProd.price}
                                    </td>
                                </tr>

                            )
                        }





                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default MyOrder;