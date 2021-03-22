import React, { useCallback } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {MY_PAGE_TOGGLE_REQUEST_ACTION, MY_PAGE_TOGGLE_SUCCESS} from "../reducers/common";

const MyPage = () => {
  const dispatch = useDispatch();
  const { myInformation } = useSelector(state => state.common);

  const onFindInformationHandler = useCallback(() => {
    dispatch(MY_PAGE_TOGGLE_REQUEST_ACTION());
  }, []);

  return (
    <>
      <button onClick={onFindInformationHandler}>내 정보</button>
      {
        myInformation != null && (
          <p>
            {myInformation.name}
          </p>
        )
      }
    </>
  )
}

export default MyPage;