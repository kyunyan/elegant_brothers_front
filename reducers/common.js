import axios from "axios";

const initialState = {
  myPageLoading: false,
  myPageDone: false,
  myPageError: null,
  myInformation: null,
}

export const MY_PAGE_TOGGLE_REQUEST = "MY_PAGE_TOGGLE_REQUEST";
export const MY_PAGE_TOGGLE_SUCCESS = "MY_PAGE_TOGGLE_SUCCESS";
export const MY_PAGE_TOGGLE_FAILURE = "MY_PAGE_TOGGLE_FAILURE";

export const MY_PAGE_TOGGLE_REQUEST_ACTION = () => ({
  type: MY_PAGE_TOGGLE_REQUEST
})

export const MY_PAGE_TOGGLE_SUCCESS_ACTION = (data) => ({
  type: MY_PAGE_TOGGLE_SUCCESS,
  data
})
export const MY_PAGE_TOGGLE_FAILURE_ACTION = (data) => ({
  type: MY_PAGE_TOGGLE_FAILURE,
  data
})


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MY_PAGE_TOGGLE_REQUEST:
      return {
        myPageLoading: true,
      }
    case MY_PAGE_TOGGLE_SUCCESS:
      return {
        myPageLoading: false,
        myPageDone: true,
        myInformation: action.data
      }
    case MY_PAGE_TOGGLE_FAILURE:
      return {
        myPageError: action.data,
        myInformation: null,
      }
    default :
      return state;
  }
}

export default reducer;