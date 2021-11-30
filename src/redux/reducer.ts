import * as actionTypes from "./actionTypes"
import { ItemsState, ItemsAction, toDoListItem } from "./types"

const initialState: ItemsState = {
    items: [{id:0, name:'Call mom', isCompleted:false},
    {id:1, name:'Date 18:00', isCompleted:false},
    {id:2, name:'Buy new shoes', isCompleted:false},]
}

const reducer = (
    state: ItemsState = initialState,
    action: ItemsAction
): ItemsState => {
    const items: toDoListItem[] = state.items
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            const newItem: toDoListItem = {
                id: items.length >= 1 ? items[items.length - 1].id + 1 : 0,
                name: action.payload.name,
                isCompleted: false,
            }
            return {
                ...state,
                items: items.concat(newItem),
            }
        case actionTypes.REMOVE_ITEM:
            const updatedItems: toDoListItem[] = items.filter(
                item => item.id !== action.payload.id
            )
            return {
                ...state,
                items: updatedItems,
            }

        case actionTypes.CHANGE_ITEM_STATE:
            const updatedArray: toDoListItem[] = items.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, isCompleted: !item.isCompleted }
                }
                return item
            }
            )
            return {
                ...state,
                items: updatedArray,
            }
        case actionTypes.RESET_ALL:
            return {
                ...state,
                items: [],
            }
        case actionTypes.REMOVE_COMPLETED_ITEMS:
            const notCompletedItems: toDoListItem[] = items.filter(
                item => item.isCompleted === false
            )
            return {
                ...state,
                items: notCompletedItems,
            }
    }
    return state
}

export default reducer
