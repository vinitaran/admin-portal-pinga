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


import { getAllExtraService } from '../../../reduxUtils/services/Extra'

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}



const fields = ['title','type','status','view']
const ListExtra = () => {

  var [dataList, setDataList] = useState([]);
  
  let AllExtraList = []
  useEffect(() => {
    var extra_list = []
    
      getAllExtraService().then(res=>{
        AllExtraList = res.data.data
        console.log(AllExtraList)
        AllExtraList.map((data)=>{
          extra_list.push({ "type":data.type, "title":data.data.title, "status":data.status})
        })
        setDataList(extra_list)
      })
    
  },[])
  return (
    <>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
              Extra List
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
                      <CButton block onClick={()=>{localStorage.setItem("extraViewId", dataList.id)
                        window.location.href='/admin/#/update-extra'
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

export default ListExtra
