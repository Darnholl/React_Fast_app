import { createSlice } from "@reduxjs/toolkit";
import professionService from "../services/profession.service";

const professionsSlice = createSlice({
    name: "professions",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null
    },
    reducers: {
        professionsRequest: (state) => {
            state.isLoading = true;
        },
        professionsReceved: (state, action) => {
            state.isLoading = false;
            state.entities = action.payload;
            state.lastFetch = Date.now();
        },
        professionsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = true;
        }
    }
});

const { reducer: professionReducer, actions } = professionsSlice;
const { professionsRequest, professionsReceved, professionsRequestFailed } =
    actions;

function isOutDated(date) {
    if (Date.now() - date > 10 * 60 * 1000) {
        return true;
    }
    return false;
}

export const loadProfessionsList = () => async (dispatch, getState) => {
    const { lastFetch } = getState().professions;
    console.log("prof", lastFetch);
    if (isOutDated(lastFetch)) {
        dispatch(professionsRequest());
        try {
            const { content } = await professionService.get();
            dispatch(professionsReceved(content));
        } catch (error) {
            dispatch(professionsRequestFailed(error.message));
        }
    }
};

export const getProfessions = () => (state) => state.professions.entities;

export const getProfessionsLoadingStatus = () => (state) =>
    state.professions.isLoading;

export const getProfessionsById = (professionsId) => (state) => {
    if (state.professions.entities) {
        let professionsArray = null;
        for (const prof of state.professions.entities) {
            if (prof._id === professionsId) {
                professionsArray = prof;
            }
        }
        // for (const profId of professionsIds) {
        //     for (const prof of state.professions.entities) {
        //         if (prof._id === profId) {
        //             professionsArray.push(prof);
        //             break;
        //         }
        //     }
        // }
        return professionsArray;
    }
    return [];
};

export default professionReducer;
