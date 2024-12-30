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
    return await commonApi('POST',`${serverUrl}/register`,reqBody, reqHeaders)
}

export const userloginApi=async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/login`,reqBody)
}

// admin side api
// ---------------------
export const adminloginApi=async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/adminlogin`,reqBody)
}

// allApi.js
export const approveuserApi = async (userId, reqHeader) => {
    return await commonApi('PATCH', `${serverUrl}/admin/approve-user/${userId}`,'', reqHeader); // Pass an empty object for PATCH request body
};


export const rejectUserApi = async (userId, reqHeader) => {
    return await commonApi('PATCH', `${serverUrl}/admin/reject-user/${userId}`, '', reqHeader);
};

export const getallpendinguserAPi = async (reqHeader) => {
    return await commonApi('GET', `${serverUrl}/admin/pending-users`, '', reqHeader);
};

