const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
  },
};

//(이전상태, action)=>다음상태
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        user: { ...state.user, isLoggedIn: true },
      };
  }
};

export default rootReducer;
