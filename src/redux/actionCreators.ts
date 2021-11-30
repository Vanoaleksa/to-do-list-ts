import * as actionTypes from "./actionTypes"
import { ItemsActionWithoutPayload, ItemsActionWithId, ItemsActionWithName } from './types'

export function addItem(payload: { name: string | null  }) {
    const action: ItemsActionWithName = {
        type: actionTypes.ADD_ITEM,
        payload,
    }

    return action
}

export function removeItem(payload: { id: number }) {
    const action: ItemsActionWithId = {
        type: actionTypes.REMOVE_ITEM,
        payload,
    }
    return action
}

export function changeItemState(payload: { id: number }) {
    const action: ItemsActionWithId = {
        type: actionTypes.CHANGE_ITEM_STATE,
        payload,
    }
    return action
}


export function removeCompletedItems() {
    const action: ItemsActionWithoutPayload = {
        type: actionTypes.REMOVE_COMPLETED_ITEMS,
    }
    return action
}


export function resetAll() {
    const action: ItemsActionWithoutPayload = {
        type: actionTypes.RESET_ALL,
    }
    return action
}