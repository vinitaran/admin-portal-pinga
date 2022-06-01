import requestApi from '../../requestApi/requestApi'; 

export const LoginService = (data) => {
  console.log("login-proces")
  return requestApi({
    url: `/user/login-admin`,
    method: 'POST',
    data
  });
};


