import { useTheme } from "./ThemeContext";

export const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "dark" ? "light" : "dark"} mode
    </button>
  );
};

/* Step: 2 Implement Theme Toggler: Create a component to toggle between light and dark themes. */
