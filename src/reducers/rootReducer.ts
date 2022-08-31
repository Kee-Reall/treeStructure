import { randomData as rd } from '../helpers/data';

const randomData = rd()



const rootInitialState: any = {
    data: randomData
}

function rootReducer(state = rootInitialState, action: any) {

    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'ADD_STATUS':
            state.data.status = false
            return {
                ...state,
                
            }
        default:
            return state;
    }
}

export default rootReducer;
