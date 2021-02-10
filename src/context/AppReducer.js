/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
  //console.log(action.payload)
  switch (action.type) {

    case 'GET_PANELAS':

      return {
        ...state,
        panelas: action.payload,

      };

    case 'GET_PANELASPANELAS':

      return {
        ...state,
        panelaspanelas: action.payload,

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
    case 'GET_SENSORES':
      return {
        ...state,
        sensores: action.payload,
      };
    default:
      return state;
  }
};
