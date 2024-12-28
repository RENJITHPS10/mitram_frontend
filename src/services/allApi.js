import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

// user side api
// -----------------------------
export const getalldisasterApi=async()=>{
    return await commonApi('GET',`${serverUrl}/all-disaster`)
}
export const getallshelterApi=async()=>{
    return await commonApi('GET',`${serverUrl}/all-shelter`)
}
export const userregisterApi=async(reqBody, reqHeaders)=>{
    return await commonApi('POST',`${serverUrl}/user-register`,reqBody, reqHeaders)
}

// admin side api
// ---------------------
export const getallpendinguserAPi=async()=>{
    return await commonApi('GET',`${serverUrl}/admin/pending-users`)
}

export const approveuserApi=async(userId)=>{
    return await commonApi('PATCH',`${serverUrl}/admin/approve-user/${userId}`)
}
