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


import { getAllProductService } from 'src/reduxUtils/services/Product'
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



const fields = ['name','quantity','price', 'sell_price','category_name','status']
const ListProduct = () => {

  var [dataList, setDataList] = useState([]);
  
  let AllProductList = []
  useEffect(() => {
    setTimeout(() => {
      getAllProductService().then(res=>{
        AllProductList = res.data.data
        setDataList(res.data.data)
      })
    }, 1000);
  })
  return (
    <>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
              Product List
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
                      <CButton block onClick={()=>{localStorage.setItem("productViewId", dataList.id)
                        window.location.href='/#/update-product'
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

export default ListProduct
