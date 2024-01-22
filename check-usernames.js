function checkUsernames(names) {
    for (let i = 0; i < names.length; i++) {
        if(names[i].toLowerCase() !== names[i]) {
            return false
        }
        if (/\W/.test(names[i])) {
            return false
        }
        if(names[i].length < 5 || names[i].length > 20) {
            return false
        }
    }
    return true
}

module.exports = checkUsernames;

