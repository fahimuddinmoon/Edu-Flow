import { Link } from "react-router-dom";


const StartedPage = () => {
    return (
        <div className='bg-[#2C42A7] min-h-screen place-content-center text-center pb-11'>
            <div>
                 <h2 className= 'flex justify-center items-center gap-2 text-6xl font-semibold mt-12 text-gray-300'><span className="p-7 border-gray-800 rounded-b-full  border-b-2">ef</span>eduflow</h2>
            </div>         
            <h2 className='px-10 sm:px-0 text-sm font-semibold my-4 text-gray-300'>Welcome to eduflow</h2>
            <button className='text-xm font-semibold text-black bg-white py-2 px-16 rounded-xl my-4 hover:text-blue-500'><Link to="/login">Get Started</Link></button>
        </div>
    );
};

export default StartedPage;