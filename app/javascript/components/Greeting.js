import React, { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/reducers/greetingsReducer';

const Greeting = () => {
  const dispatch = useDispatch();
  const greetings = useSelector((state) => state.greetings);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return <h2>{greetings.greetings.message}</h2>;
};

export default Greeting;
