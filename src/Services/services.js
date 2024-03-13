export const register = async (name, email, password) => {
    try {
      const response = await fetch('http://localhost:3000/register',
      {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      return await response.json();
    } catch (error) {
      console.error('Error during registration:', error);
      throw error;
    }
}

export const signin = async (email,password) => {
    try{
        const response = await fetch('http://localhost:3000/signin', 
        {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email,password})
        });
        return await response.json();
    }catch (error) {
        console.error('Error during Signining in:', error);
        throw error;
    }
} 

export const signout = async () => {
    try {
      const response = await fetch('http://localhost:3000/signout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ sessionToken: localStorage.getItem('token') })
      });
      const data = await response.json();
      if (data.success) {
        localStorage.removeItem('token');
      } else {
        console.error('Signout error:', data.message);
      }
      return data;
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  }
  
export const fetchUserData = async () => {
  try{
    const sessionToken = localStorage.getItem('token');
    const response = await fetch('http://localhost:3000/userData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ sessionToken })
    })
    const data = await response.json()
    return data;
  }catch(error){
    console.error('Error fetching user data:', error);
    throw error;
  }
}

export const fetchPokemonList = async () =>{
  try{
    const response = await fetch('http://localhost:3000/pokemonList');
    const data = await response.json();
    return data;
  }catch(error){
    console.error('Error fetching Pokemon List:', error);
    throw error;
  }
}

export const replacePokemon = async (pokemon , selectedPokemon, sessionToken) => {
  try{
    const response = await fetch('http://localhost:3000/replacePokemon', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pokemon , selectedPokemon, sessionToken }),
    })
    const data = await response.json();
    return data;
  }catch(error){
    console.error('Error replacing Pokemon :', error);
    throw error;
  }
}

export const catchPokemon = async (pokemonName,sessionToken) => {
  try{
    const response = await fetch('http://localhost:3000/catchPokemon', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pokemonName, sessionToken }),
    })
    const data = await response.json();
    return data ;
  }catch(error){
    console.error('Error catching Pokemon :', error);
    throw error;
  }
}