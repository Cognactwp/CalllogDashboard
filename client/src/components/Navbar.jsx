// import { Badge } from "@material-ui/core";
// import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import {useNavigate} from 'react-router-dom';

const Container = styled.div`
  height: 45px;
  background-color: gray;
  color: white;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  margin-left: 25px;
  flex: 1;
  display: flex;
  align-items: center;
`;


const Center = styled.div`
  flex: 1;
  display: flex;
//   text-align: left;
//   justify-content: flex-end;
`;

const Logo = styled.h3`
  font-weight: bold;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;



const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Left>
            <Logo onClick={() => navigate("/")}>DashBoard/CallLog</Logo>
            <MenuItem onClick={() => navigate("/Dashboard")}>DASHBOARD</MenuItem>
            <MenuItem onClick={() => navigate("/DashboardSLA")}>DASHBOARD_SLA</MenuItem>
        </Left>
        <Center>
        </Center>
        <Right>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
