
export function strToAsciiBinArr(str: string): string {
    return str.split('').map((char) => char.charCodeAt(0).toString(2)).join('x');
}