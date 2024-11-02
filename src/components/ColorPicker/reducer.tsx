export type RGBColorType = {
    red: number;
    green: number;
    blue: number;
}
export type Action = {
    type: "adjust_red" | "adjust_green" | "adjust_blue",
    payload: number;
}

const reducer = (state: RGBColorType, action: Action) => {
    switch (action.type) {
        case "adjust_red": return { ...state, red: action.payload };
        case "adjust_green": return { ...state, green: action.payload }
        case "adjust_blue": return { ...state, blue: action.payload }
        default: return state;
    }
};

export default reducer;
