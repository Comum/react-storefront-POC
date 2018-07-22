import { values } from './style-guide';

const globalStyle = `
    html,
    body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    input {
        width: calc(100% - 20px);
        height: 30px;
        padding: 0 8px;
        border-radius: ${values.borders["$border-radius"]};
    }

    ul {
        margin: 0;
        padding: 0;

        list-style-type: none;
    }

    a {
        text-decoration: none;
        color: ${values.colours["$dropdown-entry-color"]};
    }
`;

export {
    globalStyle
};