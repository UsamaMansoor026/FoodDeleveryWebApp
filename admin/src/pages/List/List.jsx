import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({ url }) => {
  const [itemList, setItemList] = useState([]);

  const fetchItemsFromDB = async () => {
    const response = await axios.get(`${url}/api/food/list`);

    if (response.data.success) {
      setItemList(response.data.data);
    } else {
      toast.error("An Unexpected error occurred");
    }
  };

  const handleRemoveItem = async (foodID) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodID });
    await fetchItemsFromDB();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("An unexpected error occurred");
    }
  };

  useEffect(() => {
    fetchItemsFromDB();
  }, []);

  return (
    <div className="list add flex-col">
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>

        {itemList.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>$ {item.price}</p>
              <p onClick={() => handleRemoveItem(item._id)} className="cursor">
                X
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
