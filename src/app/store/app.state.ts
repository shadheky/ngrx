import { createAction, createReducer, on } from "@ngrx/store"

export interface AppState {
    nav: {path:string, text: string}
}

export const appInitialState:AppState = {
    nav : {
        path: 'teste/tester', text:'teste module'
    }
}

export const trocaNavHome = createAction('[App] Troca para home' );
export const trocaNavTeste = createAction('[App] Troca para teste' );

export const appReducer = createReducer(
    appInitialState, 
    on(trocaNavHome, (state) => {
        state = {
            ...state, 
            nav: {
                path: 'teste/tester',
                text: 'teste module'
            }
        }
        return state
    }), 
    on (trocaNavTeste, (state) => {
        state = {
            ...state, 
            nav: {
                path: '/',
                text: 'App module'
            }
        }
        return state
    })
)