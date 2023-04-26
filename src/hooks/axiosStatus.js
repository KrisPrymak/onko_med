
export const setPending = (state) => {
    state.status = "pending";
    state.error = null;
  };
  
  export const setRejected = (state, action) => {
    state.status = "rejected";
    state.error = action.payload;
  };
  
  export const setFulfilled = (state) => {
    state.status = "resolved";
  };
  