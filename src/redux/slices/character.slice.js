const {createSlice} = require("@reduxjs/toolkit");

const initialState = {
    characters: [],
    prevPage: null,
    nextPage: null
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
