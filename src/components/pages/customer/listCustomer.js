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


import { getAllCustomerService } from '../../../reduxUtils/services/Customer'
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



const fields = ['name','mobile','email']
const ListCustomer = () => {

  var [dataList, setDataList] = useState([]);
  
  let AllCustomerList = []
  useEffect(() => {
    getAllCustomerService().then(res=>{
      AllCustomerList = res.data.data
      setDataList(res.data.data)
      console.log("AllCustomerList")
      console.log(AllCustomerList)
    })
  })
  return (
    <>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
              Customer List
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
                      <CButton block onClick={()=>{localStorage.setItem("CustomerViewId", dataList.id)
                        window.location.href='/admin/#/update-customer'
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

export default ListCustomer
