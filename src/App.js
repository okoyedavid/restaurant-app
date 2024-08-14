import "./App.css";
import LocationProvider from "./components/common/LocationProvider";
import RoutesWithAnimation from "./components/common/RoutesWithAnimation";

function App() {
  return (
    <div className="App">
      <LocationProvider>
        <RoutesWithAnimation />
      </LocationProvider>
    </div>
  );
}

export default App;
