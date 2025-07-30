import React, { useState } from 'react';
import { Input, Button, Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Text } = Typography;
const ResetPassVerify = () => {
    const [codes, setCodes] = useState(Array(6).fill(''));

    const handleChange = (value, index) => {
        const updated = [...codes];
        updated[index] = value.slice(-1);
        setCodes(updated);
    };

    // const handleSubmit = () => {
    //     const finalCode = codes.join('');
    //     console.log(finalCode)
    // };

    return (
        <div className="lg:w-[480px] flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg  ">
                <h2 className="text-center text-xl font-semibold">Enter Recovery Number</h2>
                <p className="text-center text-sm text-gray-600 mt-1 mb-4">
                    A six(6) digit recovery number was sent to <br className=' hidden sm:inline' /> your registered phone number please input
                </p>

                <div className="flex justify-center gap-2 mt-20">
                    {codes.map((code, idx) => (
                        <Input
                            key={idx}
                            maxLength={1}
                            value={code}
                            onChange={(e) => handleChange(e.target.value, idx)}
                            className="!w-10 !h-10 text-center !p-0 !text-lg"
                        />
                    ))}
                </div>

                <div className=" text-sm text-gray-500 mb-4 font-semibold">

                    <div type="secondary">
                        Didn't receive the code? <a href="#" className="text-green-600">Resend</a>
                    </div>
                </div>

                <Link to='/login/resetNewPassword'>
                    <button type="primary" block className="bg-[#2C42A7] text-white font-semibold p-1 mt-12 rounded-xl w-full">
                        Continue
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ResetPassVerify;