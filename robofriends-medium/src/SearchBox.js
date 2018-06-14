import React from 'react';

const SearchBox = ({searchChange}) => {
    return(
      <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="seaech robot"
        // onChange เมื่อช่องค้นหามีการเปลี่ยนแปลง ให้ทำ searchChange (ฟังก์ชัน onSearchChange ทีส่งมา)
        onChange={searchChange} />
      </div>
    )
}

export default SearchBox;
