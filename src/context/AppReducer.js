export default (state, action) => {
  switch (action.type) {
    case 'GET_CONFIG':
      return {
        ...state,
        config: action.payload
      }
    default:
      return state
  }
}