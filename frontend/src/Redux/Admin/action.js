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

//add plan

export const addplan=(plan,token)=>(dispatch)=>{
  dispatch({type:types.ADD_PLAN_REQUEST})
  const config = {
  method: 'post',
  url: 'https://protected-meadow-39296.herokuapp.com/plan/post',
  headers: { 
    'Authorization': `bearer ${token}`, 
    'Content-Type': 'application/json'
  },
  data : JSON.stringify(plan)
};

return axios(config)
.then(function (response) {
  dispatch({type:types.ADD_PLAN_SUCCESS})
  return response.data.message
})
.catch(function (error) {
  dispatch({type:types.ADD_PLAN_FAILURE})
  console.log(error);
});
}

//add plan

export const addvideo=(video,token)=>(dispatch)=>{
  dispatch({type:types.ADD_VIDEO_REQUEST})
  const config = {
  method: 'post',
  url: 'https://protected-meadow-39296.herokuapp.com/video/post',
  headers: { 
    'Authorization': `bearer ${token}`, 
    'Content-Type': 'multipart/form-data'
  },
  data : video
};

return axios(config)
.then(function (response) {
  dispatch({type:types.ADD_VIDEO_SUCCESS})
  return response.data.message
})
.catch(function (error) {
  dispatch({type:types.ADD_VIDEO_FAILURE})
  console.log(error);
});
}

//delete plan 

export const deleteplan=(id,token)=>(dispatch)=>{
  dispatch({type:types.DELETE_PLAN_REQUEST})

  const config = {
  method: 'delete',
  url: `https://protected-meadow-39296.herokuapp.com/plan/${id}`,
  headers: { 
    'Authorization': `bearer ${token}`
  }
};

return axios(config)
.then(function (response) {
  dispatch({type:types.DELETE_PLAN_SUCCESS})
return response.data.message
})
.catch(function (error) {
  dispatch({type:types.DELETE_PLAN_FAILURE})
  console.log(error);
});
}

//delete video

export const deletevideo=(id,token)=>(dispatch)=>{
  dispatch({type:types.DELETE_VIDEO_REQUEST})

  const config = {
  method: 'delete',
  url: `https://protected-meadow-39296.herokuapp.com/video/${id}`,
  headers: { 
    'Authorization': `bearer ${token}`
  }
};

return axios(config)
.then(function (response) {
  dispatch({type:types.DELETE_VIDEO_SUCCESS})
return response.data.message
})
.catch(function (error) {
  dispatch({type:types.DELETE_VIDEO_FAILURE})
  console.log(error);
});
}

//update plan 

export const updateplan=(id,plan,token)=>(dispatch)=>{
  dispatch({type:types.UPDATE_PLAN_REQUEST})

  const config = {
  method: 'put',
  url: `https://protected-meadow-39296.herokuapp.com/plan/${id}`,
  headers: { 
    'Authorization': `bearer ${token}`, 
    'Content-Type': 'application/json'
  },
  data : JSON.stringify(plan)
};

return axios(config)
.then(function (response) {
  dispatch({type:types.UPDATE_PLAN_SUCCESS})
  return response.data.message
})
.catch(function (error) {
  dispatch({type:types.UPDATE_PLAN_FAILURE})
  console.log(error);
});
}

//update video 

export const updatevideo=(id,plan,token)=>(dispatch)=>{
  dispatch({type:types.UPDATE_VIDEO_REQUEST})

  const config = {
  method: 'put',
  url: `https://protected-meadow-39296.herokuapp.com/video/${id}`,
  headers: { 
    'Authorization': `bearer ${token}`, 
    'Content-Type': 'multipart/form-data'
  },
  data : (plan)
};

return axios(config)
.then(function (response) {
  dispatch({type:types.UPDATE_VIDEO_SUCCESS})
  return response.data.message
})
.catch(function (error) {
  dispatch({type:types.UPDATE_VIDEO_FAILURE})
  console.log(error);
});
}