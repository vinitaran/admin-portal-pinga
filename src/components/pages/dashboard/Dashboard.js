import React,{  useState,useEffect} from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CForm,
  CFormGroup,
  CTextarea,
  CInput,
  CInputFile,
  CLabel,
  CCardFooter,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { addExtraService, getAllExtraService } from 'src/reduxUtils/services/Extra'


import { getAllProductService } from 'src/reduxUtils/services/Product'

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}



const fields = ['name', 'Phone Number','Email ID','status']
const ListProduct = () => {

  let successAlert, loadingAlert, errorAlert = false
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    loadingAlert = true
    event.preventDefault();
    //console.log(inputs);
    let input_data = {
      "data":{"title":inputs.title,"description":inputs.description},
      "type":inputs.type,
      "status":"active"
    }
    addExtraService(input_data).then((data)=>{
        console.log(data.status)
        if(data.status == 200)
        {
          alert("data saved succesfully!")
        }else{
          alert("something wrong!")
        }
        const name = event.target.name
        setInputs(values => ({[name]: null}))
      }).catch((err)=>{
        alert("something wrong!")
      })
  }

  var [dataList, setDataList] = useState([]);
  
  let AllProductList = []
  useEffect(() => {
    setTimeout(() => {
      getAllProductService().then(res=>{
        console.log(res)
        AllProductList = res.data.data
        console.log("vinita")
        setDataList(res.data.data)
      }).catch((err)=> console.log(err));
    }, []);
  });
  
  return (
    <>
    <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
              <h3>Search Patient</h3>
            </CCardHeader>
            <CCardBody>
              <CForm className="form-horizontal">
              <CFormGroup row>
                  <CCol md="4">
                    <CLabel htmlFor="text-input"><h6>Search by patient name / mobile number</h6></CLabel>
                  </CCol>
                  <CCol xs="12" md="8">
                    <CInput id="text-input" name="type" value={inputs.type || ""} onChange={handleChange} placeholder="Enter Type" />
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton size="md" color="primary" onClick={handleSubmit}>Search</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
              <h3>Patient List</h3>
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
                        window.location.href='/admin/#/view-history/'+dataList.id
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
