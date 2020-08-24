import { useContext, useCallback } from 'react';
import { UIContext } from '../../store/ui/uiContext';
import { UITypes } from '../../store/ui/uiReducer';

function useTitle() {
  const { dispatch } = useContext(UIContext);

  const setTitle = useCallback(
    (title: string) => {
      dispatch({
        type: UITypes.SET_TITLE,
        payload: title,
      });
    },
    [dispatch]
  );
  return setTitle;
}

export default useTitle;
