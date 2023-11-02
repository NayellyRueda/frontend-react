
export const getSearchProducts = async(nameProduct) => {

    const url = `http://localhost:3000/api/items?q=${nameProduct}`;
    const response = await fetch( url, { mode: "no-cors" } );

    console.log('res', response)
    const { data } = await response.json();
    console.log('data',data);
    
    return data;
}