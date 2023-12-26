"use client";

import styles from "../loanrequest/loanrequest.module.scss"
import { useEffect, useState } from "react";
import Link from "next/link";
import { Flex } from "antd";
import { baseUrl } from "@/src/utility/constants";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useAuth } from "@/src/context/AppContext";


const Sequence = () => {
    const channels = [
        'test',
        'File2',
        'File3',
        'File4',
        'File5',
        'File6',
      ];

      const [selectedChannels, setSelectedChannels] = useState([]);
      const { user } = useAuth();
      const storedToken = user.token

      const handleChannelChange = (channel) => {
        const updatedChannels = selectedChannels.includes(channel)
          ? selectedChannels.filter((selectedChannel) => selectedChannel !== channel)
          : [...selectedChannels, channel];
    
        setSelectedChannels(updatedChannels);
      };
    
      const renderFileUploadFields = () => {
        return selectedChannels.map((channel) => (
          <div key={channel} style={{marginBottom: "1rem"}}>
            <label
             style={{marginRight: "2rem"}}>{`Upload file for ${channel}:`}</label>
            <input type="file" name={`file-${channel}`} />
          </div>
        ));
      };
      const handleSubmit = async (event) => {
        event.preventDefault();
      
        try {
          const formData = new FormData();
      
          // Get the first selected channel
          const channel = selectedChannels[0];
      
          // Append selected channel to formData
          formData.append('channel', channel);
      
          // Append the file to formData
          const fileInput = document.querySelector(`input[name=file-${channel}]`);
          formData.append(`file-${channel}`, fileInput.files[0]);
      
          // Log the formData AFTER appending data
          console.log(formData);
      
          // Rest of your axios.post code...
        } catch (error) {
          // Handle errors
          console.error('Error submitting data:', error);
        }
      };
      
      
      

    return (
        <div style={{padding: "5rem"}}>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>

        
      <h1 style={{marginBottom: "2rem"}}>Select Biller data-product to upload</h1>
      <Link href={`/dashboard/products/dataProducts`}>
      <p
       style={{
         backgroundColor: '#f50606',
         color: '#ffffff',
         padding: '10px 15px',
         borderRadius: '5px',
         cursor: 'pointer',
         display: 'inline-block',
         float: 'left',
          marginBottom: "3rem"
       }}
     >
       Data Products details
     </p>
      </Link>
      
      </div>
      <form onSubmit={handleSubmit}>
  {/* Assuming only one channel can be selected */}
  <div>
    <input
      type="checkbox"
      id={channels[0]}
      name={channels[0]}
      checked={selectedChannels.includes(channels[0])}
      onChange={() => handleChannelChange(channels[0])}
    />
    <label htmlFor={channels[0]} style={{ marginLeft: "1rem" }}>
      {channels[0]}
    </label>
    <br />
    <label>{`Upload file for ${channels[0]}:`}</label>
    <input type="file" name={`file-${channels[0]}`} />
    <br />
  </div>

  {selectedChannels.length > 0 && (
    <div>
      <button type="submit">Submit</button>
    </div>
  )}
</form>

    </div>
    )
}

export default Sequence