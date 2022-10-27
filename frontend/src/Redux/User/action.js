import * as types from "./action.types"
import axios from "axios"

//get all plan

export const getAllPlan=()=>(dispatch)=>{
    dispatch({type: types.GET_ALL_PLAN_REQUEST})
  const config = {
  method: 'get',
  url: 'https://protected-meadow-39296.herokuapp.com/plan',
  headers: { }
};

axios(config)
.then(function (response) {
  dispatch({type:types.GET_ALL_PLAN_SUCCESS,payload:response.data.data})
})
.catch(function (error) {
  console.log(error);
  dispatch({type:types.GET_ALL_PLAN_FAILURE})

});
}

//get all video

export const getAllVideo=()=>(dispatch)=>{
    dispatch({type: types.GET_ALL_VIDEO_REQUEST})
  const config = {
  method: 'get',
  url: 'https://protected-meadow-39296.herokuapp.com/video',
  headers: { }
};

axios(config)
.then(function (response) {
  dispatch({type:types.GET_ALL_VIDEO_SUCCESS,payload:response.data.data})
})
.catch(function (error) {
  console.log(error);
  dispatch({type:types.GET_ALL_VIDEO_FAILURE})

});
}

//get my plan 

export const getMyPlan=(id)=>(dispatch)=>{
    dispatch({type: types.GET_MY_PLAN_REQUEST})
  const config = {
  method: 'get',
  url: `https://protected-meadow-39296.herokuapp.com/buy/${id}`,
  headers: { }
};

axios(config)
.then(function (response) {
  dispatch({type:types.GET_MY_PLAN_SUCCESS,payload:response.data.data})
})
.catch(function (error) {
  console.log(error);
  dispatch({type:types.GET_MY_PLAN_FAILURE})
});
}

//buy plan
export const buyplan=(plan)=>(dispatch)=>{
  dispatch({type: types.BUY_PLAN_REQUEST})
  const config = {
  method: 'post',
  url: 'https://protected-meadow-39296.herokuapp.com/buy/post',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : JSON.stringify(plan)
};

return axios(config)
.then(function (response) {
  dispatch({type: types.BUY_PLAN_SUCCESS})
  return response.data
})
.catch(function (error) {
  dispatch({type: types.BUY_PLAN_FAILURE})
  console.log(error);
});
}

//delete my plan

export const deleteMyPlan=(id)=>(dispatch)=>{
  dispatch({type:types.DELETE_MY_PLAN_REQUEST})

  const config = {
  method: 'delete',
  url: `https://protected-meadow-39296.herokuapp.com/buy/${id}`,
  headers: { }
};

return axios(config)
.then(function (response) {
  dispatch({type:types.DELETE_MY_PLAN_SUCCESS})
  return response.data.message
})
.catch(function (error) {
  dispatch({type:types.DELETE_MY_PLAN_FAILURE})
  console.log(error);
});
}