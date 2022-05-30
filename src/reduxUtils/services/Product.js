import requestApi from '../../requestApi/requestApi';

export const addProductService = (data) => {
  return requestApi({
    url: `/product`,
    method: 'POST',
    data
  });
};

// export const getAllProductService = () => {
//   return requestApi({
//     url: `/followup/notification`,
//     method: 'POST',
//     data:{
//       "notification_type": "new",
//     }
//   });
// };

export const getAllProductService = () => {
  return requestApi({
    url: `/product`,
    method: 'GET',
  });
};


export const getSingleProductService = (id) => {
  return requestApi({
    url: `/product/${id}`,
    method: 'GET',
  });
};

export const updateProductService = (id, data) => {
  return requestApi({
    url: `/product/${id}`,
    method: 'PUT',
    data,
  });
};
