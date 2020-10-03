import { createStore } from 'redux'
import todoApp from './reducer'

export const store = createStore(todoApp)