// eslint-disable-next-line
export default {
    int: function (...args) {
        const count = args.length;
        const ran = Math.random();
        switch (count) {
            case 0:
                return null;
            case 1:
                return Math.floor(ran * args[0]);
            case 2:
                return Math.floor(ran * (args[1] - args[0]) + args[0]);
            default:
                return null;
        }
    },
    float: function (...args) {
        const count = args.length;
        const ran = Math.random();
        switch (count) {
            case 0:
                return ran;
            case 1:
                return (ran * args[0]);
            case 2:
                return (ran * (args[1] - args[0]) + args[0]);
            default:
                return ran;
        }
    },
    char: (str) => str[Math.floor(Math.random() * str.length)],
    string: function (length, str) {
        let output = '';
        for (let i = 0; i < length; ++i) {
            output = output + str[Math.floor(Math.random() * str.length)];
        }
        return output;
    }
}

export const lowerCaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
export const upperCaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const number = '0123456789';
export const symbol = '!@#$%^&*()_+=-{}[]/.><;:'

export const ALL = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+=-{}[]/.><;:';