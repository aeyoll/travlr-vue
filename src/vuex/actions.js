import * as api from '../api'
import * as types from './mutation-types'

export const getAllTravels = ({ dispatch }) => {
  api.getAllTravels(travels => {
    dispatch(types.RECEIVE_TRAVELS, travels)
  })
}
