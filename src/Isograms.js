export function IsogramCheck(isogram) {
    if (!isogram) {
        return true
    }

    const characterList = [];

    for(const character of isogram) {
        if (characterList.length > 0 && characterList.includes(character)) {
            return false
        } else {
            characterList.push(character);
        }
    }
    return true;
}
