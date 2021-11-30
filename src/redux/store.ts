import { createStore, Store } from "redux"
import  reducer from './reducer' 
import { ItemsState, ItemsAction, DispatchType} from "./types"

const store: Store<ItemsState, ItemsAction> & {
  dispatch: DispatchType
} = createStore(reducer)


export default store