import Axios from "axios";

const http = Axios.create({
    timeout: 8000,
    validateStatus: function (status) {
        return status >= 200;
    }
});

http.interceptors.request.use((data, headers) => {
    return data;
});

http.interceptors.response.use(response => {
    switch (response.status) {
        case 200:
            return response.data;
        default:
            return response;
    }
});

export default http;
