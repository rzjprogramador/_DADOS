export function validNome(target: string): Boolean {
    return target.length < 2 || '' ? false : true
}

export function handleNome(target: string) {
    const transform = target.toUpperCase()
    return transform
}