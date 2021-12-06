import requestApi from '../../requestApi/requestApi';


export const getAllInventoryService = () => {
  return requestApi({
    url: `/inventory`,
    method: 'GET',
  });
};


export const getSingleInventoryService = (id) => {
  return requestApi({
    url: `/inventory/product/${id}`,
    method: 'GET',
  });
};

