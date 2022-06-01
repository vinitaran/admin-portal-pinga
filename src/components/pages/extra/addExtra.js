import React, { useState, useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CTextarea,
  CInput,
  CInputFile,
  CLabel,
  CSelect,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { connect } from "react-redux";
import { getUser, getAllExtraService } from '../../../reduxUtils/services/Extra'

const AddExtra = () => {
  
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
    console.log(inputs);
    let input_data = {
      "data":{"title":inputs.title,"description":inputs.description},
      "type":inputs.type,
      "status":"active"
    }
    getUser(input_data).then((data)=>{
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
  
  return (
    <>
      <CRow>
        <CCol xs="12" md="6">
          <CCard>
            <CCardHeader>
              Add Extra
            </CCardHeader>
            <CCardBody>
              <CForm className="form-horizontal">
              <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Type</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-input" name="name" value={inputs.type || ""} onChange={handleChange} placeholder="Enter Type" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Title</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-input" name="title" value={inputs.title || ""} onChange={handleChange} placeholder="Enter Title" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="textarea-input">Description</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CTextarea 
                      name="description" 
                      id="textarea-input" 
                      rows="9"
                      value={inputs.description || ""}
                      onChange={handleChange} placeholder="Enter Description..." 
                    />
                  </CCol>
                </CFormGroup>

              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton size="sm" color="primary" onClick={handleSubmit}><CIcon name="save_button" /> Save</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>

    </>
  )
}

export default AddExtra;

