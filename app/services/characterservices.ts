import axios from "axios";
import { Character } from "../types/character";

export const characterServices ={

getAllCharacters: async (): Promise<Character[]> =>{
    const {data}= await axios.get("https://thesimpsonsapi.com/api/characters")
return data.results;
},

}