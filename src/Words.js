import sixWordBank from './WordBanks/six-vwortle-bank.txt';
import fourWordBank from './WordBanks/four-vwortle-bank.txt';
import fiveWordBank from './WordBanks/five-vwortle-bank.txt';

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

export const generateFourWordSet = async () => {
    let wordSet;
    let todaysWord;
    await fetch(fourWordBank).then((response) => response.text())
    .then((result) => {
        const wordArr = result.split("\n")
        todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)]
        wordSet = new Set(wordArr)
    });

    return { wordSet, todaysWord };
}

export const generateFiveWordSet = async () => {
    let wordSet;
    let todaysWord;
    await fetch(fiveWordBank).then((response) => response.text())
    .then((result) => {
        const wordArr = result.split("\n")
        todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)]
        wordSet = new Set(wordArr)
    });

    return { wordSet, todaysWord };
}