import { Link } from 'react-router-dom';
import { Form, Input, Button } from "antd";
const ResetEmail = () => {
    return (
        <div className='place-content-center   sm:m-0 pb-9 md:pb-2  rounded-lg lg:pb-9 lg:w-[480px] ' >
            <div className='  p-4 lg:p-12  rounded-lg '>
                <div>
                    <h2 className="text-3xl font-semibold  mb-3">Forgot your password?</h2>
                    <p className='text-sm text-gray-400 font-semibold mb-4'>Please fill in the form to recover your<br className=' hidden sm:inline' /> password</p>
                </div>
                <div className='mt-20'>
                    <Form
                        className='font-bold m-0 p-0 lg:h-40'
                        name="validateOnly"
                        layout="vertical"
                        autoComplete="off"
                    >
                        <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Required' }]}>
                            <Input type='email' placeholder="Email" />
                        </Form.Item>

                        <Form.Item>
                            <Link to='/login/resetPassVerify'>
                                <Button className='w-full  py-1 mt-8 text-white rounded-lg' type="primary" htmlType="submit">
                                    Continue
                                </Button>
                            </Link>
                        </Form.Item>
                    </Form>
                </div>

            </div>
        </div>
    );
};

export default ResetEmail;