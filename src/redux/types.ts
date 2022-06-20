export interface ItemsState {
    items: toDoListItem[]
}

export interface toDoListItem {
    id: number,
    name: string,
    isCompleted: boolean
}

export type ItemsAction = {
    type: string
    payload: any
}

export type ItemsActionWithoutPayload = {
    type: string
}

export type ItemsActionWithId = {
    type: string
    payload: { id: number }
}

export type ItemsActionWithName = {
    type: string
    payload: { name: string | null}
}

export type DispatchType = (args: ItemsAction) => ItemsAction