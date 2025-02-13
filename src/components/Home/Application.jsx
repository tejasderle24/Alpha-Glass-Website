import React from 'react';
import D1 from '../../assets/D1.png'
import D2 from '../../assets/D2.png'
import D3 from '../../assets/D3.png'
import D4 from '../../assets/D4.png'
import D5 from '../../assets/D5.png'
import D6 from '../../assets/D6.png'

const Application = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 ">

                <div className="text-center">
                    <div className="p-4 bg-gray-100 ">
                        <img
                            src={D1}
                            alt="Exterior Glazing"
                            className="w-16 h-16 mx-auto"
                        />
                        <h3 className="mt-2 text-sm font-semibold text-gray-700">Exterior Glazing</h3>
                    </div>
                </div>
                <div className="text-center border-l border-b border-r border-gray-700">
                    <div className="p-4 bg-gray-100 ">
                        <img
                            src={D2}
                            alt="Solar Panel"
                            className="w-16 h-16 mx-auto"
                        />
                        <h3 className="mt-2 text-sm font-semibold text-gray-700">Solar Panel</h3>
                    </div>
                </div>
                <div className="text-center">
                    <div className="p-4 bg-gray-100 ">
                        <img
                            src={D3}
                            alt="Industrial"
                            className="w-16 h-16 mx-auto"
                        />
                        <h3 className="mt-2 text-sm font-semibold text-gray-700">Industrial</h3>
                    </div>
                </div>



            <div className="text-center">
                <div className="p-4 bg-gray-100 border-t border-r border-gray-700 ">
                    <img
                        src={D4}
                        alt="Furniture"
                        className="w-16 h-16 mx-auto"
                    />
                    <h3 className="mt-2 text-sm font-semibold text-gray-700">Furniture</h3>
                </div>
            </div>
            <div className="text-center">
                <div className="p-4 bg-gray-100 ">
                    <img
                        src={D5}
                        alt="Shower Panels"
                        className="w-16 h-16 mx-auto"
                    />
                    <h3 className="mt-2 text-sm font-semibold text-gray-700">Shower Panels</h3>
                </div>
            </div>
            <div className="text-center">
                <div className="p-4 bg-gray-100 border-t border-l border-gray-700">
                    <img
                        src={D6}
                        alt="Interiors"
                        className="w-16 h-16 mx-auto"
                    />
                    <h3 className="mt-2 text-sm font-semibold text-gray-700">Interiors</h3>
                </div>
            </div>
        </div>

    );
};

export default Application;