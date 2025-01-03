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
export const reportdisasterApi=async(reqBody,reqHeader)=>{
    return await commonApi('POST',`${serverUrl}/user-reportdisaster`,reqBody,reqHeader)

}
export const getusersdisaster=async(reqHeader)=>{
    return await commonApi('GET',`${serverUrl}/user/disasters`,'',reqHeader)
}
export const updateusersdisasterApi = async (disasterId, reqBody, reqHeader) => {
    return await commonApi('PUT', `${serverUrl}/disasters/${disasterId}`, reqBody, reqHeader);
};
export const deleteUserDisaster = async(id, reqHeader) => {
    return await commonApi('DELETE',`${serverUrl}/delete-disasters/${id}`,null, reqHeader);
};

export const createHelpRequestApi = async (reqBody, reqHeader) => {
    return await commonApi('POST',`${serverUrl}/helprequest`, reqBody, reqHeader);
};

export const getUsersHelpRequests = async (reqHeader) => {
    return await commonApi('GET', `${serverUrl}/userhelprequest`, null, reqHeader);
};
export const updateUsersHelpRequests=async(id,reqBody,reqHeader)=>{
    return await commonApi('PUT', `${serverUrl}/updatehelprequest/${id}`, reqBody, reqHeader);

}

export const deleteUserHelpRequest = async (helpRequestId, reqHeader) => {
    return await commonApi('DELETE', `${serverUrl}/deletehelprequest/${helpRequestId}`, null, reqHeader);
};



// admin side api
// ---------------------
export const adminloginApi=async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/adminlogin`,reqBody)
}

export const approveuserApi = async (userId, reqHeader) => {
    return await commonApi('PATCH', `${serverUrl}/admin/approve-user/${userId}`,'', reqHeader); // Pass an empty object for PATCH request body
};


export const rejectUserApi = async (userId, reqHeader) => {
    return await commonApi('PATCH', `${serverUrl}/admin/reject-user/${userId}`, '', reqHeader);
};

export const getallpendinguserAPi = async (reqHeader) => {
    return await commonApi('GET', `${serverUrl}/admin/pending-users`, '', reqHeader);
};

export const createshelterApi=async(reqBody,reqHeader)=>{
    return await commonApi('POST',`${serverUrl}/admin/shelters`,reqBody,reqHeader)
}
export const updateshelterApi=async(id,reqBody,reqHeader)=>{
    return await commonApi('PUT',`${serverUrl}/updateshelters/${id}`,reqBody,reqHeader)
}
export const deleteshelterApi=async(id,reqHeader)=>{
    return await commonApi('DELETE',`${serverUrl}/deleteshelter/${id}`,'',reqHeader)
}
export const gethelprequesApi=async(reqHeader)=>{
    return await commonApi('GET',`${serverUrl}/allhelprequest`,'',reqHeader)
}
export const updateHelpRequestApi = async (id, reqBody, reqHeader) => {
    return await commonApi('PATCH', `${serverUrl}/allhelprequest/${id}`, reqBody, reqHeader);
};
// Delete a help request API
export const deleteHelpRequestApi = async (id, reqHeader) => {
    return await commonApi('DELETE', `${serverUrl}/allhelprequest/${id}`, '', reqHeader);
};

