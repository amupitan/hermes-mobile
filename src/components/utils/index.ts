/**
 * Converts a the first character of a string to uppercase
 * @param str the string to be converted
 * @returns the title-cased string
 */
export const toTitleCase = (str: string) => str.replace(/\w\S*/g, (txt: string) => (txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()));

/**
 * Converts a JS DateTime object to a string of formar hh:mm AM/PM
 * TODO(DEV) don't force 'en-US' locale. Use the user's locale
 * @param time JS DateTime to be converted
 * @returns formatted time string
 */
export const convertTime = (time: Date): string => time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
