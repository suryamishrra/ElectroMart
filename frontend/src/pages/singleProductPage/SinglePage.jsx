import React, { useState } from 'react'
import { Link } from "react-router-dom"



import Havitfront from "../../assets/Havitfront.png"
import Havit1 from "../../assets/Havit1.png"
import Havit2 from "../../assets/Havit2.png"
import Havit3 from "../../assets/Havit3.png"
import Havit4 from "../../assets/Havit4.png"

const SinglePage = () => {
    const [count, setCount] = useState(1);
    const [selectedColor, setSelectedColor] = useState("");

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        if (count > 1) {
        setCount(count - 1);
        }
    }

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    return (
        <div className='w-[80%] mx-auto mt-20 mb-20 flex  gap-10  '>
            <div className='w-[65%] flex gap-5' >
                <div className='w-[25%] flex flex-col gap-5 ' >
                    <img className='bg-gray-100 p-4' src={Havit1} alt="" />
                    <img className='bg-gray-100 p-4' src={Havit2} alt="" />
                    <img className='bg-gray-100 p-4' src={Havit3} alt="" />
                    <img className='bg-gray-100 p-4' src={Havit4} alt="" />
                </div>
                <div className='h-[100%] w-[100%] flex items-center justify-center bg-gray-100'>
                    <img src={Havitfront} alt="" />
                </div>
            </div>
            <div className='w-[35%]  '>
                <h1 className='font-semibold text-xl'>Havic HV G-92 Gamepad</h1>
                <h2 className='text-xl mb-5 mt-5'>$192.00</h2>
                <p className='text-sm mb-5'>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                <hr />
                <div className="mt-5 flex items-center gap-6">
                    <label>Colours:</label>
                    <div className="flex items-center gap-3">
                        {/* Blue Color */}
                        <label className="flex items-center">
                            <input
                                className="hidden"
                                type="radio"
                                value="blue"
                                name="color"
                                onChange={() => handleColorChange("blue")}
                                checked={selectedColor === "blue"}
                            />
                            <div
                                className={`h-6 w-6 rounded-full border-2 cursor-pointer ${selectedColor === "blue"
                                        ? "border-black"
                                        : "border-transparent"
                                    } bg-blue-400`}
                                onClick={() => handleColorChange("blue")}
                            ></div>
                        </label>
                        {/* Red Color */}
                        <label className="flex items-center">
                            <input
                                className="hidden"
                                type="radio"
                                value="red"
                                name="color"
                                onChange={() => handleColorChange("red")}
                                checked={selectedColor === "red"}
                            />
                            <div
                                className={`h-6 w-6 rounded-full border-2 cursor-pointer ${selectedColor === "red"
                                        ? "border-black"
                                        : "border-transparent"
                                    } bg-red-400`}
                                onClick={() => handleColorChange("red")}
                            ></div>
                        </label>
                    </div>
                </div>
                <div className='flex items-center justify-start mt-5 gap-5'>
                    <h1>Size :</h1>
                    <button className='h-10 w-10 border rounded hover:border-black flex items-center justify-center hover:invert hover:bg-cyan-400'>
                        <p>XS</p>
                    </button>
                    <button className='h-10 w-10 border rounded hover:border-black flex items-center justify-center hover:invert hover:bg-cyan-400'>
                        <p>S</p>
                    </button>
                    <button className='h-10 w-10 border rounded hover:border-black flex items-center justify-center hover:invert hover:bg-cyan-400'>
                        <p>M</p>
                    </button>
                    <button className='h-10 w-10 border rounded hover:border-black flex items-center justify-center hover:invert hover:bg-cyan-400'>
                        <p>L</p>
                    </button>
                    <button className='h-10 w-10 border rounded hover:border-black flex items-center justify-center hover:invert hover:bg-cyan-400'>
                        <p>XL</p>
                    </button>
                </div>
                <div className='flex items-center justify-between mt-5'>
                    <div className='flex items-center  rounded-sm '>
                        <button className='h-10 w-10 border rounded-l hover:border-black  hover:bg-red-500' onClick={decrement} >-</button>
                        <div className=' w-20 h-10 border-t border-b flex items-center justify-center'>{count}</div>
                        <button className='h-10 w-10 border rounded-r hover:border-black hover:bg-red-500'  onClick={increment} >+</button>
                    </div>
                    <button className=" bg-red-500 rounded hover:bg-red-600 border text-white py-2 px-12" >Buy Now</button>
                    <button className='h-10 w-10 border rounded hover:border-black flex items-center justify-center hover:invert hover:bg-cyan-400'>
                        <img src="/image/Wishlist.png" alt="" />
                    </button>
                </div>

                <div>
                    <div>
                        <div className='border  flex rounded-t  py-4 mt-8'>
                            <div>
                            <img className='px-4' src="/image/icondelivery.png" alt="" />
                            </div>
                            <div>
                            <h1>Free Delivery</h1>
                            <p className='text-sm underline'>Enter your postal code for Delivery Availablity</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='border flex rounded-b py-4  '>
                            <div>
                            <img className='px-4' src="/image/iconreturn1.png"   alt="" />
                            </div>
                            <div>
                            <h1>Return Delivery</h1>
                            <p className='text-sm'>Free 30 Days Delivery Returns. <span className='underline '>Details</span></p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
            
        </div>
    )
}

export default SinglePage