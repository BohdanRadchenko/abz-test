import React, { useEffect } from 'react';
import { Banner, Header, Register, Users } from "modules";
import { useDispatch } from "stores/hooks";
import { handleUserTokenGet } from "../stores/user/userOperations";

export const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(handleUserTokenGet())
  }, [])

  return (
    <div className="app">
      <Header/>
      <Banner/>
      <Users/>
      <Register/>
    </div>
  )
}
