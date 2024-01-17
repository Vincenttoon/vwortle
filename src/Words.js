import sixWordBank from './six-vwortle-bank.txt';
export const boardDefault = [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
]

export const generateWordSet = async () => {
    let wordSet;
    let todaysWord;
    await fetch(sixWordBank).then((response) => response.text())
    .then((result) => {
        const wordArr = result.split("\n")
        todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)]
        wordSet = new Set(wordArr)
    });

    return { wordSet, todaysWord };
}