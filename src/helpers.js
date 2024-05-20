const capitalizeFirstLetterOfOneWord = (word) => {
    return word
        .replace(/(\B)[^ ]*/g, match => (match.toLowerCase()))
        .replace(/^[^ ]/g, match => (match.toUpperCase()));
};


export const capitalizeFirstLetters = (string) => {
    const acronyms = ["NYC", "BID", "BBQ", "HQ", "DCAS", "FAB", "N", "S", "E", "W", "N/E", "N/W", "S/E", "S/W"]
    const arr = string.split(" ")
    return arr.map(word => {
        return (acronyms.includes(word)) ? word : capitalizeFirstLetterOfOneWord(word)
    }).join(" ")
}

