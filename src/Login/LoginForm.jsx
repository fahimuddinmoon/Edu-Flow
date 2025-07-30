import { Link } from "react-router-dom";
import { Form, Input, Select,Button } from "antd";

const LoginForm = () => {
    return (
        <div className='place-content-center m-6 sm:m-0 pb-9 md:pb-2  rounded-lg lg:pb-9 lg:w-[480px] ' >
            <div className='  p-4 lg:p-12  rounded-lg '>
                <h2 className='flex justify-center items-center gap-2  mb-4  text-white'><span className=" p-7 bg-[#2C42A7] rounded-full relative"><span className="absolute text-gray-200 text-5xl font-semibold  bottom-3 left-2">ef</span></span></h2>

                <div>
                    <h2 className="text-2xl font-bold text-center my-6">Log In</h2>
                </div>
                <Form
                    className='font-bold m-0 p-0 lg:h-68'
                    name="validateOnly"
                    layout="vertical"
                    autoComplete="off"
                >
                    <Form.Item name="name" label="Username" rules={[{ required: true, message: 'Required' }]}>
                        <Input type='email' placeholder="Enter your User Name" />
                    </Form.Item>
                    <Form.Item name="role" label="Role" rules={[{ required: true, message: 'Required' }]}>
                        <Select placeholder="Enter your role">
                            <Select.Option value="Admin">Admin</Select.Option>
                            <Select.Option value="Super Admin">Super Admin</Select.Option>
                            <Select.Option value="Treasurer">Treasurer</Select.Option>
                            <Select.Option value="Bursar">Bursar</Select.Option>
                            <Select.Option value="Teacher">Teacher</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        className=''
                        rules={[{ required: true, message: 'Required' }]}
                    ><Input.Password placeholder="Enter your Password" />
                    </Form.Item>
                    <p className='  text-sm font-semibold '>
                        Forget Password?
                        <Link to="/login/forgot-password"
                            className='text-sm font-semibold'>
                            <span className='text-green-600'> Reset Now</span>
                        </Link>
                    </p>
                    <Form.Item>
                        <button className='w-full bg-[#2C42A7]  py-1 text-white rounded-lg' type="primary" htmlType="submit">
                            Log In
                        </button>
                    </Form.Item>
                </Form>
            </div>
            <div>
                <p className="text-sm font-semibold text-center md:mb-5 lg:mb-0">Don't have an account?<span className="text-green-600"><Link>Sign Up</Link></span></p>
            </div>
        </div>
    );
};

export default LoginForm;