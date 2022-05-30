import requestApi from '../../requestApi/requestApi';


export const getSingleDashboardService = (id) => {
  return requestApi({
    url: `/dashboard`,
    method: 'GET',
  });
};

