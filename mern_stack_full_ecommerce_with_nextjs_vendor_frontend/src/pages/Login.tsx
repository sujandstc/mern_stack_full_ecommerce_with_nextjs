import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="h-[100vh] w-[100vw] bg-green-300 flex items-center justify-center">
        <div className="bg-gray-200 p-5 font-bold">
          Vendor Login: <br />
          <div className="p-10 bg-white/50 rounded-xl  w-[50vw]">
            <h1 className="font-bold text-[25px]">Login to eWallet</h1>{" "}
            <hr className="mt-2" />
            <br />
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={() => {}}
              autoComplete="off"
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="default" htmlType="submit" className="font-bold">
                  Login
                </Button>
              </Form.Item>
            </Form>
            <br />
            <br />
            <Link className=" text-blue-800 font-bold" to={"/forgot-pw"}>
              Forgot password?
            </Link>
            <br />
            <br />
            Don't have an account? <br /> <br />
            <Link to={"/register"}>
              <b> Create new account!</b>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
