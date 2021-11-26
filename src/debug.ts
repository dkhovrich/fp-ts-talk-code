export const debug = <T>(key: string) => (value: T): T => {
    console.log(`DEBUG:${key} : ${value}`);
    return value;
}