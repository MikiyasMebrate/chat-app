import axios from "axios"
import {createContext, useState, useEffect} from "react"
import { jwtDecode } from "jwt-decode";
import { redirect } from "react-router-dom";


const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({children}) =>{
    const [authTokens, setAuthTokens] = useState(()=>localStorage.getItem("authTokens") ? JSON.parse( localStorage.getItem("authTokens")) : null)
    const [user, setUser] = useState(()=>localStorage.getItem("authTokens") ? jwtDecode( localStorage.getItem("authTokens")) : null)
    const [loading, setLoading] = useState(true)

    const loginUser = async(data) => {
        try {
            console.log(data)
            const response = await axios.post('http://127.0.0.1:8000/api/token/',{ "phone": data.phone, "password": data.password })
            if(response.status == 200){
                setAuthTokens(response.data)
                setUser(jwtDecode(response.data.access))
                localStorage.setItem("authTokens", JSON.stringify(response.data))
                
            }else{
                setAuthTokens(null)
                alert("error")
            }
        } catch (err) {
            setAuthTokens(null)
            console.log(err)
        }
    }

    const logoutUser = () => {
        console.log("called")
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem("authTokens")
        return redirect("/")
    }

    const updateToken = async () =>{
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/token/refresh/',{ "refresh": authTokens.refresh})
            if(response.status == 200){
                setAuthTokens(response.data)
                setUser(jwtDecode(response.data.access))
                localStorage.setItem("authTokens", JSON.stringify(response.data))
            }else{
                logoutUser()
            }
        } catch (err) {
            logoutUser()
        }
    }



    useEffect(()=>{
        let fourMin = 1000 * 60 * 4
        let interval = setInterval(()=>{
            if(authTokens){
                updateToken()
            }
        }, fourMin)

        return(()=>clearInterval(interval))
    },[authTokens, loading])



    let contextData = {
        user : user,
        loginUser : loginUser,
        logoutUser : logoutUser,
    }



    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}