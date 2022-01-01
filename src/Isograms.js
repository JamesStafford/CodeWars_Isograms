export function IsogramCheck(isogram) {
    if (!isogram) {
        return true
    }

    const characterList = [];

    for(const character of isogram) {
        const lowerCaseCharacter = character.toLowerCase();
        if (characterList.length > 0 && characterList.includes(lowerCaseCharacter)) {
            return false
        } else {
            characterList.push(lowerCaseCharacter);
        }
    }
    return true;
}
