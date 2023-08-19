//1
const myString = "AbCdEfG"
const pat = /aBc/i

function 찾기 (myString, pat) {
    const result = myString.search(pat)
    if (result === -1) {
        return 0
    } else {
        return 1
    }
}

찾기(myString, pat)


//2
const str1 = "ab6CDE443fgh22iJKlmn1o"
const str2 = "6CD"

function 찾기2 (str1, str2) {
    const result = str1.search(str2)
    if (result === -1) {
        return 2
    } else {
        return 1
    }
}

찾기2(str1, str2)
