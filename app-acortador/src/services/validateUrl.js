
const validateUrl = (word) => {

    const regexUrl = /^(http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$%&'\(\)\*\+,;=.]+$/;
    const validateUrl = regexUrl.test(word)

    return validateUrl
    
}

export default validateUrl