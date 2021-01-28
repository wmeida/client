/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
  switch (action.type) {
    case 'GET_PANELAS':
      return {
        ...state,
        panelas: action.payload,
      };

    case 'GET_BOMBAS':
      return {
        ...state,
        bombas: action.payload,
      };
    case 'GET_BUZZERS':
      return {
        ...state,
        buzzers: action.payload,
      };
    default:
      return state;
  }
};
