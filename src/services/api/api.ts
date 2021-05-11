import axios from "axios";

const instance = axios.create({
    baseURL: "https://pokeapi.co/api/v2",
    headers: {
        "Content-type": "application/json"
    }
});

instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    console.log(error);
    return Promise.reject(error);
});

export async function get(page:number, limit:number) {
    return await instance.get('pokemon', {
        params: {
            offset: page,
            limit: limit,
        }
    })
}

export async function getList(limit:number) {
    return await instance.get('pokemon', {
        params: {
            limit: limit,
        }
    })
}

export async function getPokemonDetail(url:string) {
    return await instance.get(url)
}

export default instance