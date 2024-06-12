
import React, { useState, useEffect } from "react";
import axios from "axios";
import DoctorForm from "./DoctorForm";
import DoctorList from "./DoctorList";

axios.defaults.baseURL = "http://localhost:8090/";

function DoctorPage() {
  const [addSection, setAddSection] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    specialization: "",
    schedule: "",
    date: "",
    fees: "",
    _id: "",
  });
  const [dataList, setDataList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [filteredDataList, setFilteredDataList] = useState([]); // State


  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchButton = () => {
    const filteredDataList = dataList.filter((doctor) => {
      const nameMatch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase());
      const specializationMatch = doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase());
      return nameMatch || specializationMatch;
    });
    setFilteredDataList(filteredDataList);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setFilteredDataList([]);
  };


  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData._id) {
        const response = await axios.put(`api/doctors/updateDoc/${formData._id}`, formData);

        if (response.data.success) {
          alert(response.data.message);
          setFormData({
            name: "",
            specialization: "",
            schedule: "",
            date: "",
            fees: "",
            _id: "",
          });
          setAddSection(false);
          getFetchData();
        }
      } else {
        const response = await axios.post("api/doctors/createDoc", formData);

        if (response.data.success) {
          alert(response.data.message);
          setFormData({
            name: "",
            specialization: "",
            schedule: "",
            date: "",
            fees: "",
          });
          setAddSection(false);
          getFetchData();
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form. Please try again.");
    }
  };

  const handleEdit = (doctor) => {
    setFormData({
      _id: doctor._id,
      name: doctor.name,
      specialization: doctor.specialization,
      schedule: doctor.schedule,
      date: doctor.date,
      fees: doctor.fees,
    });
    setAddSection(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`api/doctors/deleteDoc/${id}`);

      if (response.data.success) {
        alert(response.data.message);
        getFetchData();
      }
    } catch (error) {
      console.error("Error deleting doctor:", error);
    }
  };

  const getFetchData = async () => {
    try {
      const response = await axios.get("api/doctors/getDoc");
      if (response.data.success) {
        setDataList(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getFetchData();
  }, []);

  return (
    <div>
      <h2>{formData._id ? "Edit Doctor" : "Add Doctor"}</h2>
      <button onClick={() => setAddSection(!addSection)}>
        {addSection ? "Close Form" : "Add Doctor"}
      </button>
      <input
        type="text"
        placeholder="Search by Name or Specialization"
        value={searchQuery}
        onChange={handleSearch}

      />
      <button onClick={handleSearchButton}>Search</button>
      <button onClick={clearSearch}>Clear Search</button>
      {addSection ? (
        <DoctorForm
          handleSubmit={handleSubmit}
          handleOnChange={handleOnChange}
          rest={formData}
        />
      ) : (
        <div>
          <DoctorList
            dataList={filteredDataList.length > 0 ? filteredDataList : dataList}
            //  dataList={dataList}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </div>
      )}
    </div>
  );
}

export default DoctorPage;