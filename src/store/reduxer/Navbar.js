export const ADD_OPTION = 'add_option';
export const INIT_OPTION = 'init_ooption';

const init = {
	options: [
		{
			label: 'Home',
			url: '/'
		},
		{
			label: 'About',
			url: '/about'
		},
		{
			label: 'Works',
			url: '/works'
		},
		{
			label: 'Tools',
			url: '/tools'
		}
	]
};

const Navbar = (state = init, action) => {
	switch (action.type) {
		case ADD_OPTION:
			return { ...state, options: action.payload };
		case INIT_OPTION:
			return { ...state, options: init.options };
		default:
			return state;
	}
};

export default Navbar;

// action
export const addOption = (option) => (dispatch, getState) => {
	const navOptions = [...getState().Navbar.options, option];
	dispatch({
		type: ADD_OPTION,
		payload: navOptions
	});
};

export const initOption = (option) => (dispatch) => {
	dispatch({
		type: INIT_OPTION
	});
};
