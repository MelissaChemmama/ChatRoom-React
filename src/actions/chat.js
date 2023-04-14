export const addInputValue = (newValue) => ({
  type: "CHANGE_INPUT_VALUE",
  newValue,
});

export const addMessage = () => ({
  type: "ADD_MESSAGE"
});

export const toggleSettingsDisplay = () => ({
  type: "TOGGLE_DISPLAY_SETTINGS"
})
