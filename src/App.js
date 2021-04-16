import React, { Component } from "react";
import CacheBuster from "./CacheBuster";
import SignIn from "./SignIn";
import "./App.css";

var CACHE_NAME = 'my-cache_name';
var targetsToCache = [
  '/styles/myStyles.scss',
  'www.stackoverflow.com/'
];

document.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(targetsToCache);
      })
  );
});
class App extends Component {



  render() {
    return (
      <CacheBuster>
        {({ loading, isLatestVersion, refreshCacheAndReload }) => {
          if (loading) return null;
          if (!loading && !isLatestVersion) {
            refreshCacheAndReload();
          }

          return (
            <div className="App">
              <header className="App-header">
                <h1>Cache Busting - Example</h1>
                <p>
                  Bundle version - <code>v{global.appVersion}</code>
                </p>
              </header>
              Form Added
              <SignIn />
            </div>
          );
        }}
      </CacheBuster>
    );
  }
}

export default App;
