import React, { Component } from "react";
//import CacheBuster from "./CacheBuster";
// import SignIn from "./SignIn";
import "./App.css";

var CACHE_NAME = "my-cache_name";
var targetsToCache = ["/styles/myStyles.scss", "www.stackoverflow.com/"];

class App extends Component {
  componentDidMount() {
    document.addEventListener("install", function (event) {
      event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
          return cache.addAll(targetsToCache);
        })
      );
    });
  }
  render() {
    return (
      // <CacheBuster>
      //   {({ loading, isLatestVersion, refreshCacheAndReload }) => {
      //     if (loading) return null;
      //     if (!loading && !isLatestVersion) {
      //       refreshCacheAndReload();
      //     }

      //     return (
      //       <div className="App">
      //         <header className="App-header">
      //           <h1>Cache Busting - Example</h1>
      //           <p>
      //             Bundle version - <code>v{global.appVersion}</code>
      //           </p>
      //         </header>
      //         Form Added
      //         <SignIn />
      //       </div>
      //     );
      //   }}
      // </CacheBuster>
      <h1>app load</h1>
    );
  }
}

export default App;
