import { Button, Form, Input } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";

const Register = () => {
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/vendors/auth/signup",
        values
      );

      localStorage.setItem("accessToken", response.data.accessToken);
      navigate("/dashboard");

      message.success("Signup successful!");
    } catch (e: any) {
      if (e && e.response && e.response.data && e.response.data.message) {
        message.error(e.response.data.message);
      } else {
        message.error("Connection failed. Try again!");
      }
    }
  };

  return (
    <>
      <div className=" p-10">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Confirm password"
            name="confirm_password"
            rules={[
              { required: true, message: "Password confirmation is required!" },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Business name"
            name="business_name"
            rules={[
              { required: true, message: "Please input your business name!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="default" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
        <br />
        Already have an account? <br /> <br />
        <Link to={"/login"}>
          <b> Login</b>
        </Link>
      </div>
    </>
  );
};

export default Register;
