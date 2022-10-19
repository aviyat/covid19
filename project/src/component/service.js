import axios from 'axios'

export function createUser(user) {
    debugger
    axios.post("http://localhost:5000/signUp", user)
        .then(res => { console.log('create user succses:', JSON.stringify(res)); })
        .catch(err => { console.log('err:', err); })
}

export function loginUser(user) {
    debugger
    const data = axios.post("http://localhost:5000/loginUser", user);
    return data;
}

export async function getAllProducts() {
    debugger
    let data = await axios.get("http://localhost:5000/getAllProducts");
    return data;
}

export async function saveHistory(user, obj) {
    debugger
    let newObj = { user: user, history: obj }

    let data = await axios.post("http://localhost:5000/addBuy", newObj);
    return data;
}