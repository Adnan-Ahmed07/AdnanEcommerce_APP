import { call, put, takeEvery } from "redux-saga/effects";
import { setData, setError, setLoading } from "./slice";
import { fetchCategoriesData } from "./api";
import { GET_CATEGORIES } from "./constants";

function* fectchCategoriesApiData():any{ 
  try{ 
    yield put(setLoading())
    const data=yield call(fetchCategoriesData)
    yield put(setData(data))
  }catch(error:any){ 
    yield put(setError(error.message))
  }
}

function* categoriesSaga() {
  yield takeEvery(GET_CATEGORIES, fectchCategoriesApiData);

}
export default categoriesSaga;