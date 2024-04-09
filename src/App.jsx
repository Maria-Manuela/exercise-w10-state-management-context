import { ThemeProvider } from "./components/ThemeContext";
import { ThemeToggler } from "./components/ThemeToggler";
import "./styles.css";

export const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>State Management Exercise</h1>
        <p>
          A simple theme switcher where dark/light mode are managed using
          React's useContext.
        </p>
        <ThemeToggler />
      </div>
    </ThemeProvider>
  );
};

/* Finally, integrate the components in the main App.jsx */
