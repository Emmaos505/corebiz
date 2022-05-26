export const priceFormatted = (price) => {
    if (!price) return;
    let priceWithDecimals = (price / 100).toFixed(2);
    priceWithDecimals = priceWithDecimals.replace(/\./g, ',');
    return `$ ${priceWithDecimals}`;
};