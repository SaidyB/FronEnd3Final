export const reducer = (state, action) => {
    switch(action.type){
        case 'SET_LIST':
            return {...state, doctorList: action.payload}
        case 'SET_FAVS':
            return {...state, favoritos: [...state.favoritos, action.payload]}
        case 'DELETE_FAVS':
            if(state.favoritos.map((doc)=> doc.id===action.payload)){
                return{...state, favoritos: [...state.favoritos.filter(item=>item.id!=action.payload)]}
            }
        case 'CHANGE_THEME':
            return {...state, dark: action.payload}
         
    }
}