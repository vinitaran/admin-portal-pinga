import requestApi from '../../requestApi/requestApi';

export const uploadFileService = (data) => {
  return requestApi({
    url: `/upload`,
    method: 'POST',
    data
  });
};
