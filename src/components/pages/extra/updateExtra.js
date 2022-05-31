import React,{  useState,useEffect} from 'react'

import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CFormText,
  CTextarea,
  CInput,
  CInputFile,
  CLabel,
  CSelect,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { getSingleExtraService, updateExtraService } from '../../../reduxUtils/services/Extra'


const UpdateExtra = () => {
  
  const [inputs, setInputs] = useState([]);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  
  var [dataList, setDataList] = useState({});
  // var productId = localStorage.getItem("extraViewId")
  
  useEffect(() => {
      getSingleExtraService(1).then(res=>{
        setDataList(res.data.data)
        console.log(res.data.data)
        console.log("vinitaone")
      })
  },[])
  console.log(dataList[0])

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(inputs);
    let input_data = {
      "data":{"title":inputs.title,"description":inputs.description},
      "type":inputs.type,
      "status":"active"
    }
    
    updateExtraService(input_data).then((data)=>{
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
  
  return (
    <>
      <CRow>
        <CCol xs="12" md="6">
          <CCard>
            <CCardHeader>
              Update Extra
            </CCardHeader>
            <CCardBody>
              <CForm className="form-horizontal">
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Type</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-input" name="type" value={inputs.type?inputs.type:dataList.type} onChange={handleChange} placeholder="Enter Type" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Title</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-input" name="title" value={inputs.title?inputs.title:dataList.title} onChange={handleChange} placeholder="Enter Title" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="textarea-input">Description</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CTextarea 
                      name="description" 
                      value={inputs.description?inputs.description:dataList.description}
                      onChange={handleChange}
                      id="textarea-input" 
                      rows="9"
                      placeholder="Enter Description..." 
                    /> 
                  </CCol>
                </CFormGroup>

              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton size="sm" color="primary"><CIcon name="cil-scrubber" /> Update </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
      
    </>
  )
}

export default UpdateExtra
