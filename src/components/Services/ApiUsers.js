//Acá estamos solicitando los datos de usuarios de la Api


const getUsersApi = () => {
    //mock api de usuarios https://664866dd2bb946cf2fa06d75.mockapi.io/api/v1/MenuSemanal
    return fetch('https://664866dd2bb946cf2fa06d75.mockapi.io/api/v1/users')
    .then(response => response.json())
    .then((data) => {
        //Realmente no hace falta mapeo  <----------------------------------------------------------------
        const CleanData = data.map((item) => {
            return{
                email: item.email,
                password: item.password
            };
        });
        return CleanData;
    });
};

export default getUsersApi;