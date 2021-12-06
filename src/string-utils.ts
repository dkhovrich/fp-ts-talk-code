export const valueToString = (value: number): string => `Value: ${value}`;

export function stringHash(value: string): number {
    let hash = 0;
    let i: number;
    let chr: number;
    for (i = 0; i < value.length; i += 1) {
        chr = value.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}