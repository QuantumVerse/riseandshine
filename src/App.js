import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div
      style={{
        marginTop: "3% ",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <img
        style={{ maxWidth: "50%", marginLeft: "25%" }}
        src="https://firebasestorage.googleapis.com/v0/b/rise-and-shine-trust.appspot.com/o/UnderMaintenance.svg?alt=media&token=48d4e521-6dc3-45a7-baec-08f98ac738e6"
      ></img>
      <h3
        style={{
          textAlign: "center",
        }}
      >
        Ooops!! This website is under maintenance
      </h3>
    </div>
  );
}

export default App;
