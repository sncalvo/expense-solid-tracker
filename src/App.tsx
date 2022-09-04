import { Component, createEffect } from 'solid-js';
import { Routes, Route, Navigate } from '@solidjs/router';

import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Receipts from './pages/receipts';

import { token } from './store/authToken';

const App: Component = () => {
  return (
    <Routes>
      {token() ? (
        <>
          <Route path="/receipts">
            <Route path="/" component={Receipts} />
          </Route>
          <Route path="/" component={Home} />
          <Route path="/signIn">
            <Navigate href="/" />
          </Route>
        </>
      ) : (
        <>
          <Route path="/signIn" component={SignIn} />

          <Route path="*">
            <Navigate href="/signIn" />
          </Route>
        </>
      )}
    </Routes>
  );
};

export default App;
