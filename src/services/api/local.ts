import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
        "Content-type": "application/json"
    }
});

instance.interceptors.response.use(function (response) {
    console.log(response);
    return response;
}, function (error) {
    console.log(error);
    return Promise.reject(error);
});

export async function post(data: any) {
    let typePokemon = "";
    let hp = 0;
    let attack = 0;
    let defense = 0;
    // Pega o tipo
    data.types.forEach(function(tp: { type: { name: string; }; }){
        typePokemon = typePokemon.concat(tp.type.name)
    })
    // Pega os stats
    data.stats.forEach(function(stats: any){
        if (stats.stat.name == "hp") {
            hp = stats.base_stat
        } else if (stats.stat.name == "attack") {
            attack = stats.base_stat
        } else if (stats.stat.name == "defense") {
            defense = stats.base_stat
        }
    })
    // Define objeto a ser inserido no json-server
    const object = {
        "id": data.id,
        "name": data.name,
        "type": typePokemon,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+data.id+".svg",
        "base_experience": data.base_experience,
        "hp": hp,
        "attack": attack,
        "defense": defense,
        "status": "active"
    }

    return await instance.post('pokemons', object)
}

export async function getList(limit:number, sort:string, order:string) {
    return await instance.get('pokemons',{
        params: {
            _limit: limit,
            _sort: sort,
            _order: order
        }
    })
}

export default instance