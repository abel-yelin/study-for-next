// import type { NextPage } from "next";
// import { verify } from "crypto";
import {useState} from "react";
import React from "react";
import styles from "@/components/login/page.module.scss";

// 定义 Login 组件的属性接口
interface IProps {
    // 控制登录弹窗是否显示的布尔值
    isShow: boolean;
    // 关闭登录弹窗的回调函数
    // TODO: 考虑将 Function 类型替换为更具体的函数签名，如 () => void
    onClose: Function;
}
const handleClose = () => {

}
const  hanleGetVerifyCode =()=>{

}
const handleLogin =()=>{

}
const handelOAuthGithub =()=>{

}

// const setForm =()=>{

// }



const Login = (props: IProps)=>{
  console.log(props);
  const {isShow = false } = props;
  const [form,setForm] = useState({
    phone:"",
    verify:""
  });

  // 定义表单变更处理函数
  // 参数 e 的类型为 React.ChangeEvent<HTMLInputElement>，表示这是一个 input 元素的变更事件
  const handelFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 使用解构赋值从事件目标（e.target）中获取 name 和 value
    // name 对应 input 元素的 name 属性，value 对应 input 的当前值
    const { name, value } = e.target;

    // 使用 setForm 函数更新表单状态
    // 这里使用了对象展开运算符 (...) 来复制原有的表单状态
    // [name]: value 使用计算属性名语法，根据 input 的 name 动态设置相应的字段
    setForm({
        ...form,
        [name]: value
    });
  }
  // 如果 isShow 为 true，则显示登录弹窗，否则返回 null
  return isShow ? (
    <div className={styles.loginArea}>
        {/* 确保在 JSX 中使用 className={styles.loginArea} 和其他样式类时，样式文件的路径和类名正确无误。如果样式仍然不生效，请检查以下几点：一定是大括号，而不是引号 */}
        <div className={styles.loginBox}>
            <div className={styles.loginTitle}>
                <div>手机号登录</div>
                <div>x</div>
                <div className="styles.close" onClick ={handleClose}></div>
            </div>
            <input 
                name= "phone" 
                type="text"
                placeholder="请输入手机号" 
                value={form.phone}
                onChange={handelFormChange}
                />
            <div className={styles.verifyCodeArea}>
                <input  
                    name= "verify" 
                    type="text" 
                    placeholder="请输入验证码" 
                    value={form.verify}  
                    onChange={handelFormChange}

                    />
                <span className={styles.verifyCode} onClick={ hanleGetVerifyCode}>获取验证码</span>
            </div>
            <div className={styles.loginBtn} onClick={handleLogin}>登陆</div>
            <div className={styles.otherLogin} onClick = {handelOAuthGithub}>使用github登陆</div>
            <div className={styles.loginPrivacy}>
                注册登录即表示同意
                <a href="https//www.luolink.com" target="_blank">隐私政策</a>
                </div>
        </div> 
    </div>
  ) : null;

};
export default Login;