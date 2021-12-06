import requestApi from '../../requestApi/requestApi';

export const addCustomerService = (data) => {
  return requestApi({
    url: `/user`,
    method: 'POST',
    data
  });
};

export const getAllCustomerService = () => {
  return requestApi({
    url: `/user`,
    method: 'GET',
  });
};

export const getSingleCustomerService = (id) => {
  return requestApi({
    url: `/user`,
    method: 'GET',
    id
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
