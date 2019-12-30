import React from 'react';

//components
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import StageList from './components/StageList';
// import AppList from './components/AppList';
// import EventList from './components/EventList';
import SearchStages from './components/SearchStages';
import SearchApps from './components/SearchApps';
import SearchEvents from './components/SearchEvents';


function App() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <Navbar />
      <Header />
      {/* <EventList /> */}
      <SearchEvents />
      {/* <StageList /> */}
      <SearchStages />
      {/* <AppList /> */}
      <SearchApps />
      <Footer />

    </>
  );
}

export default App;
