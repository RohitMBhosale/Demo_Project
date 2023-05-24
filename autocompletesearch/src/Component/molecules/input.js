import styles from './input.module.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai'



export default function Input() {

    const [userEntryPlaces, setUserEntryPlaces] = useState('')  
    const [userSearchEntry, setUserSearchEntry] = useState([]);
    const [displaySearchedData, setDisplaySearchedData] = useState([]);
  

    function fetchDataFromApi() {

        fetch('https://cdn-api.co-vin.in/api/v2/admin/location/states')
            .then(response => response.json())
            .then(data => setDisplaySearchedData(data.states))
            .catch(error => console.log(error))
    }
  
  
    useEffect(() => {
        fetchDataFromApi()
    }, []);
  


    function handleChange(event) {
        const refreshed_data = (event.target.value);
        setUserEntryPlaces(refreshed_data)
  
        // filter the places by name 
  
        const dataFilter = displaySearchedData.filter((filteredname) =>
            filteredname.state_name.includes(refreshed_data)
        )
        setUserSearchEntry(dataFilter);
    }

    function handleSelectData(data) {
        setUserEntryPlaces(data.state_name);
        setUserSearchEntry([]);
    }
  


  return (
      <>
          <div className={styles.container}>

            <div className={styles.search_bar}>
            <input type="text" placeholder="search"  onChange={handleChange} value={userEntryPlaces} />
            <AiOutlineSearch className={styles.search_icon} size={30} />
            </div>

            <div className={styles.display_suggestions}>
                  {
                      userSearchEntry.map((final, index) => (
                          <p key={index.state_id}
                              onClick={() => handleSelectData(final)}>
                              {final.state_name}
                          </p>
                      ))
                  }
              </div>
          </div>
      </>
  )
}