import type { UserState } from "../types/userTypes";
const initialState:UserState={
    users:[],
    loading:false
}
export const userReducer=(
    state=initialState,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    action:any
):UserState=>{
 switch (action.type) {

    case "POST_USER_REQ":
      return { ...state, loading: true };

    case "POST_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        users: action.payload
      };

    default:
      return state;
}
}
