const { configureStore } = require("@reduxjs/toolkit");
const { CounterProductReducer } = require("./reducers/CounterProductReducer");

const store = configureStore({
    reducer: {
        "counterProduct": CounterProductReducer
    }
})

export default store