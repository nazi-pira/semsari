export const alertConstants = {
  SUCCESS: 'ALERT_SUCCESS',
  ERROR: 'ALERT_ERROR',
  CLEAR: 'ALERT_CLEAR'
};

export function alert(state = {}, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: 'success',
        message: action.message
      }
    case alertConstants.ERROR:
      return {
        type: 'error',
        message: action.message
      };
    case alertConstants.CLEAR:
      return {}
    default:
      return state
  }
}

// actions
const success = (message) => {
  return { type: alertConstants.SUCCESS, message };
}

const error = (message) => {
  return { type: alertConstants.ERROR, message };
}

const clear = () => {
  return { type: alertConstants.CLEAR };
}

export const alertActions = {
  success,
  error,
  clear
};
