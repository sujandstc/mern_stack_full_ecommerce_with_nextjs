"use client";

import { Form, Input, Button } from "antd";
import { message } from "antd";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axiosInstance from "../utils/axiosInstance";

const Login = () => {
  const navigation = useRouter();

  const onFinish = async (values: any) => {
    try {
      const response = await axiosInstance.post(
        `/website/users/auth/login`,
        values
      );

      localStorage.setItem("accessToken", response.data.accessToken);
      navigation.push("/products");
      message.success("Logged in successfully!");
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
      <div className="h-[100vh] w-[100vw] bg-green-300 flex items-center justify-center">
        <div className="bg-gray-200 p-5 font-bold">
          Login: <br />
          <br />
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
          <Link className=" text-blue-800 font-bold" href={"/forgot-pw"}>
            Forgot password?
          </Link>
          <br />
          <br />
          Don't have an account? <br /> <br />
          <Link href={"/register"}>
            <b> Create new account!</b>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
