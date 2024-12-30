import axios from "axios";

export const commonApi = async (httpRequest, url, reqBody, reqHeader) => {
    try {
        const reqconfig = {
            method: httpRequest,
            url: url,
            data: reqBody || {}, // If there's no body, send an empty object
            headers: reqHeader || { "Content-Type": "application/json" }
        };

        // Making the request
        const result = await axios(reqconfig);

        // Log success result
        return result;

    } catch (err) {
        // Enhanced error handling
        console.error("API call failed:", err.response?.data || err.message);
        return err.response || err; // Return error response
    }
};
