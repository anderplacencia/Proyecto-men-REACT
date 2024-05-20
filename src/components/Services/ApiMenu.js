//Acá estamos solicitando los datos de usuarios de la Api


const getMenuApi = () => {
    //mock api de menus
    return fetch('https://664866dd2bb946cf2fa06d75.mockapi.io/api/v1/MenuSemanal')
    .then(response => response.json())
    .then((data) => {
        //Realmente no hace falta mapeo  <----------------------------------------------------------------
        const CleanData = data.map((item) => {
            return{
                id: item.id,
                name: item.name,
                week: item.weekPlan,
            };
        });
        return CleanData;
    });
};

export default getMenuApi;