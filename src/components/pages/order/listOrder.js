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



const fields = ["order_id","total_price","payment_status","name","mobile","email","p_name","p_price","p_sell_price","o_quantity","o_price","ew_quantity","ew_price","ew_type","ew_data","service_name","s_price","s_product_type"]
const ListOrder = () => {

  var [dataList, setDataList] = useState([]);
  
  let AllOrderList = []
  useEffect(() => {
    getAllOrderService().then(res=>{
      AllOrderList = res.data.data
      // setDataList(res.data.data)

      // convert string to json
      var productList = []
      var repeatOrderId
      for (let i = 0; i < AllOrderList.length; i++) {
        productList[i] = AllOrderList[i]
        let jsonObject = AllOrderList[i]
        if(productList[i].order_id == repeatOrderId){
          productList[i].order_id = ""
          productList[i].total_price = "" 
          productList[i].payment_status = ""
          productList[i].name = ""
          productList[i].mobile = ""
          productList[i].email = ""
        }else{
          repeatOrderId = productList[i].order_id
        }
        
        Object.keys(jsonObject).forEach(key => { 
          productList[i][key] = jsonObject[key]==null?"":jsonObject[key]
          
        })
      }
      // end json convert
      setDataList(productList)
    })
    
  }, [])

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
                        window.location.href='/admin/#/update-order'
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
