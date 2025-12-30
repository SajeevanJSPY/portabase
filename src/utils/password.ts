export function generateValidPassword(length = 12) {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const special = '#?!@$%^&*-';
    const all = upper + lower + numbers + special;

    const getRandomChar = (set: string) => set[Math.floor(Math.random() * set.length)];

    const passwordChars = [
        getRandomChar(upper),
        getRandomChar(lower),
        getRandomChar(numbers),
        getRandomChar(special),
    ];

    for (let i = passwordChars.length; i < length; i++) {
        passwordChars.push(getRandomChar(all));
    }

    for (let i = passwordChars.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [passwordChars[i], passwordChars[j]] = [passwordChars[j], passwordChars[i]];
    }

    return passwordChars.join('');
}