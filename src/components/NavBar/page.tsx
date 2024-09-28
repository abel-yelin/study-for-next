"use client"; // 将组件标记为客户端组件

import {useState } from "react";
import type { NextPage } from "next";
import Link  from "next/link";  
import Login from "../Login/page";
import styles from "./page.module.scss";
import { Button } from "antd";
import { navs } from "./config";
import { usePathname } from 'next/navigation'; // 从 next/navigation 导入


const NavBar: NextPage = () => {
//   const router = useRouter(); // 修改为使用 router，这个是过时的，没有办法使用
  const pathname = usePathname();
  const [ isShowLogin,setIsShowLogin] = useState(false); // 使用 usePathname 获取 pathname，前面是变量，后面是改变变量的方法
  const handleGotoEditorPage = () =>{

  }
  const handleLogin = () =>{
    setIsShowLogin(true);

  }
  const handleClose = () =>{
    setIsShowLogin(false);

  }
  return (
    <div className={styles.navbar}>
      <section className={styles.logoArea}>BLOG-C </section>
      <section className={styles.linkArea}>
        {
          navs?.map((nav) => (
            <Link key={nav?.labels} href={nav?.value} legacyBehavior>
              <a className={pathname === nav?.value?styles.active:""}>
                {nav?.labels}
                </a> 
            </Link>
          ))
        }
      </section>
      <section className={styles.operationArea}>
            <Button onClick={handleGotoEditorPage}>写文章</Button>
            <Button type="primary" onClick={handleLogin}>登录</Button>
      </section>
      <Login isShow = {isShowLogin} onClose = {handleClose}/>
    </div>
  );
};

export default NavBar;