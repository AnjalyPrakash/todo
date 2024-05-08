import axios from "axios"

export const commonAPI=async(httpRequest,url,reqBody)=>{
 const reqConfig={
    method:httpRequest,
    url:url,
    data:reqBody,
    Headers:{
        "Content-Type":'application/json'
    }
 }   

 return await axios(reqConfig).then((result)=>{
    return result
 }).catch((error)=>{
    return error
 })
}