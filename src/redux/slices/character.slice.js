const {createSlice} = require("@reduxjs/toolkit");

let initialState = {
    characters: [],
    nextPage: null,
    prevPage: null
}

const slice = createSlice({
    name: 'characterSlice', //unique
    initialState,
    reducers: {

        setCharacters: (state, action) => {
            const {result, info: {next, prev}} = action.payload;
            state.characters = result
            state.prevPage = prev
            state.nextPage = next
        }
    }

});

const {reducer: characterReducer, actions} = slice;

const characterActions = {
    ...actions
}

export {characterReducer, characterActions}
