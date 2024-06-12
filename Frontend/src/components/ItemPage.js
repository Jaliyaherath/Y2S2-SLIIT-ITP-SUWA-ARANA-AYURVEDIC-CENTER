import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemForm from "./ItemForm";
import ItemList from "./ItemList";
import ItemReoprtComponenet from "./ItemReportComponent";

axios.defaults.baseURL = "http://localhost:8090/";

function ItemPage() {
  const [addSection, setAddSection] = useState(false);
  const [dataList, setDataList] = useState([]);
  const [formData, setFormData] = useState({
    Inametem: "",
    image: null,
    categoryName: "",
    price: "",
    description: "",
    Supplier: "",
    _id: "",
  });

  const handleFileChange = (file) => {
    setFormData((prev) => ({
      ...prev,
      image: file,
    }));
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

    const formDataWithFile = new FormData();
    formDataWithFile.append("Inametem", formData.Inametem);
    formDataWithFile.append("image", formData.image);
    formDataWithFile.append("categoryName", formData.categoryName);
    formDataWithFile.append("price", formData.price);
    formDataWithFile.append("description", formData.description);
    formDataWithFile.append("Supplier", formData.Supplier);

    try {
      if (formData._id) {
        formDataWithFile.append("_id", formData._id);
        const response = await axios.put(
          `/itemupdate/${formData._id}`,
          formDataWithFile,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.data.success) {
          alert(response.data.message);
          setFormData({
            Inametem: "",
            image: null,
            categoryName: "",
            price: "",
            description: "",
            Supplier: "",
            _id: "",
          });
          setAddSection(false);
          getFetchData();
        }
      } else {
        const response = await axios.post("/itemcreate", formDataWithFile, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (response.data.success) {
          alert(response.data.message);
          setFormData({
            Inametem: "",
            image: null,
            categoryName: "",
            price: "",
            description: "",
            Supplier: "",
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

  const handleEdit = (item) => {
    setFormData({
      _id: item._id,
      Inametem: item.Inametem,
      categoryName: item.categoryName,
      price: item.price,
      description: item.description,
      Supplier: item.Supplier,
    });
    setAddSection(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/itemdelete/${id}`);

      if (response.data.success) {
        alert(response.data.message);
        getFetchData();
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const getFetchData = async () => {
    try {
      const response = await axios.get("/itemgetData");
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
      <h2>{formData._id ? "Edit Item" : "Add Item"}</h2>
      <button onClick={() => setAddSection(!addSection)}>
        {addSection ? "Close Form" : "Add Item"}
      </button>
      {addSection ? (
        <ItemForm
          handleSubmit={handleSubmit}
          handleOnChange={handleOnChange}
          handleFileChange={handleFileChange}
          rest={formData}
        />
      ) : (
        <div>
          <ItemList
            dataList={dataList}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            showActions={true} 
          />
          <div>
            <ItemReoprtComponenet dataList={dataList} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemPage;
