import requestApi from '../../requestApi/requestApi';

export const addExtraService = (data) => {
  return requestApi({
    url: `/extra`,
    method: 'POST',
    data
  });
};

export const getAllExtraService = () => {
  return requestApi({
    url: `/extra`,
    method: 'GET',
  });
};


export const getSingleExtraService = (id) => {
  return requestApi({
    url: `/extra/${id}`,
    method: 'GET',
  });
};

export const updateExtraService = (id, data) => {
  return requestApi({
    url: `/extra/${id}`,
    method: 'PUT',
    data,
  });
};
