function countVeg(vegetables, type) {
    let sum = 0;
    const types = vegetables.filter((veg) => veg.type === type)
    for(let i = 0; i < types.length; i++) {
        sum += types[i].quantity
    }
    return sum;
}

module.exports = countVeg;
