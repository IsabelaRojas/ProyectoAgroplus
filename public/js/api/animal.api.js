const API_ANIMALS_URL = 'http://localhost:3001/api/v1/animals';

export async function getAnimalApi(queryParams){
    const response = await fetch(`${API_ANIMALS_URL}?${queryParams}`, {
        method: 'GET',
        credentials: 'include'
    });

    if (!response.ok) throw new Error('Error:', response.statusText);
    console.log('Respuesta del servidor:', response);
    const data = await response.json();
    return data;
}    

export async function createAnimalApi(animalData){
    const response = await fetch(`${API_ANIMALS_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(animalData),
        credentials: 'include',
    });

    if (!response.ok) throw new Error('Error:', response.statusText);
    console.log('Respuesta del servidor:', response);
    const data = await response.json();
    return data;
}    

export async function updateAnimalApi(animalId, animalData){
    const response = await fetch(`${API_ANIMALS_URL}/${animalId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(animalData),
        credentials: 'include',
    });

    if (!response.ok) throw new Error('Error:', response.statusText);
    console.log('Respuesta del servidor:', response);
    const data = await response.json();
    return data;
}    

export async function deleteAnimalApi(animalId){
    const response = await fetch(`${API_ANIMALS_URL}/${animalId}`, {
        method: 'DELETE',
        credentials: 'include',
    });
    if (!response.ok) throw new Error('Error:', response.statusText);
    console.log('Respuesta del servidor:', response);
    const data = await response.json();
    return data;
}