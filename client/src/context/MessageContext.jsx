import axios from "axios"
import {createContext, useState, useEffect, useContext} from "react"
import AuthContext from "./AuthContext"

const MessageContext = createContext()
export default MessageContext

export const MessageProvider = ({children}) =>{
    const {authTokens} = useContext(AuthContext)
    const [room, setRoom] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        if(authTokens==null){
            setRoom(null)
        }
    },[authTokens])
   

    const createRoom = async (user2) => {
        setLoading(true)
        try{
            const response = await axios.post('http://127.0.0.1:8000/create-room/',{'user2':user2} ,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                     Authorization: 'Bearer ' + String(authTokens.access)
                  }
            })
            if (response.status == 200){
                console.log(response.data)
                setRoom(response.data)
                setLoading(false)
            } 
        }catch(err){
            setLoading(false)
            console.log(err)
        }
    }

    let contextData = {
        room,
        loading,
        createRoom,
    }

    return(
        <MessageContext.Provider value={contextData}>
            {children}
        </MessageContext.Provider>
    )
}