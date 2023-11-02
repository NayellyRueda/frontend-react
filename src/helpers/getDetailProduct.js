export const getDetailProduct = async(id) => {

    const url = `http://localhost:3000/api/items/${id}`;
    const response = await fetch( url, { mode: "no-cors" } );

    console.log('res', response)
    const { data } = await response.json();
    console.log('data',data);
    
    return data;
}