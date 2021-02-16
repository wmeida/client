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
      console.log(action.payload)
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
    case 'GET_CONFIG':
      return {
        ...state,
        config: action.payload,
      };
    case 'GET_PROCESSO':
      console.log(action.payload)
      return {
        ...state,
        processo: action.payload,
      };
    default:
      return state;
  }
};
