import { useState } from "react"
import "./Input.css"
import { EyeClosed, EyeIcon } from "lucide-react"


export function Input({ type, id, label, placeholder }) {
    const [inputActive, setInputActive] = useState(false)
    const [passwordVisible, setPasswordVisible] = useState(false)
    function handleChangeInput(e) {
        e.target.value.length >= 1 ? setInputActive(true) : setInputActive(false)
    }
    function handleClickPassword() {
        setPasswordVisible(!passwordVisible)
    }
    return (
        <div>
            <div className="inputContainer">
                <input className={inputActive ? "active" : ""} type={type === "password" && passwordVisible ? "text" : type} id={id} placeholder={placeholder} onChange={(e) => handleChangeInput(e)} />
                <label htmlFor={id}>
                    {label}
                </label>
                {type === "password" ?
                    <span className="passwordIcon" onClick={() => handleClickPassword()}>
                        {passwordVisible ? <EyeIcon size={24} /> : <EyeClosed size={24} />}
                    </span>
                    : ""}
            </div>
        </div>
    )
}