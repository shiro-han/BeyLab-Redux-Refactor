import beyArray from '../api';

export default function rootReducer(
	state = {
        beys: beyArray.map(bey => {
            bey.num_of_clicks = 0;
            return bey;
        }),
        addFormValues: {
            name: '',
            img: '',
        },
        searchValue: ""
    },
	action
) {
	console.log(action)
	switch (action.type) {
		case 'CLICK_BEY':
            let array = [...state.beys];
            let clickedBey = array.find(bey => bey.id === action.id);
            clickedBey.favorite = action.bool;
            clickedBey.num_of_clicks++;
			return {
				...state,
				beys: array
            }
        case 'FORM_CHANGE':
            let newForm = state.addFormValues
            newForm[action.name] = action.value
            console.log(newForm)
            return {
                ...state,
                addFormValues: newForm
            }
        case 'ADD_BEY':
            let newBey = action.newBey;
            newBey.num_of_clicks = 0;
            return {
                ...state,
                beys: [...state.beys, newBey]
            }
        case 'SEARCH':
            return {
                ...state,
                searchValue: action.e.target.value
            }
		default:
			return state;
	}
}
