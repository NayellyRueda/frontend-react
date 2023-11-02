export const useFormatPrice = () => {
    let formater = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return formater

}