import { createAction, handleActions } from 'redux-actions'
import { combineReducers } from 'redux'
import { takeEvery, put, call } from 'redux-saga/effects'
import * as PodcastsManager from './PodcastsManager'

export const requestPodcasts = createAction('REQUEST_PODCASTS')
const fetchPodcasts = createAction('FETCH_PODCASTS')

const podcasts = handleActions(
  {
    [requestPodcasts]: ({state}) => state,
    [fetchPodcasts]: (_, { payload }) => payload,
  },
  {},
)

export const podcastsList = combineReducers({ podcasts })

export function* watchFetchPodcasts() {
  yield takeEvery(requestPodcasts, fetchPodcastsAsync)
}

function* fetchPodcastsAsync() {
  const podcasts = yield call(PodcastsManager.podcastRequest)
  yield put(fetchPodcasts(podcasts))
}

export const getPodcasts = state => {
  return state.podcastsList.podcasts
}
