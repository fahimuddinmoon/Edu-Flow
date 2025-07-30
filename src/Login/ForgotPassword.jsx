import { Link, useNavigate } from "react-router-dom";
import { CiMobile2 } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { useState } from "react";
const ForgotPassword = () => {
    const [select, setSelect] = useState()
    const navigate = useNavigate()
    const handleSelect = () => {
        if (select === 'mobile') {
            navigate('/login/resetMobileNo')
        } else if (select === 'email') {
            navigate('/login/resetEmail')
        }
    }
    return (
        <div className='place-content-center   sm:m-0 pb-9 md:pb-2  rounded-lg lg:pb-9 lg:w-[480px] ' >
            <div className='  p-4 lg:p-12  rounded-lg '>
                <div>
                    <h2 className="text-3xl font-semibold  mb-3">Forgot your password?</h2>
                    <p className='text-sm text-gray-400 font-semibold mb-4'>Select the contact details to be  use to reset<br className=' hidden sm:inline' /> your password</p>
                </div>
                <div>
                    <div onClick={() => setSelect('mobile')}
                        className={select === 'mobile' ? "flex lg:mr-20 items-center gap-3 pl-2 sm:pl-10 py-5  border-2 border-gray-200 rounded-xl my-2 bg-gray-200" : "flex lg:mr-20 items-center gap-3 pl-2 sm:pl-10 py-5  border-2 border-gray-200 rounded-xl my-2 "}>
                        <p className="text-2xl sm:text-4xl font-extrabold"><CiMobile2 /></p>
                        <div>
                            <p className="text-lg sm:text-xl font-semibold">Via SMS</p>
                            <p className="text-sm font-semibold">********9880</p>
                        </div>
                    </div>
                    <div onClick={() => setSelect('email')}
                        className={select === 'email' ? "flex lg:mr-20 items-center gap-3 pl-2 sm:pl-10 py-5  border-2 border-gray-200 rounded-xl my-2 bg-gray-200" : "flex lg:mr-20 items-center gap-3 pl-2 sm:pl-10 py-5  border-2 border-gray-200 rounded-xl my-2 "}>
                        <p className="text-2xl sm:text-4xl font-extrabold"><CiMail /></p>
                        <div>
                            <p className="text-lg sm:text-xl font-semibold">Via E-mail</p>
                            <p className="text-sm font-semibold" >testinapp.gmail.com</p>
                        </div>
                    </div>
                    <div className="my-5">
                        <Link onClick={handleSelect} className=' block bg-blue-500 py-1 text-white rounded-lg text-center lg:mr-20' type="primary" htmlType="submit">
                            Continue
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;