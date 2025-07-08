import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";

// adding details post
export const addDataAPI=async(reqbody)=>{
   return await commonAPI('post',`${serverURL}/data`,reqbody)
}
// get details get+
export const getDataAPI=async()=>{
   return await commonAPI('get',`${serverURL}/data`,"")
}

// deleteing use id for that delete
export const deletDataAPI=async(id)=>{
   return await commonAPI('delete',`${serverURL}/data/${id}`,"")
}
// edit that details useing get
export const editDataAPI=async(id)=>{
   return await commonAPI('get',`${serverURL}/data/${id}`,"")
}
//  update that editit data put
export const updateDataAPI=async(id,reqbody)=>{
   return await commonAPI('put',`${serverURL}/data/${id}`,reqbody)
}