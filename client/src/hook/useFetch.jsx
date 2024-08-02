import { useContext, useEffect, useState } from "react";
import axios from "axios"
import AuthContext from "../context/AuthContext";





const useFetch = (url) => {
    const {authTokens} = useContext(AuthContext)



    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [err, setErr] =useState(false)

    useEffect(()=>{
        setLoading(true)
        axios.get(url, {
            headers: {
                 Authorization: 'Bearer ' + String(authTokens?.access)
              }
        }).then((data) =>{
            setData(data.data)
            setLoading(false)
        }).catch(err=>{
            setErr(err)
            setLoading(false)
        })
    },[url])

    return [loading, data, err] 
}
 
export default useFetch;