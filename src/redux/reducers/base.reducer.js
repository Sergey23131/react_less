export const baseReducer = (state = 0, {type, payload}) => {
    switch (type) {
        case "INC":
            return state += payload;
        case "DEC":
            return state -= payload;

        case "RESET":
            return 0;

        default:
            return state;

    }
}
