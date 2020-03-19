import { SEARCH } from '../actions/actionTypes';
import { rejected, fulfilled, pending } from '../../helpers/utils/action.utils';

const initialState = {
	data: '',
	error: ''
};

const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case pending(SEARCH):
			return {
				...state
			};
		case fulfilled(SEARCH):
			return {
				...state,
				data: action.payload.data.data.rows
			};
		case rejected(SEARCH):
			return {
				...state,
				error: action.payload.response.data.message
			};
		default:
			return state;
	}
};

export default searchReducer;
