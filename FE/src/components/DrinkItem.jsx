import { Button, Image, message } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { postRequest } from "../hooks/api";
import { useStore } from "../hooks/useStore";
const DrinkItemStyle = styled.div`
  width: 400px;
`;
export default function DrinkItem(props) {
  const [quantity, setQuantity] = useState(1);
  const { addBill } = useStore((state) => ({
    userName: state.userName,
    addBill: state.addBill
  }));
  const handleButton = async () => {
    addBill({
      name: props.name,
      price: props.price,
      quantity: quantity,
    })
    message.success("Bạn đã thêm vào hóa đơn thành công");
  };
  return (
    <DrinkItemStyle>
      <Image src={props.url} width={400} height={330} />
      <div>
        <p
          style={{
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "bold",
            marginBottom: 0,
          }}
        >
          {props.name} :{" "}
          {props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VNĐ
        </p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          gap: "10px",
          justifyContent: "space-between",
        }}
      >
        <MinusOutlined
          style={{ fontSize: "20px" }}
          onClick={() => quantity > 1 && setQuantity(quantity - 1)}
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <p style={{ marginBottom: 0 }}>Số lượng {quantity}</p>
        </div>
        <PlusOutlined
          style={{ fontSize: "20px" }}
          onClick={() => quantity < 10 && setQuantity(quantity + 1)}
        />
      </div>
      <Button
        type="primary"
        icon={<ShoppingCartOutlined />}
        block
        onClick={handleButton}
      >
        Thêm vào hóa đơn
      </Button>
    </DrinkItemStyle>
  );
}
