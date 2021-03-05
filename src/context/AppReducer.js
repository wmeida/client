/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
  ////console.log(action.payload)
  switch (action.type) {
    case 'GET_PANELAS':
      return {
        ...state,
        panelas: action.payload,
      };

    case 'GET_PANELASPANELAS':
      //console.log(action.payload)
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
      console.log('sensores', action.payload.sensores);
      return {
        ...state,
        sensores: action.payload.sensores,
      };
    case 'GET_CONFIG':
      console.log('configall', action.payload);
      return {
        ...state,
        config: action.payload,
        cfgprocesso: action.payload.processo,
        cfgpanelas: action.payload.panelas,
        cfgbombas: action.payload.bombas,
        cfgbuzzers: action.payload.buzzers,
      };
    case 'GET_PROCESSO':
      return {
        ...state,
        processo: action.payload,
      };
    default:
      return state;
  }
};
