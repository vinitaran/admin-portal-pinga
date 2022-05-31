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

import { getSingleProductService, updateProductService } from 'src/reduxUtils/services/Product'


const UpdateProduct = () => {

  const [imageOne, setimageOne] = useState("./images/pImage.png");
  const [imageTwo, setimageTwo] = useState("./images/pImage.png");
  const [imageThree, setimageThree] = useState("./images/pImage.png");
  const [imageFour, setimageFour] = useState("./images/pImage.png");
  const [imageFive, setimageFive] = useState("./images/pImage.png");
  
  
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  
  var [dataList, setDataList] = useState([]);
  var productId = localStorage.getItem("productViewId")
  useEffect(() => {
      getSingleProductService(productId).then(res=>{
        setDataList(res.data.data[0]) 
        //console.log(res.data.data[0])
      })
  })
  console.log(dataList)

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(inputs);
    updateProductService(inputs).then((data)=>{
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
              View Patient History
            </CCardHeader>
            <CCardBody>
              <CForm className="form-horizontal">
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Product Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-input" name="name" value={inputs.name?inputs.name:dataList.name} onChange={handleChange} placeholder="Enter Product Name" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="number-input">Price</CLabel>
                  </CCol>
                  <CCol xs="12" md="3">
                    <CInput id="text-input" name="price" value={inputs.price } onChange={handleChange} placeholder="Enter Price"/>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Sale Price</CLabel>
                  </CCol>
                  <CCol xs="12" md="3">
                    <CInput id="text-input" name="sell_price" value={inputs.sell_price} onChange={handleChange} placeholder="Enter Sale Price"/>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="textarea-input">Description</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CTextarea 
                      name="description" 
                      value={inputs.description}
                      onChange={handleChange}
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
                    <CSelect custom name="quantity" value={inputs.quantity}
                    onChange={handleChange}id="select">
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
                    <CSelect custom name="category_id" value={inputs.category_id}
                    onChange={handleChange} id="select">
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
