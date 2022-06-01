import React, { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
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
  CRow,
  CSpinner,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import ReactFileReader from "react-file-reader";
import {
  getSingleProductService,
  updateProductService,
} from '../../../reduxUtils/services/Product';
import { uploadFileService } from "../../../reduxUtils/services/uploadFile";

let fileList = [];
const UpdateProduct = () => {
  // const [expert, setExpert] = useState(true);
  const expert = window.localStorage.getItem('role') == 'the' ? false : true;
  console.log(expert);

  const [isLoading, setisLoading] = useState(false);
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  var [dataList, setDataList] = useState([]);
  let location = useLocation().pathname;
  let items = location.split("/");
  console.log(items[2]);
  var productId = items[2];

  useEffect(() => {
    getSingleProductService(productId).then((res) => {
      setDataList(res.data.data[0]);
      console.log(res.data.data[0]);
    });
  }, []);
  console.log(dataList);
  const mediaUrlList = dataList.media_url?.map((url) => (
    <img
      style={{ margin: "10px", width: "100px", height: "100px" }}
      src={url}
      class="img-thumbnail"
    />
  ));
  const handleFiles = (files) => {
    // console.log(files.base64.toString())
    console.log(files.fileList);
    setisLoading(true);
    fileList = [];
    for (let i = 0; i < files.base64.length; i++) {
      const data = {
        base64: files.base64[i].toString(),
        type: i,
        status: "active",
      };
      uploadFileService(data)
        .then((data) => {
          console.log(data.data.data);
          let fileUrl = data.data.data;
          fileUrl = fileUrl.replace("./uploads/image/", "");
          console.log(fileUrl);
          fileUrl = "https://shreejiinfashion.com/uploads/image/" + fileUrl;
          fileList.push(fileUrl);
          console.log(fileList);
          if (files.base64.length == fileList.length) {
            setisLoading(false);
          }
        })
        .catch((err) => {
          alert("something wrong!");
        });
    }
  };
  console.log("vinita pmidea");
  console.log(fileList);
  if (fileList.length == 0) {
    console.log("vinita emty");
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(inputs);
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    inputs["media_url"] = fileList;

    inputs["color"] = dataList.color;
    inputs["fabric"] = dataList.fabric;
    inputs["event"] = dataList.event;
    inputs["type"] = dataList.type;
    inputs["category_id"] = dataList.category_id;
    if (fileList.length == 0) {
      inputs["media_url"] = dataList.media_url;
    }

    inputs["name"] = inputs["name"] ? inputs["name"] : dataList.name;
    updateProductService(productId, inputs)
      .then((data) => {
        setInputs((values) => ({ [name]: null }));
      })
      .catch((err) => {
        alert("something wrong!");
      });
  };

  return (
    <>
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              <h3>PINGA HEALTH FORM FOR {expert ? 'EXPERTS' : 'THE'}</h3>
            </CCardHeader>
            <CCardBody>
              <CFormGroup row>
              <CCol md="4">
                <CLabel htmlFor="text-input"><h6>Name</h6></CLabel>
              </CCol>
              <CCol md="4">
                <CLabel htmlFor="text-input">Vinita Rane</CLabel>
              </CCol>
              </CFormGroup>
              <CFormGroup row>
              
              <CCol md="4">
                <CLabel htmlFor="text-input"><h6>Previous Consultations</h6></CLabel>
              </CCol>
              <CCol md="8">
                <CLabel htmlFor="text-input">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</CLabel>
                <CLabel htmlFor="text-input">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</CLabel>
              </CCol>
              </CFormGroup>
              <CCard>
              <div class="p-2 text-black" style={{'backgroundColor':'lightyellow'}}>
                <h6>HOW TO CONDUCT SESSION: </h6>
                <ol>
                  <li>Login 3 minutes before the meeting</li>
                  <li>Keep lighting good</li>
                  <li>Fill this form and submit immediately after the meeting</li>
                </ol>
              </div>
              </CCard>
              <CForm className="form-horizontal">
                {
                  expert ? <CFormGroup row>
                  <CCol md="4">
                    <CLabel htmlFor="text-input">
                      <h6>Your Private Observations</h6>
                    </CLabel>
                  </CCol>
                  <CCol xs="12" md="8">
                    {expert ? (
                      <CInput
                        id="text-input"
                        name="name"
                        value={inputs.name ? inputs.name : dataList.name}
                        onChange={handleChange}
                        placeholder="Enter Product Name"
                      />
                    ) : (
                      <CLabel htmlFor="text-input">
                        {inputs.name ? inputs.name : dataList.name}
                      </CLabel>
                    )}
                  </CCol>
                </CFormGroup> : ''
                }
                <CFormGroup row>
                  <CCol md="4">
                    <CLabel htmlFor="number-input">
                      <h6>Recommendations/ Prescriptions - Lifestyle</h6>
                    </CLabel>
                  </CCol>
                  <CCol xs="12" md="8">
                    {expert ? (
                      <CInput
                        id="text-input"
                        name="name"
                        value={inputs.name ? inputs.name : dataList.name}
                        onChange={handleChange}
                        placeholder="Enter Product Name"
                      />
                    ) : (
                      <CLabel htmlFor="text-input">
                        {inputs.name ? inputs.name : dataList.name}
                      </CLabel>
                    )}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="4">
                    <CLabel htmlFor="text-input">
                      <h6>Recommendations/ Prescriptions - Medical</h6>
                    </CLabel>
                  </CCol>
                  <CCol xs="12" md="8">
                    {expert ? (
                      <CInput
                        id="text-input"
                        name="name"
                        value={inputs.name ? inputs.name : dataList.name}
                        onChange={handleChange}
                        placeholder="Enter Product Name"
                      />
                    ) : (
                      <CLabel htmlFor="text-input">
                        {inputs.name ? inputs.name : dataList.name}
                      </CLabel>
                    )}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="4">
                    <CLabel htmlFor="textarea-input">
                      <h6>General Comments for Pinga team</h6>
                    </CLabel>
                  </CCol>
                  <CCol xs="12" md="8">
                    {expert ? (
                      <CTextarea
                        name="description"
                        value={
                          inputs.description
                            ? inputs.description
                            : dataList.description
                        }
                        onChange={handleChange}
                        id="textarea-input"
                        rows="9"
                        placeholder="Enter Product Description..."
                      />
                    ) : (
                      <CLabel htmlFor="text-input">
                        {inputs.name ? inputs.name : dataList.name}
                      </CLabel>
                    )}
                  </CCol>
                </CFormGroup>
                {/* <CFormGroup row>
                  <CCol md="4">
                    <CLabel htmlFor="select">Quantity</CLabel>
                  </CCol>
                  <CCol xs="12" md="8">
                    <CInput id="text-input" name="quantity" value={inputs.quantity?inputs.quantity:dataList.quantity} onChange={handleChange} placeholder="Enter Quantity"/>
                  </CCol>
                </CFormGroup> */}
                {/* <CFormGroup row>
                  <CCol xs="12" md="12">{mediaUrlList} </CCol>   
                  <CLabel col md="3" htmlFor="file-input">Image</CLabel>
                  <CCol xs="12" md="9">
                    <ReactFileReader name="image_one" fileTypes={[".jpeg",".jpg",".png"]} base64={true} multipleFiles={true} handleFiles={handleFiles}>
                      <CButton size="sm" color="light" className='btn'>Choose Image</CButton>
                    </ReactFileReader>
                    {isLoading?<CSpinner color="warning" variant="grow" />:''}
                                      
                  </CCol>
                </CFormGroup> */}
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton onClick={handleSubmit} size="sm" color="primary">
                <CIcon name="cil-scrubber" /> Update
              </CButton>
              <CButton type="reset" size="sm" color="danger">
                <CIcon name="cil-ban" /> Reset
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default UpdateProduct;
