import { createContext, useContext, useEffect, useReducer, useState} from "react";
import { reducer } from "./reducers/reducer";
import axios from "axios";

const DoctorStates= createContext();

// const localSFavoritos = JSON.parse(localStorage.getItem('favoritos'))
const lsFavoritos= JSON.parse(localStorage.getItem('favoritos'))

const initialState ={
    favoritos: lsFavoritos || [],
    doctorList: [],
    dark: false,
}


const Context = ({children}) =>{
    const [state, dispatch]= useReducer(reducer, initialState)
    
    useEffect(()=>{
        axios('https://jsonplaceholder.typicode.com/users')
        .then(res => dispatch({type: 'SET_LIST', payload: res.data}))
    },[])

    useEffect(() => {
        localStorage.setItem('favoritos', JSON.stringify(state.favoritos))
    }, [state.favoritos])

    



    return (
        <DoctorStates.Provider value={{state,dispatch}}>
            {children}
        </DoctorStates.Provider>
    )
}

export default Context
export const useDoctorStates= () => useContext(DoctorStates)
