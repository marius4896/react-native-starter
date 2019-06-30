import AppNavigation from 'src/navigation/index';

export const reducer = (state, action) => {
    const newState = AppNavigation.router.getStateForAction(action, state);
    return newState || state
};
