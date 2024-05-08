import { baseURL } from "./baseUrl"
import { commonAPI } from "./commonApi"

//add todo
export const addTodo=async(reqBody)=>{
    return await commonAPI('POST',`${baseURL}/todo`,reqBody)
}

//get todo
export const getTodo=async()=>{
    return await commonAPI('GET',`${baseURL}/todo`,'')
}

//delete todo
export const deleteTodo=async(id)=>{
    return await commonAPI('DELETE',`${baseURL}/todo/${id}`,{})
}

//search
export const searchTodo=async(searchQuery)=>{
    return await commonAPI('get',`${baseURL}/todo?q=${searchQuery}`,[])
}