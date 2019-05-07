export const NAVIGATION_NAVIGATE = 'NAVIGATION_NAVIGATE';
export const NAVIGATION_NAVIGATE_START = 'NAVIGATION_NAVIGATE_START';
export const NAVIGATION_NAVIGATE_END = 'NAVIGATION_NAVIGATE_END';
export const NAVIGATION_BACK = 'NAVIGATION_BACK';
export const NAVIGATION_BACK_START = 'NAVIGATION_BACK_START';
export const NAVIGATION_BACK_END = 'NAVIGATION_BACK_END';

export const navigateAction = (routeName, params) => {
  return {
    type: NAVIGATION_NAVIGATE,
    payload: {
      routeName,
      params,
    },
  }
};

export const backAction = () => {
  return{
    type: NAVIGATION_BACK
  }
};