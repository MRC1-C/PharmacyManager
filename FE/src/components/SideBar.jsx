import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Modal, Form, Input, Statistic, message } from "antd";
import { useStore } from "../hooks/useStore";
const SideBarStyle = styled.div`
  background-color: white;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .label {
    font-size: 25px;
  }
  .time {
    font-size: 20px;
    border: 1px solid black;
  }
`;

export default function SideBar() {
  const { bill, addBill, deleteBill, clearBill } = useStore((state) => ({
    bill: state.bill,
    addBill: state.addBill,
    deleteBill: state.deleteBill,
    clearBill: state.clearBill,
  }));
  return (
    <SideBarStyle>
      <div style={{height: '90%', overflow: 'auto', backgroundColor: 'lightgray'}}>
        {bill.map((b) => (
          <div style={{display: 'flex', flexDirection: 'row', backgroundColor: "white", margin: 8, justifyContent: 'space-between', padding: 8}}>
            <div>{b?.name}</div>
            <div>{b?.price}</div>
          </div>
        ))}
      </div>
      <div>{}</div>
      <Button block type="primary" onClick={()=>clearBill()}>
        Thanh toan
      </Button>
    </SideBarStyle>
  );
}
