import React from 'react';

const WorkProcess = ({img,title}) => {
    return (


        <div className="flex justify-center items-center">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
                <div className="w-32 h-32 border border-gray-600 rounded-full flex items-center justify-center">
                    <img src={img} alt="Enter Details" className="w-16 h-16 p-1.5" />
                </div>
                <p className="mt-4 p-1 text-lg font-medium text-gray-700">{title}</p>
            </div>
        </div>
    );
};

export default WorkProcess;