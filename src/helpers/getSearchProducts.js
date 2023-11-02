
export const getSearchProducts = async(nameProduct) => {

    const url = `http://localhost:3000/api/items?${nameProduct}`;
    const response = await fetch( url );

    const data = await response.json();
    return data;
}