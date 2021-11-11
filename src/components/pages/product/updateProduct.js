import React, { useState } from 'react'
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


const UpdateProduct = () => {

  const [imageOne, setimageOne] = useState("./images/pImage.png");
  const [imageTwo, setimageTwo] = useState("./images/pImage.png");
  const [imageThree, setimageThree] = useState("./images/pImage.png");
  const [imageFour, setimageFour] = useState("./images/pImage.png");
  const [imageFive, setimageFive] = useState("./images/pImage.png");
  
  
  return (
    <>
      <CRow>
        <CCol xs="12" md="6">
          <CCard>
            <CCardHeader>
              Update Product
            </CCardHeader>
            <CCardBody>
              <CForm className="form-horizontal">
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Product Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-input" name="text-input" placeholder="Enter Product Name" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="number-input">Price</CLabel>
                  </CCol>
                  <CCol xs="12" md="3">
                    <CInput id="text-input" name="text-input" placeholder="Enter Price"/>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Sale Price</CLabel>
                  </CCol>
                  <CCol xs="12" md="3">
                    <CInput id="text-input" name="text-input" placeholder="Enter Sale Price"/>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="textarea-input">Description</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="9"
                      placeholder="Enter Product Description..." 
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Quantity</CLabel>
                  </CCol>
                  <CCol xs="12" md="3">
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Category</CLabel>
                  </CCol>
                  <CCol xs="12" md="3">
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select </option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CLabel col md="3" htmlFor="file-input">Image One</CLabel>
                  <CCol xs="12" md="6">
                    <CInputFile id="file-input" name="file-input"/>
                  </CCol>
                  <CCol md="3">
                    <img src={"./pImage.png"}/>
                  </CCol>
                  <CLabel col md="3" htmlFor="file-input">Image Two</CLabel>
                  <CCol xs="12" md="6">
                    <CInputFile id="file-input" name="file-input"/>
                  </CCol>
                  <CCol md="3">
                    <img src={imageOne}/>
                  </CCol>
                  <CLabel col md="3" htmlFor="file-input">Image Three</CLabel>
                  <CCol xs="12" md="6">
                    <CInputFile id="file-input" name="file-input"/>
                  </CCol>
                  <CCol md="3">
                    <img src={imageOne}/>
                  </CCol>
                  <CLabel col md="3" htmlFor="file-input">Image Four</CLabel>
                  <CCol xs="12" md="6">
                    <CInputFile id="file-input" name="file-input"/>
                  </CCol>
                  <CCol md="3">
                    <img src={imageOne}/>
                  </CCol>
                  <CLabel col md="3" htmlFor="file-input">Image Five</CLabel>
                  <CCol xs="12" md="6">
                    <CInputFile id="file-input" name="file-input"/>
                  </CCol>
                  <CCol md="3">
                    <img src={imageOne}/>
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton size="sm" color="primary"><CIcon name="cil-scrubber" /> Save</CButton>
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
      
    </>
  )
}

export default UpdateProduct
