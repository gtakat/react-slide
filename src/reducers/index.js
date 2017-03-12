import * as types from '../constants/ActionTypes'
import { MAX_PAGE } from '../components/Slide'

const initialState = () => {
  return {
    page: 0
  }
}

const reducer = (state=null, action) => {
  if (state == null) {
    return initialState()
  }

  switch(action.type){
    case types.NEXT_PAGE:
      if (state.page < MAX_PAGE) {
        return Object.assign({}, state, {
          page: state.page + 1
        })
      }
      break;

    case types.PREV_PAGE:
      if (state.page > 0) {
        return Object.assign({}, state, {
          page: state.page - 1
        })
      }
      break;

    default:
      break;
  }

  return state
}

export default reducer