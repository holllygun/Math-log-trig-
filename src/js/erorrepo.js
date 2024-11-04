import{ StatusCodes, getReasonPhrase } from 'http-status-codes';
export default class ErrorRepository {
 constructor() {
    this.errors = new Map();

    for (const code in StatusCodes){
        const numericCode = StatusCodes[code];
        try {
            const description = getReasonPhrase(numericCode);
            this.errors.set(numericCode, description);
        } catch (error) {
            console.error(`Не получена фраза для ошибки ${numericCode}:`, error);
        }
    }
 }

 translate(code){
    return this.errors.get(code) || 'Unknown error';
 }
}