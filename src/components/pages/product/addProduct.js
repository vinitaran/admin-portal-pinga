import React, { useState, useEffect } from 'react'
import {
  CButton,
  CSpinner,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CFormText,
  CAlert,
  CTextarea,
  CInput,
  CInputFile,
  CLabel,
  CSelect,
  CRow
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import { connect } from "react-redux";
import { addProductService, getAllProductService } from 'src/reduxUtils/services/Product'
import "./Filter.css";
import { uploadFileService } from 'src/reduxUtils/services/uploadFile';

//-----------------------------------------

import {imageToBase64} from 'image-to-base64'
import ReactFileReader from 'react-file-reader'

//---------------------------------------
let fileList = []
let fabricBasket = []
let colorBasket = []
const colors = [
  "Red",
  "Blue",
  "Green",
  "Pink",
  "Yellow",
  "White",
  "Brown",
  "Purple",
];

const fabrics = [
  "Semi-Silk",
  "Georgette",
  "Velvet",
  "Crepe",
  "Net",
  "Raw Silk",
  "Banarasi Silk",
  "Organza",
];

const works = [
  "Diamond",
  "Kattdana",
  "Zardosi",
  "Hand embroidery",
  "Gotapatti",
  "Mirror",
  "Resham",
  "Sequins",
];

const AddProduct = () => {
 
  const [isLoading, setisLoading] = useState(false);
  
  let successAlert, loadingAlert, errorAlert = false
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  // On file upload (click the upload button)
  const [chooseFile, setChooseFile] = useState({});
  const imageUrlList = []
  const handleFiles = (files) => {
    // console.log(files.base64.toString())
    console.log(files.fileList)
    setisLoading(true)
    
    fileList = []
    for (let i = 0; i < (files.base64.length); i++) {
      const data =
      {
        "base64": files.base64[i].toString(),
        "type": i,
        "status": "active"
      }
      
      console.log("upload service call")
      uploadFileService(data).then((data)=>{
        console.log(data.data.data)
        
        let fileUrl=data.data.data
        fileUrl=fileUrl.replace('./uploads/image/', '')
        console.log((fileUrl))
        fileUrl = 'https://shreejiinfashion.com/uploads/image/'+fileUrl
        fileList.push(fileUrl)
        console.log(fileList)
        console.log("file length")
        console.log(files.base64.length)
        console.log("i length")
        console.log(fileList.length)
        if(files.base64.length==fileList.length){
          setisLoading(false)
        }
      }).catch((err)=>{
        setisLoading(false)
        alert("something wrong!")
      })
      
    }
  }

  //  color & fabricts
  const filterColorBucket = (event) => {
    // colorBasket = [];
    const color = event.target.value;
    if (event.target.checked === true) {
      colorBasket = [...colorBasket, color];
      console.log(colorBasket);
      // addFilter();
    }
    if (event.target.checked === false) {
      const newBasket = colorBasket;
      const index = colorBasket.indexOf(event.target.value);
      newBasket.splice(index, 1);
      colorBasket = newBasket;
      console.log(colorBasket);
      // addFilter(basket);
    }
  };


const filterFabricBucket = (event) => {
    // fabricBasket = [];
    const fabric = event.target.defaultValue;
    console.log(fabric);
    if (event.target.checked === true) {
      fabricBasket = [...fabricBasket, fabric];
      console.log(fabricBasket);
      // addFilter();
    }
    if (event.target.checked === false) {
      const newBasket = fabricBasket;
      const index = fabricBasket.indexOf(event.target.value);
      newBasket.splice(index, 1);
      fabricBasket = newBasket;
      console.log(fabricBasket);
      // addFilter(basket);
    }
  };
  //  end color 7 fabrics
  const handleSubmit = (event) => {
    loadingAlert = true
    event.preventDefault();
    console.log(fileList)
    inputs['media_url'] = fileList
    inputs['color'] = colorBasket
    inputs['fabric'] = fabricBasket
    addProductService(inputs).then((data)=>{
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
              Add Product
            </CCardHeader>
            <CCardBody>
              <CForm className="form-horizontal">
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Product Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-input" name="name" value={inputs.name || ""} onChange={handleChange} placeholder="Enter Product Name" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="number-input">Price</CLabel>
                  </CCol>
                  <CCol xs="12" md="3">
                    <CInput id="text-input" name="price" value={inputs.price || ""} onChange={handleChange} placeholder="Enter Price"/>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Sale Price</CLabel>
                  </CCol>
                  <CCol xs="12" md="3">
                    <CInput id="text-input" name="sell_price" value={inputs.sell_price || ""} onChange={handleChange} placeholder="Enter Sale Price"/>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Quantity</CLabel>
                  </CCol>
                  <CCol xs="12" md="3">
                    <CInput id="number-input" name="quantity" value={inputs.quantity || ""} onChange={handleChange} placeholder="Enter Quantity"/>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                <div className="filter__body__heading">COLORS</div>
                  <div className="filter__body__colors">
                    {colors.map((color) => {
                      return (
                        <div className="filter__body__color">
                          <label class="color__checkbox">
                            <input
                              type="checkbox"
                              style={{ backgroundColor: `${color}` }}
                              value={color}
                              onChange={(event) => filterColorBucket(event)}
                            />
                            <span></span>
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </CFormGroup>
                <CFormGroup row>
                <div className="filter__body__occassions filter__child__div">
                  <div className="filter__body__heading">FABRIC</div>
                  <div className="filter__body__occassion">
                    {fabrics.map((fabric) => {
                      return (
                        <label class="checkbox">
                          <input
                            type="checkbox"
                            value={fabric}
                            onClick={(e) => {
                              filterFabricBucket(e);
                            }}
                          />
                          <span>{fabric}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
                <div className="filter__body__works filter__child__div">
                  <div className="filter__body__heading">WORK DETAILS</div>
                  <div className="filter__body__workDeet">
                    {works.map((work) => {
                      return (
                        <label class="checkbox">
                          <input
                            type="checkbox"
                            value={work}
                            onClick={(e) => {
                              filterFabricBucket(e);
                            }}
                          />
                          <span>{work}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
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
                      onChange={handleChange} placeholder="Enter Product Description..." 
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Event</CLabel>
                  </CCol>
                  <CCol xs="12" md="3">
                    <CSelect custom name="event" value={inputs.event || ""} onChange={handleChange} id="select">
                      <option value="">Please select</option>
                      <option value="Engagement">Engagement</option>
                      <option value="Haldi">Haldi</option>
                      <option value="Mehendi">Mehendi</option>
                      <option value="Sangeet">Sangeet</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Reception">Reception</option>
                      <option value="Bridesmaids">Bridesmaids</option>
                      <option value="Nikaah & Walima">Nikaah & Walima</option>

                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Category</CLabel>
                  </CCol>
                  <CCol xs="12" md="3">
                    <CSelect custom name="category_id" value={inputs.category_id || ""} onChange={handleChange} id="select">
                      <option value="0">Please select </option>
                      <option value="1">Saree</option>
                      <option value="2">Lehenga</option>
                      <option value="3">Gown</option>
                    </CSelect>
                  </CCol>
                </CFormGroup> 

                <CFormGroup row>
                  <CLabel col md="3" htmlFor="file-input">Image</CLabel>
                  <CCol xs="12" md="9">
                    <ReactFileReader name="image_one" fileTypes={[".jpeg",".jpg",".png"]} base64={true} multipleFiles={true} handleFiles={handleFiles}>
                      <CButton size="sm" color="light" className='btn'>Choose Image</CButton>
                    </ReactFileReader>
                    {isLoading?<CSpinner color="warning" variant="grow" />:''}
                                      
                  </CCol>
                </CFormGroup>
                {/* <CFormGroup row>
                  <CLabel col md="3" htmlFor="file-input">Video</CLabel>
                  <CCol xs="12" md="9">
                    <ReactFileReader name="image_one" fileTypes={[".mp4"]} base64={true} multipleFiles={false} handleFiles={handleFiles}>
                      <CButton size="sm" color="light" className='btn'>Choose Video</CButton>
                    </ReactFileReader>
                  </CCol>
                </CFormGroup> */}
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton size="sm" color="primary" onClick={handleSubmit}><CIcon name="save_button" /> Save</CButton>
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>

    </>
  )
}

export default AddProduct;

