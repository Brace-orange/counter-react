
export default (state,action) => {
  if(state==undefined){
    return {"v":0,"a":1,"b":2};
  }
  switch(action.type){
    case "ZENGJIA":
        return {...state,"v":state.v+1};
         break;
    case "JIANSHAO":
        return {...state,"v":state.v-1 };
        break;
    case "ZENGJIASHU":
        return {...state,"v":state.v+action.number};
        break;
  }
  return state;
}
