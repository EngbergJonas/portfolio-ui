import { topicList } from '../assets/other/topicList'

export const setTopic = topic => {
  return async dispatch => {
    const index = topicList.map(t => t.name.toLowerCase()).indexOf(topic.name.toLowerCase())
    const nextTopic = topicList[index]
    dispatch({
      type: 'SET_TOPIC',
      data: nextTopic
    })
  }
}

const initialState = topicList[0]

const topicReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOPIC':
      return action.data
    default:
      return state
  }
}

export default topicReducer
