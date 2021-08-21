import React, { Fragment, useState } from "react";

import { Header } from "./components/Header/Header";

import { Footer } from "./components/Footer/Footer";

import { UserList } from "./components/UserList/UserList";

import "./App.css";

function App() {
  const [isListView, setIsListView] = useState(true);
  const onLayoutChange = () => setIsListView(!isListView);
  return (
    <Fragment>
      <Header isListView={isListView} onLayoutChange={onLayoutChange} />
      <UserList isListView={isListView} />
      <Footer />
    </Fragment>
  );
}

export default App;