import { useState, useContext, useEffect } from "react";
import { Form, Input, Button, Checkbox, Col, Row } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-hot-toast";
import { AuthContext } from "../context/auth";
import { useRouter } from "next/router";

function Signin() {
  // context
  const [auth, setAuth] = useContext(AuthContext);
  // state
  const [loading, setLoading] = useState(false);
  // hooks
  const router = useRouter();
  useEffect(() => {
    if (auth?.token) {
      router.push("/");
    }
  }, [auth]);

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post("/signin", values);
      // console.log("signin response => ", data);
      // save user and token to context
      console.log(data)
      setAuth(data);
      
      // save user and token to local storage
      localStorage.setItem("auth", JSON.stringify(data));
      toast.success("Successfully signed in");
      // redirect user
      if (data?.user?.role === "admin") {
          router.push("/admin");
        } 
      else{
        router.push("/");
      }
      // form.resetFields();
    } catch (err) {
      console.log("err => ", err);
      setLoading(false);
      toast.error("Signin failed. Try again.");
    }
  };

  return (
    <Row>
      <Col span={8} offset={8}>
        <h1 style={{ paddingTop: "100px" }}>Signin</h1>

        <Form
          // form={form}
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
            email: "hridoy1@gmail.com",
            password: "hridoy1",
          }}
          onFinish={onFinish}
        >
          {/* email */}
          <Form.Item name="email" rules={[{ type: "email" }]}>
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          {/* password */}
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <br />
          <br />

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Login
            </Button>
            <br />
            Or{" "}
            <Link href="/signup">
              <a>Register now!</a>
            </Link>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default Signin;
