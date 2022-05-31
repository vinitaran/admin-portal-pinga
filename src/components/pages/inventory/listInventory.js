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


import { getAllInventoryService } from '../../../reduxUtils/services/Inventory'

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}



const fields = ['name','quantity','stock', 'view']
const ListInventory = () => {

  var [dataList, setDataList] = useState([]);
  
  let AllInventoryList = []
  useEffect(() => {
    getAllInventoryService().then(res=>{
      AllInventoryList = res.data.data
      setDataList(res.data.data)
      console.log("AllInventoryList")
      console.log(AllInventoryList)
    })
  })
  return (
    <>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
            Inventory
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={dataList}
              fields={fields}
              itemsPerPage={10}
              pagination
              scopedSlots = {{
                'view':
                  (dataList)=>(
                    <td>
                      <CButton block onClick={()=>{localStorage.setItem("inventoryViewId", dataList.id)
                        window.location.href='/admin/#/single-inventory'
                        }} 
                        color="secondary">View
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

export default ListInventory
