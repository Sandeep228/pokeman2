import React,{useState,useEffect} from 'react'
import {fetchApi,fetchDetails,cancel} from "./Api";
import Pokemon from"./Components/Pokemon";
import PokemonDetails from "./Components/PokemonDetails"
import hero from "./images/pokemon.png"
function App() {
const [pokemons, setpokemons] = useState([]);
const [nexturl,setnexturl]=useState("");
const [prevurl, setprevurl] = useState("");
const [url, seturl] = useState("https://pokeapi.co/api/v2/pokemon/")
const [Pokedetails, setPokedetails] = useState();
const [isopen, setisopen] = useState(false)
useEffect(() => {
  const fetchPokemon = async()=>{
    const res = await fetchApi(url);
    setpokemons(res.results);
    setprevurl(res.previous);
    setnexturl(res.next);
  }
  fetchPokemon();
  return () => {
    cancel();
  }
}, [url])

const open=()=>{
  setisopen(true);
}

const close=()=>{
  setisopen(false);
}

const NextPage=()=>{
  seturl(nexturl);
}
const Previouspage=()=>{
  seturl(prevurl);
}

const PokeDetails=async(url1)=>{
    const res = await fetchDetails(url1);
    setPokedetails(res);     
}

console.log(Pokedetails);

  return (
   <div className=" flex bg-purple-700 justify-between" >
     <div className="flex flex-col ">
     <Pokemon pokemon={pokemons} Details={PokeDetails} open={open} />
   <div className="bg-green-300 rounded-xl py-1">
     {nexturl?<button onClick={NextPage} className="bg-purple-600 p-3 m-1 rounded-xl text-white">Next</button>:null}
     {prevurl?<button onClick={Previouspage} className="bg-purple-600 p-3 m-1 rounded-xl text-white">Previous</button>:null}
   </div>
     </div>
   
   <img className="md:h-96 md:w-96 h-60 fixed top-5 left-48 " src={hero} alt="hero" /> 
     <PokemonDetails Details={Pokedetails} close={close} isopen={isopen} />
   </div>
  );
}

export default App;
