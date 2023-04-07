import axios from "axios"
const API_BASE_URL = `https://ipget.dudeunoob.repl.co`

export const callGeoLocationAPI = async() => {

    try {
        const response = await axios.get("https://api.ipify.org/?format=json");
        
        await axios.post(`${API_BASE_URL}/api/v1/ip`, { ip: response.data.ip })
        .then((res) => console.log(res))
        return response.data
    } 
    catch(error) {
        if(error.response){
            return;
        }
        else if(error.request){

            return;
        }
        else {
            return error.message
        }
    }
}