import React, { Component } from 'react';
import { robots } from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './AppRobot.css';

class AppRobot extends Component{
  // สร้าง constuctor เพื่อกำหนดค่าเริ่มต้นให้ state ของ component AppRobot
  constructor(){
    super();
    /* กำหนดค่าเริ่มต้นให้ state robots = robots ที่มาจากไฟล์ robot.js
    และ searchfield สำหรับเก็บค่าเวลาค้นหา ให้เป็นค่าว่าง */
    this.state = {
      robots : robots,
      searchfield: ''
    }
  }
  // สร้างฟังก์ชัน onSearchChange สำหรับรับค่าที่มีการเปลี่ยนแปลงเวลาค้นหา
  onSearchChange = (event) => {
    // เมือมีการเปลี่ยนแปลงค่าให้ setState ของ searchfield เป็นค่าที่มีการเปลี่ยนแปลง
    this.setState({ searchfield: event.target.value })
  }
  render(){
    //ให้ filterRobot = การวนลูป robots เฉพาะที่มีค่าเท่ากับ searchfield
    const filterRobot = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return(
      <div className="tc">
        <h1>ROBOFREIEND</h1>
        <SearchBox searchChange={ this.onSearchChange }/>
        {/* ส่งค่าไปให้ CardList เป็นค่าจากการ filterRobot แสดงค่าตามที่ค้นหา */}
        <CardList robots={ filterRobot }/>
      </div>
    )
  }
}

export default AppRobot;
