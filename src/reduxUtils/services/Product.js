import requestApi from '../../requestApi/requestApi';

export const addProduct = (data) => {
  return requestApi({
    url: `/product`,
    method: 'POST',
    data
  });
};

export const getAllProduct = () => {
  return requestApi({
    url: `/product`,
    method: 'GET',
  });
};

export const updateProduct = (id, data) => {
  return requestApi({
    url: `/product/${id}`,
    method: 'PUT',
    data,
  });
};
