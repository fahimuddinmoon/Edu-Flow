import pic from '../../public/image/Ellipse 2.png'
import pic2 from '../../public/image/Ellipse 3.png'
import pic3 from '../../public//image/Rectangle 13.png'
import { Outlet } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className="w-full  bg-no-repeat bg-cover "
            style={{
                backgroundImage: `url(${pic2}), url(${pic})`,
                backgroundPosition: 'top right, bottom left',
                backgroundSize: '400px 400px, 400px 400px',
            }}>
            <div className=" py-20  ">
                <div className='lg:flex lg:justify-around items-center lg:gap-6 shadow bg-white rounded-2xl w-10/12 mx-auto'>
                    <div className='relative'>
                        <img className='lg:w-[480px]  bg-white p-4 rounded-2xl' src={pic3} alt="" />
                        <div className='absolute rounded-lg inset-0   z-30 bg-gradient-to-t from-black via-transparent to-transparent  m-4'>
                            <div className="pt-48 sm:pt-96 md:mt-14 lg:mt-6 text-center">
                                <h3 className= 'text-lg sm:text-2xl  text-white  font-semibold'>Eduflow – Pay with Ease</h3>
                                <p className='text-sm text-gray-400 font-semibold'>Modern tools to simplify tuition payments <br className=' hidden sm:inline' /> and maintain precise financial records.</p>
                            </div>
                        </div>
                    </div>
                    <div> <Outlet></Outlet></div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;