function solution(string) {
    return string.replace(/([A-Z])/g, ' $1') // use method .replace(); I replace letters A-Z to ' A-Z'. place space before A-Z
}
