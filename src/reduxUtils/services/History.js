import requestApi from '../../requestApi/requestApi';

// export const getAllProductService = () => {
//   return requestApi({
//     url: `/followup/notification`,
//     method: 'POST',
//     data:{
//       "notification_type": "new",
//     }
//   });
// };

export const getUserDetails = (patientNumber) => {
  return requestApi({
    url: `/consult/filter`,
    method: 'POST',
    data: {
      "patient_mobile": patientNumber
    }
  });
};

export const submitConsult = (data) => {
  return requestApi({
    url: `/consult`,
    method: 'POST',
    data
  });
};
