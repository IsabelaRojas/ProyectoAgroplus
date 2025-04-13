const API_AUTH_URL = 'http://localhost:3001/api/v1/auth';

export async function logInApi(loginData){
    const response = await fetch(`${API_AUTH_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    });

    if (!response.ok) throw new Error('Error en la autenticación');
    console.log('Respuesta del servidor:', response);
    const data = await response.json();
    return data;
}


export async function signUpApi(sigUpData){
    const response = await fetch(`${API_AUTH_URL}/sign-up`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sigUpData)
    });

    if (!response.ok) throw new Error('Error en el registro');
    console.log('Respuesta del servidor:', response);
    const data = await response.json();
    return data;
}