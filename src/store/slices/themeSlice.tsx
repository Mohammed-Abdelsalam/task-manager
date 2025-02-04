import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  darkMode: boolean;
}

// Load the stored theme from localStorage
const storedTheme = localStorage.getItem("theme");

// Set the initial state based on the stored theme
const initialState: ThemeState = {
  darkMode: storedTheme === "dark",
};

// Apply the theme to the document based on the initial state
if (initialState.darkMode) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    // Toggle between dark and light theme
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;

      // Save the current theme in localStorage
      localStorage.setItem("theme", state.darkMode ? "dark" : "light");

      // Update the document's theme class
      if (state.darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
