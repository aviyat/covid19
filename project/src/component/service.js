import axios from 'axios'
// import member from '../../../WeatherProject/models/member';

export function createMember(member) {
    debugger
    axios.post("http://localhost:3500/addMember", member)
        .then(res => { console.log('create member succses:', JSON.stringify(res)); })
        .catch(err => { console.log('err:', err); })
}

export async function getAllProducts() {
    debugger
    let data = await axios.get("http://localhost:3500/getAllProducts");
    return data;
}

