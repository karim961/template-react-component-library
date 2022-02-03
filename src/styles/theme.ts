import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            white: string;
            lightGrey: string;
            Grey: string;
        };
        fontSizes: {
            regular: number;
            caption: number;

        };
        fonts: string;
    }
}

const theme = {
    colors: {
        white: '#fff',
        lightGrey: '#bbbbbb',
        Grey: '#5D5D5D',
    },

    fontSizes: {
        regular: 1, // 16px
        caption: 0.875, // 14px
        h1: 3, //48px
        h2: 2, // 32px
        h3: 1.875, // 30px
        h4: 1.625, // 26px
        h5: 1.375, // 22px
        h6: 1.125, // 18px
    },
    fonts: 'Source Sans Pro',
};

export default theme;
