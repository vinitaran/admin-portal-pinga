import requestApi from '../../requestApi/requestApi';

export const addOrderService = (data) => {
  return requestApi({
    url: `/order`,
    method: 'POST',
    data
  });
};

export const getAllOrderService = () => {
  return requestApi({
    url: `/order`,
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
