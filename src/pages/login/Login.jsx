import { useState } from "react"
import "./login.css"
import { Input } from "../../components/Input/Input"
import { FcGoogle } from "react-icons/fc"
import { element_assets } from "../../assets/constants/elementAssets"


export function Login({ elementId }) {
    const element = elementId.replace("--", "");
    const selectedElement = element_assets[element]
    const [isLogin, setIsLogin] = useState(false)
    function handleClickIsLogin() {
        return setIsLogin(!isLogin)
    }

    return <>
        <div id="loginBackground">
            <div id="loginContainer">
                <img src={selectedElement["Poke"]} alt="" className="poke" />
                <div className={isLogin ? "cover" : "cover active"}></div>
                <div className="register form-container">
                    <h2>Registre-se</h2>
                    <form action="POST">
                        <Input type={"text"} id={"registerInputEmail"} label={"E-mail"} />
                        <Input type={"text"} id={"registerInputUsername"} label={"Username"} />
                        <Input type={"password"} id={"registerInputPassword"} label={"Password"} />
                        <button className="sendForm">Registrar</button>
                    </form>
                    <button className="socialRegister">
                        <FcGoogle size={24} />
                        Registre-se com Google</button>
                    <p className="changeForm" onClick={() => handleClickIsLogin()}>Já tem conta? Faça Login</p>
                </div>
                <div className="register form-container">
                    <h2>Faça Login</h2>
                    <form action="POST">
                        <Input type={"text"} id={"loginInputUsername"} label={"E-mail ou Username"} />
                        <Input type={"password"} id={"loginInputPassword"} label={"Password"} />
                        <button className="sendForm">Fazer Login</button>
                    </form>
                    <button className="socialRegister">
                        <FcGoogle size={24} />
                        Faça Login com Google</button>
                    <p className="changeForm" onClick={() => handleClickIsLogin()}>Não tem conta? Crie já!</p>
                </div>
            </div>
        </div>
    </>
}