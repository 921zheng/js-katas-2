function getFrequencies(string) {
    if(string.length === 0) return {}
    const counts = {}
    for(let i = 0; i < string.length; i++) {
        if(/\w/.test(string[i])) {
            // first occurrence of the letter
            if(!counts[string[i]]) {
                counts[string[i]] = 1
            } else {
                // second occurrence of the letter
                counts[string[i]] += 1
            }
        }
    }
    return counts;
}

module.exports = getFrequencies;
