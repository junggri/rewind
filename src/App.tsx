import React, {useEffect} from 'react';
import {AppDispatch, RootState} from "@/redux/store";
import {increase} from "@/redux/state/testSlice";
import {useAppDispatch, useAppSelector} from "@/redux/hook";

function App() {
  const test = useAppSelector((state)=> { return state.test.value });
  console.log(test)
  
  const dispatch: AppDispatch = useAppDispatch()

  useEffect(() => {
    dispatch(increase())
  }, []);

  return (
      <div>1123</div>
  );
}

export default App;
