interface Action {
    type: string;
}

const counterReducers = (state: number, action: Action) => {
    if (action.type === "INCREMENT") return state + 1;
    if (action.type === "RESET") return 0;
    return state;
}

export default counterReducers;