const price = 1234.567;
const formattedPrice = price.toLocaleString('en',{
    style: 'currency',
    currency: 'USD'
})

console.log(formattedPrice);

const formattedPriceBR = price.toLocaleString('br',{
    style: 'currency',
    currency: 'BRL'
})

console.log(formattedPriceBR);