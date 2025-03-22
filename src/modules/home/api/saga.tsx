import { fetchApiData } from "./api";
import { GET_HOME_CONTENT } from "./constants";
import { setData, setError, setLoading } from "./slice";
import { call, put, takeEvery } from 'redux-saga/effects';

function* fetchApiDataSaga() {
    try {
        yield put(setLoading());
        const data: unknown = yield call(fetchApiData);
        yield put(setData(data));
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        yield put(setError(message));
    }
}

function* homeSaga() {
    yield takeEvery(GET_HOME_CONTENT, fetchApiDataSaga);
}

export default homeSaga;