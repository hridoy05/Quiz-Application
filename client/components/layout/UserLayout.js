import { Layout } from "antd";
import { useState, useEffect, useContext } from "react";
import { SyncOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { AuthContext } from "../../context/auth";
import axios from "axios";
import LoadingToRedirect from "./LoadingToRedirect";

const { Content } = Layout;

const UserLayout = ({ children }) => {
  // context
  const [auth, setAuth] = useContext(AuthContext);
  // hooks
  const router = useRouter();

  // state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (auth?.token) {
      getCurrentAuthor();
    }
  }, [auth?.token]);

  const getCurrentAuthor = async () => {
    try {
      const { data } = await axios.get(`/current-user`);
      console.log("current author", data);
      if (data.ok) {
        setLoading(false);
      }
    } catch (err) {
      router.push("/");
    }
  };

  return loading ? (
    <LoadingToRedirect />
  ) : (
    <Layout>

      <Layout>
        <Content
          style={{
            margin: "16px 16px",
            overflow: "auto",
            height: "100vh",
            // position: "fixed",
            marginTop: 54,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default UserLayout;
