export const UIActions = {
  UPDATE_COLOR_THEME: 'UI_UPDATE_COLOR_THEME'
};

export const actions = {
  setColorTheme: (theme) => {
    return {
      type: UIActions.UPDATE_COLOR_THEME,
      payload: theme
    };
  }
};