// Pure
export const sum = (a: number, b: number): number => a + b;

export const multiply = (a: number, b: number): number => a * b;

export const subtract = (a: number, b: number): number => a - b;

export const divide = (a: number, b: number): number => a / b;

// Impure
const getCurrentDateIso = (): string => new Date().toISOString();

const log = <T>(key: string, value: T): void => {
    console.log(`${key}: ${value}`);
};

const saveToStorage = <T>(key: string, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value));
};

const getFromStorage = (key: string): string | null => {
    return localStorage.getItem(key);
};

const renderString = (selector: string, value: string): void => {
    const element = document.querySelector(selector);
    if (element !== null) {
        element.innerHTML = value;
    }
};

export {};