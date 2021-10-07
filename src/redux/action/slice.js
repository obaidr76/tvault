import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment'; 
import { act } from 'react-dom/test-utils';
import AllSafes from '../../pages/safe/safefolder/AllSafes';

var currentDate = moment().format("DD/MM/YYYY");  
const slice = createSlice({
    name:'todos',
    initialState:[
    ],
    reducers:{
        addState: (state, action) => {
            const newState = {
                id: Math.random(),
                SafeName: action.payload.SafeName,
                Owner: action.payload.Owner,
                Typeof: action.payload.Typeof,
                Desc: action.payload.Desc,
                Date: currentDate,
                Folder: []
            };
            state.push(newState);
        },
        EditFolderState: (state, action) => {
            
            state.map((s) =>
            s.id === action.payload.ElementID ? {
              ...s, Folder: [...s.Folder, s.Folder.push(action.payload.secret.name)]
            } : s );
        },

        EditState: (state, action) => {
            const updatedState = state.filter((contact) =>
            contact.id === action.payload.id
            ? Object.assign(contact, action.payload)
            : contact
            );
            state = updatedState;
            {/*    
            const updatedState = {
                id: action.payload.id,
                SafeName: action.payload.SafeName,
                Owner: action.payload.Owner,
                Typeof: action.payload.Typeof,
                Desc: action.payload.Desc,
                Date: currentDate
            };
            state.map((search) => {
                if(search.id === action.payload.id){
                    state.setState(updatedState);
                };
            })
        */}
        },
        deleteSafe: (state, action) => {
            return state.filter((AllSafes) => AllSafes.id !== action.payload.id);
        }
    },
});

export const { addState, deleteSafe, EditState, EditFolderState } = slice.actions;
export default slice.reducer;