import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name

            const sortByName = (a: UserType, b: UserType) => {
                return (a.name > b.name) ? 1 : -1
            }
            const sortedUsers = state.map(u => ({...u})).sort(sortByName)

            return action.payload === "up"
                ? sortedUsers
                : sortedUsers.reverse()// need to fix
        }
        case 'check': {
            return state.filter(user => user.age >= 18) // need to fix
        }
        default:
            return state
    }
}
