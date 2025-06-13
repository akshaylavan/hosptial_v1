import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
const Appointment = () => {

  const {docId} = useParams();
  const {doctors} = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null);

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  }
  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  return docInfo && (
    <>
    <div>
      {/*------------------Docctor Details------------------*/}
      <div>
        <div> 
          <img src={docInfo.image} alt="" />
        </div>

        <div>
          {/*------------------DocInfo: name, degree, experience-----------------*/}
          <p>
            {docInfo.name} <img src={assets.verified_icon} alt="Verified" />
            </p>
            <div>
              <p>{docInfo.degree} - {docInfo.speciality}</p>
            </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Appointment