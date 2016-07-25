import * as api from '../api'
import * as types from './mutation-types'

export const getAllTravels = ({ dispatch }) => {
  api.getAllTravels(travels => {
    dispatch(types.RECEIVE_TRAVELS, travels)
  })
}

export const addTravel = ({ dispatch }, ...args) => {
  dispatch(types.ADD_TRAVEL, ...args)
}

export const deleteTravel = ({ dispatch }, ...args) => {
  dispatch(types.DELETE_TRAVEL, ...args)
}

export const editTravel = ({ dispatch }, ...args) => {
  dispatch(types.EDIT_TRAVEL, ...args)
}

