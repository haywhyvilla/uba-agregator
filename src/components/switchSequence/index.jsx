"use client";

import styles from "../loanrequest/loanrequest.module.scss"
import { useEffect, useState } from "react";
import Link from "next/link";
import { Flex } from "antd";
import { baseUrl } from "@/src/utility/constants";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";


const Sequence = () => {
    const channels = [
        'diaspora',
        'facenote',
        'internet-banking',
        'ubanquity',
        'ussd',
        'vericash',
      ];

      const [selectedChannels, setSelectedChannels] = useState([]);

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
          // Use axios.post to send a POST request to the specified endpoint
          const response = await axios.post(
            `${baseUrl}/sequence`,
            selectedChannels,
            {
              headers: {
                'Content-Type': 'application/json',
                // Add any other headers you need
              },
            }
          );
    
          // Handle the response as needed
          toast.success("Upload Successfully")
          console.log(response);
        } catch (error) {
          // Handle errors
          toast.error("error while Uploading, try again ")
          console.error('Error submitting data:', error);
        }
      };

    return (
        <div style={{padding: "5rem"}}>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>

        
      <h1 style={{marginBottom: "2rem"}}>Select Channels to Upload</h1>
      <Link href={`/dashboard/sequence/aggregatorSequence`}>
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
       Aggregator sequence details
     </p>
      </Link>
      
      </div>
      <form onSubmit={handleSubmit}>
        {channels.map((channel) => (
          <div key={channel}>
            <input
              type="checkbox"
              id={channel}
              name={channel}
              checked={selectedChannels.includes(channel)}
              onChange={() => handleChannelChange(channel)}
            />
            <label htmlFor={channel} style={{marginLeft: "1rem"}}>{channel}</label>
          </div>
        ))}
    
      {selectedChannels.length > 0 && (
        <div style={{marginTop: "3rem"}}>
          <h2>Upload Files</h2>
          {renderFileUploadFields()}
          <button type="submit" style={{
         backgroundColor: '#f50606',
         color: '#ffffff',
         padding: '10px 15px',
         borderRadius: '5px',
         cursor: 'pointer',
         display: 'inline-block',
         float: 'left',
         marginBottom: "3rem"
       }}>Submit</button>
        
        </div>
      
      )}
         </form>
    </div>
    )
}

export default Sequence