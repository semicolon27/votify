import { ActionType, GlobalStateInterface } from './types';
import { initialState } from './index';

const Reducer = (state: GlobalStateInterface, action: ActionType): any => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        loggedUser: action.payload,
      };
    case 'AUTHENTICATE_USER':
      return {;
        ...state,
  isUserAuthenticated: action.payload,
      };
    case 'SET_PERSISTENCE':
return {
  ...state,
  persistenceType: action.payload,
};
    case 'PURGE_STATE':
return initialState;
    default:
return state;
  }
};

export default Reducer;