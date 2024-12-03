import axios from "axios"


export const commonApi=async(httpRequest,url,reqBody,reqHeader)=>{
    const reqconfig={
        method:httpRequest,
        url,
        data:reqBody,
        headers:reqHeader? reqHeader:{"Content-Type": "application/json" }
    }
    return await axios(reqconfig).then(result=>{
        return result
    }).catch(err=>{
        return err
    })


}