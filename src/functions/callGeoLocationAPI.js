import axios from "axios"
const API_BASE_URL = `https://carcassapi.dudeunoob.repl.co`

export const callGeoLocationAPI = async() => {
    const response = await axios.get("https://geolocation-db.com/json/");
    try {
        
        
        const secondResponse = await axios.post(`${API_BASE_URL}/api/v1/ip`, { ip: response.data }, {
            headers:{
                "Content-Type":"application/json"
            }
        })
        
        console.log(secondResponse.data)
        return secondResponse.data
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