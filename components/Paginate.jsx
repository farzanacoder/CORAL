import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import Bag from "../src/assets/14.png";
import Card from "./Card";
import axios from "axios";

function Items({ currentItems }) {
  return (
    <>
      <div className="flex flex-wrap gap-6.5">
        {currentItems &&
          currentItems.map((item) => (
            <div>
              <Card
                title={item.title}
                category="bag"
                price={item.price}
                src={item.thumbnail}
              />
            </div>
          ))}
      </div>
    </>
  );
}

function Paginate({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);
  let [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let data = await axios.get("https://dummyjson.com/products");
      setItems(data.data.products);
    }

    fetchData();
  }, []);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        containerClassName="flex gap-2 mt-10 cursor-pointer"
        activeClassName="bg-blue-500 text-white px-3 py-1 rounded"
        pageClassName="px-3 py-1 border rounded"
      />
    </>
  );
}

export default Paginate;
