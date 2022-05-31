// import React, { lazy, useState,useEffect} from 'react'
// import {
//   CWidgetDropdown,
//   CRow,
//   CCol,
//   CDropdown,
//   CDropdownMenu,
//   CDropdownItem,
//   CDropdownToggle
// } from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import ChartLineSimple from '../charts/ChartLineSimple'
// import { getSingleDashboardService } from '../../../src/reduxUtils/services/Dashboard'


// const WidgetsDropdown = () => {
//   var [dataList, setDataList] = useState([]);
  
//   let SingleDashBoardList = []
//   useEffect(() => {
//     console.log("AllCustomerList")
//     getSingleDashboardService().then(res=>{
//       SingleDashBoardList = res.data.data
//       setDataList(res.data.data[0])
//       console.log("AllCustomerList")
//       console.log(SingleDashBoardList)
//     })
//   },[])

//   // render
//   return (
//     <CRow>
//       <CCol sm="6" lg="4">
//         <CWidgetDropdown
//           color="gradient-primary"
//           header={dataList.user_count}
//           text="New Users"
//           footerSlot={
//             <ChartLineSimple
//               pointed
//               className="c-chart-wrapper mt-3 mx-3"
//               style={{height: '70px'}}
//               dataPoints={[65, 59, 84, 84, 51, 55, 40]}
//               pointHoverBackgroundColor="primary"
//               label="Members"
//               labels="months"
//             />
//           }
//         >
//         </CWidgetDropdown>
//       </CCol>

//       <CCol sm="6" lg="4">
//         <CWidgetDropdown
//           color="gradient-info"
//           header={dataList.product_count}
//           text="Follow Up"
//           footerSlot={
//             <ChartLineSimple
//               pointed
//               className="mt-3 mx-3"
//               style={{height: '70px'}}
//               dataPoints={[1, 18, 9, 17, 34, 22, 11]}
//               pointHoverBackgroundColor="info"
//               options={{ elements: { line: { tension: 0.00001 }}}}
//               label="Members"
//               labels="months"
//             />
//           }
//         >
          
//         </CWidgetDropdown>
//       </CCol>

//       <CCol sm="6" lg="4">
//         <CWidgetDropdown
//           color="gradient-warning"
//           header={dataList.product_count}
//           text="Meeting"
//           footerSlot={
//             <ChartLineSimple
//               pointed
//               className="mt-3 mx-3"
//               style={{height: '70px'}}
//               dataPoints={[1, 18, 9, 17, 34, 22, 11]}
//               pointHoverBackgroundColor="warning"
//               options={{ elements: { line: { tension: 0.00001 }}}}
//               label="Members"
//               labels="months"
//             />
//           }
//         >
          
//         </CWidgetDropdown>
//       </CCol>

//       <CCol sm="6" lg="4">
//         <CWidgetDropdown
//           color="gradient-info"
//           header={dataList.product_count}
//           text="Payment"
//           footerSlot={
//             <ChartLineSimple
//               pointed
//               className="mt-3 mx-3"
//               style={{height: '70px'}}
//               dataPoints={[1, 18, 9, 17, 34, 22, 11]}
//               pointHoverBackgroundColor="info"
//               options={{ elements: { line: { tension: 0.00001 }}}}
//               label="Members"
//               labels="months"
//             />
//           }
//         >
          
//         </CWidgetDropdown>
//       </CCol>

//     </CRow>
//   )
// }

// export default WidgetsDropdown
