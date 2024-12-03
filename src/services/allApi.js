import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

export const getalldisasterApi=async()=>{
    return await commonApi('GET',`${serverUrl}/all-disaster`)
}
export const getallshelterApi=async()=>{
    return await commonApi('GET',`${serverUrl}/all-shelter`)
}