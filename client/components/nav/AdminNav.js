import React, { useState, useEffect } from "react";
import { Menu, Button, Layout } from "antd";
import Link from "next/link";
import { useWindowWidth } from "@react-hook/window-size";
import {
  PieChartOutlined,
  MailOutlined,
  PushpinOutlined,
  CameraOutlined,
  UserSwitchOutlined,
  SettingOutlined,
  BgColorsOutlined,
  UserOutlined,
  CommentOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Sider } = Layout;

const AdminNav = () => {
  // state
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState("");
  // hooks
  const onlyWidth = useWindowWidth();

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  useEffect(() => {
    if (onlyWidth < 800) {
      setCollapsed(true);
    } else if (onlyWidth > 800) {
      setCollapsed(false);
    }
  }, [onlyWidth < 800]);

  const activeName = (name) => `${current === name && "active"}`;

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
    >
      <Menu
        // defaultSelectedKeys={["1"]}
        defaultOpenKeys={["2", "6", "10"]}
        mode="inline"
        inlineCollapsed={collapsed}
      >
        <Menu.Item key="1" icon={<SettingOutlined />}>
          <Link href="/admin">
            <a className={activeName("/admin")}>Dashboard</a>
          </Link>
        </Menu.Item>

        {/* posts */}
        <SubMenu key="2" icon={<PushpinOutlined />} title="Quiz">
          <Menu.Item key="3">
            <Link href="/admin/posts">
              <a className={activeName("/admin/posts")}>All Quiz</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link href="/admin/post/new">
              <a className={activeName("/admin/post/new")}>Add New Quiz</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link href="/admin/categories">
              <a className={activeName("/admin/categories")}>Categories</a>
            </Link>
          </Menu.Item>
        </SubMenu>

        

        {/* users */}
        <SubMenu key="10" icon={<UserSwitchOutlined />} title="Users">
          <Menu.Item key="11">
            <Link href="/admin/users">
              <a className={activeName("/admin/users")}>All Users</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="12">
            <Link href="/admin/users/new">
              <a className={activeName("/admin/users/new")}>Add New</a>
            </Link>
          </Menu.Item>
        </SubMenu>

        {/* profile */}
        <Menu.Item key="13" icon={<UserOutlined />}>
          <Link href="/admin/userid">
            <a className={activeName("/admin/userid")}>Profile</a>
          </Link>
        </Menu.Item>

      </Menu>
    </Sider>
  );
};

export default AdminNav;
