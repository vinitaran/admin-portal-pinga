import requestApi from '../../requestApi/requestApi'; 

export const signup = (data) => {
  console.log("signup-proces")
  return requestApi({
    url: `/user/signup`,
    method: 'POST',
    data
  });
};


