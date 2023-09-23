import React from 'react';
import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import WrapperInputSearch from './style';


export default function InputSearch(props) {
    const {size,placeholder,text_btn} = props;
  return (
    <WrapperInputSearch>
    <Input size={size} placeholder={placeholder}/>
    <Button size={props.size} icon={<SearchOutlined />}>{text_btn}</Button>
    </WrapperInputSearch>
  )
}
