import React,{  useState,useEffect} from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton
} from '@coreui/react'


import { getAllOrderService } from 'src/reduxUtils/services/Order'
import usersData from '../../../views/users/UsersData'

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}



const fields = ['product_name','quantity','price', 'sell_price','category_name','event','status']
const ListOrder = () => {

  var [dataList, setDataList] = useState([]);
  
  let AllOrderList = []
  useEffect(() => {
    setTimeout(() => {
      getAllOrderService().then(res=>{
        AllOrderList = res.data.data
        setDataList(res.data.data)
        console.log("orderlist")
        console.log(AllOrderList)
      })
    }, 1000);
  })
  return (
    <>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
              Order List
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={dataList}
              fields={fields}
              itemsPerPage={10}
              pagination
              scopedSlots = {{
                'status':
                  (dataList)=>(
                    <td>
                      <CButton block onClick={()=>{localStorage.setItem("orderViewId", dataList.id)
                        window.location.href='/#/update-order'
                        }} 
                        color="secondary">{dataList.status}
                      </CButton>
                    </td>
                  )
              }}
            />
            </CCardBody>
          </CCard>
        </CCol>          
      </CRow>
    </>
  )
}

export default ListOrder