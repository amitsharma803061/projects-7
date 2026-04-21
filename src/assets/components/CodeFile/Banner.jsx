import React from 'react';


const Banner = ({totalTicket, taskItems}) => {
    return (
        <div className="w-full h-150 md:h-120  bg-gray-200 py-5">
            <div className="w-11/12 mx-auto mt-20 flex justify-between items-center flex-col md:flex-row gap-5">
                <div className="bg-gradient-to-r from-[rgb(120,44,243)] to-[rgb(180,130,255)] relative  w-115 h-60 md:w-210 md:h-80 rounded-xl text-white text-center pt-25">
                    <div className="flex justify-between items-center z-10">
                        <img className="absolute left-0 top-0 h-full object-cover" src="/public/vector1.png" alt="" />
                        <img className="absolute right-0 top-0 h-full object-cover scale-x-[-1]" src="/public/vector1.png" alt="" />
                    </div>
                    <h2 className="text-4xl font-medium ">In-Progress</h2>
                    <p className="text-6xl font-bold">{totalTicket.length}</p>
                </div>

                <div className="bg-gradient-to-r from-[rgb(25,194,115)] to-[rgb(21,99,64)] relative  w-115 h-60 md:w-210 md:h-80 rounded-xl text-white text-center pt-25">
                    <div className="flex justify-between items-center z-10">
                        <img className="absolute left-0 top-0 h-full object-cover" src="/public/vector1.png" alt="" />
                        <img className="absolute right-0 top-0 h-full object-cover scale-x-[-1]" src="/public/vector1.png" alt="" />
                    </div>
                    <h2 className="text-4xl font-medium">Resolved</h2>
                    <p className="text-6xl font-bold">{taskItems.length}</p>
                </div>
            </div>

        </div>
    );
};

export default Banner;