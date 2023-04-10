import axios from "axios"
const API_BASE_URL = `https://carcassapi.dudeunoob.repl.co`

export const callGeoLocationAPI = async() => {
    const response = await axios.get("https://geolocation-db.com/json/");
    try {
        
        
        const secondResponse = await axios.post(`https://carcassapi.onrender.com/api/v1/ip`, { ip: response.data }, {
            headers:{
                "Content-Type":"application/json"
            }
        })
        
        console.log(secondResponse.data)
        return secondResponse.data
    } 
    catch(error) {
        try{
            const response = await axios.get("https://geolocation-db.com/json/");

            const faultTolerantThirdResponse = await axios.post(`${API_BASE_URL}/api/v1/ip`, { ip: response.data }, {
                headers:{
                    "Content-Type":"application/json"
                }
            })
        } catch(e) {

            try {

                const response = await axios.get("https://geolocation-db.com/json/");

                const faultTolerantLastResponse = await axios.post('https://ipget.dudeunoob.repl.co/api/v1/ip', { ip: response.data }, {
                    headers : {
                        "Content-Type":"application/json"
                    }
                })
            } catch(err) {
                return err
            }
        }
         
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