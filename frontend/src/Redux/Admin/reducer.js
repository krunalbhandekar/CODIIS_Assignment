import * as types from "./action.types"
const initialState={
  isLoading: false,
  isError: false,
  allPlan: [],
  allvideo:[],
}

export const reducer=(state=initialState,action)=>{
    let {type,payload}=action
    switch(type){

        //get all plan
        case types.GET_ALL_PLAN_REQUEST:{
            return {...state,isLoading:true,isError:false}
        }

        case types.GET_ALL_PLAN_SUCCESS:{
            return {...state,isLoading:false,isError:false,allPlan:payload}
        }

        case types.GET_ALL_PLAN_FAILURE: {
            return { ...state, isLoading: false, isError: true };
        }

        //get all video
        case types.GET_ALL_VIDEO_REQUEST:{
            return {...state,isLoading:true,isError:false}
        }

        case types.GET_ALL_VIDEO_SUCCESS:{
            return {...state,isLoading:false,isError:false,allvideo:payload}
        }

        case types.GET_ALL_VIDEO_FAILURE: {
            return { ...state, isLoading: false, isError: true };
        }


        default: {
            return state;
        }
    }
}