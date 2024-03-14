// This function sends a registration request to the server with the provided name, email, and password.
// It returns a promise that resolves to the server response.
export const register = async (name, email, password) => {
  try {
    const response = await fetch('http://localhost:3000/register', {
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

// This function sends a sign-in request to the server with the provided email and password.
// It returns a promise that resolves to the server response.
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

// This function sends a sign-out request to the server.
// It returns a promise that resolves to the server response.
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
  
// This function fetches user data from the server using the session token stored in the local storage.
// It returns a promise that resolves to the server response containing user data.
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

// This function fetches the list of Pokemon from the server.
// It returns a promise that resolves to the server response containing the Pokemon list.
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

// This function sends a request to replace a Pokemon with another one.
// It takes the Pokemon to be replaced, the selected Pokemon, and the session token as parameters.
// It returns a promise that resolves to the server response.
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

// This function sends a request to catch a Pokemon with the given name.
// It takes the Pokemon name and the session token as parameters.
// It returns a promise that resolves to the server response.
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
