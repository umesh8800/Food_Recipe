import React ,{useState} from 'react'
import './index.css';
import Axios from 'axios';
import RecipeTile from './RecipeTile'

function App() {

  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([])

  var url = `https://api.edamam.com/search?q=${query}&app_id=16c41994&app_key=23909231f5aee868d65a2eaeaa2cb921
  &health=alcohol-free
  `;

  
  async function getRecipe(){
    var Result = await Axios.get(url);
    setRecipes(Result.data.hits)
    console.log(Result.data)

  }
 const submit =(e) =>{
   e.preventDefault();
   getRecipe();


 }
  return (
    <div className="App">
    <h1>  Food Recipe  Plaza 🍔 </h1>
    <form className='app_searchFood' onSubmit={submit}>
      <input type='text'
      className='app_input' 
      placeholder='Type ingredient'
      value={query}
      onChange={(e)=>setQuery(e.target.value)}
        />
      <input type="submit" value='Search' className='app_submit'/>
    </form>

    <div className="app_recipe">
    {recipes.map(recipe =>{
     return <RecipeTile recipe={recipe}/>;
    })}
    </div>
  
    </div>
  );
}

export default App;
