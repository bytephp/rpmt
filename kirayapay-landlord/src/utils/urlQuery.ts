export default function jsonToQueryString<U extends Record<string, unknown>>(
    json: U
) {
    for (const key in json) {
        if (json.hasOwnProperty(key) && json[key] === "") {
            delete json[key];
        }
    }
    return '?' + Object.keys(json).map(key => key + '=' + json[key]).join('&')
}
