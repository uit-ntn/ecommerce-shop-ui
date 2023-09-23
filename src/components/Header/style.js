import { Row } from "antd";
import styled from "styled-components";

const WrapperHeader = styled(Row)`
 padding : 10px 120px;
 background-color : rgb(81, 203, 237)
   `
export  default WrapperHeader;



const WrapperTextHeader = styled.span`
   font-size :18px;
   color : #fff;
   font-weight : bold;
   text-align : left;

`
export {WrapperTextHeader};


const WrapperHeaderAccount = styled.div`
display : flex;
align-items : center;
color : #fff;
gap : 10px;
font-size :16px;
max-width : 200px;
`
export {WrapperHeaderAccount};


const WrapperTextCart = styled.div`
font-size : 18px;
font-weight : bold;
`
export {WrapperTextCart};


const WrapperIcon = styled.div`
display: flex;
justify-content: space-around;
color: #fff;
`
export {WrapperIcon};