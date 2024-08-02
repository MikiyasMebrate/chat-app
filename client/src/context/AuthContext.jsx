import axios from "axios"
import {createContext, useState, useEffect} from "react"
import {jwtDecode} from "jwt-decode"
import { redirect } from "react-router-dom"


const AuthContext = createContext()
export default AuthContext

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(localStorage.getItem("authTokens") ? jwtDecode(localStorage.getItem("authTokens")) : null )
    const [authTokens, setAuthToken] = useState(localStorage.getItem("authTokens") ? JSON.parse(localStorage.getItem("authTokens")) : null )
    const [userInfo, setUserInfo] = useState(localStorage.getItem("profile") ? jwtDecode(localStorage.getItem("profile")) : null)



    const getUserInfo = async () => {
        try{
            const response = await axios.get('http://127.0.0.1:8000/user-profile/', {
                headers: {
                    'Content-Type': 'multipart/form-data',
                     Authorization: 'Bearer ' + String(authTokens.access)
                  }
            })

            if(response.status == 200){
                setUserInfo(response.data)
                //localStorage.setItem("profile" , JSON.stringify(response.data))
                return true
            }else{
                console.log("error")
                return false
            }
            
        }catch(err){
            console.log(err)
            return false
        }
    }




    const loginUser = async (data) =>{
        try{
            const response = await axios.post('http://127.0.0.1:8000/api/token/', {"phone" : data.phone, "password" : data.password})
        if(response.status == 200){
            setAuthToken(response.data)
            setUser(jwtDecode(response.data.access))
            localStorage.setItem("authTokens" , JSON.stringify(response.data))
            return true         
        }else{
            setAuthToken(null)
            setUser(null)
            return false
        }
        }catch(err){
            setAuthToken(null)
            setUser(null)
            return false
        }

        
    }

    const updateToken = async () =>{
        try {
            console.log("updated")
            const response = await axios.post('http://127.0.0.1:8000/api/token/refresh/',{ "refresh": authTokens.refresh})
            if(response.status == 200){
                setAuthToken(response.data)
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
        if(authTokens){
            getUserInfo()
        }
    },[authTokens])

    useEffect(() =>{
        let fourMin = 1000 * 60 * 3
        let interval = setInterval(()=>{
            if(authTokens){
                console.log("called child")
                updateToken()
            }
        }, fourMin) 

        return(()=>clearInterval(interval))
    }, [authTokens])



    const logoutUser = () =>{
        setUser(null)
        setAuthToken(null)
        localStorage.removeItem("authTokens")
        return redirect("/login")
    }


    //What functionality will applied 
    let contextData = {
        user,
        loginUser,
        logoutUser,
        updateToken,
        authTokens,
        getUserInfo,
        userInfo,
    }

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )

    
}

