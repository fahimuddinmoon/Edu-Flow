import { Link } from 'react-router-dom';
import { Form, Input, Button } from "antd";
const ResetNewPassword = () => {
    return (
        <div className='place-content-center   sm:m-0 pb-9 md:pb-2  rounded-lg lg:pb-9 lg:w-[480px] ' >
            <div className='  p-4 lg:p-12  rounded-lg '>
                <div>
                    <h2 className="text-3xl font-semibold text-center mb-3">Enter New Password</h2>
                    
                </div>
                <div className='mt-20'>
                    <Form
                        className='font-bold m-0 p-0 lg:h-40'
                        name="validateOnly"
                        layout="vertical"
                        autoComplete="off"
                    >
                        <Form.Item
                            label="New Password"
                            name="newPassword"
                            className=''
                            rules={[{ required: true, message: 'Required' }]}
                        ><Input.Password placeholder="New Password" />
                        </Form.Item>

                        <Form.Item
                            label="Confirm Password"
                            name="confirmPassword"
                            className=''
                            rules={[{ required: true, message: 'Required' }]}
                        ><Input.Password placeholder="Confirm Password" />
                        </Form.Item>

                        <Form.Item>
                            <Link>
                                <button className='w-full  bg-[#2C42A7] py-1 mt-8 text-white rounded-lg' type="primary" htmlType="submit">
                                    Continue
                                </button>
                            </Link>
                        </Form.Item>
                    </Form>
                </div>

            </div>
        </div>
    );
};

export default ResetNewPassword;