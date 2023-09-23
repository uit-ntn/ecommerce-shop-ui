import React from 'react';
import { Col } from 'antd';
import WrapperHeader, {
  WrapperTextHeader,
  WrapperHeaderAccount,
  WrapperIcon,
  WrapperTextCart
} from './style';
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';
import InputSearch from '../InputSearch/InputSearch';

function Header() {
  return (
    <div>
      <WrapperHeader>
        <Col span={6}>
          <WrapperTextHeader>N Shop</WrapperTextHeader>
        </Col>

        {/*search bar section*/}
        <Col span={12}>
          <InputSearch
            size='large'
            placeholder="Search..."
            text_btn="Search"
            //  onSearch={onSearch} 
            enterButton />
        </Col>


        {/*Login section*/}
        <Col span={6}>
          <WrapperIcon>
            <WrapperHeaderAccount>
              <UserOutlined />
              <div>
                <span>Login/Sign up</span>
                <div>
                  <span>Account</span>
                  <CaretDownOutlined />
                </div>
              </div>
            </WrapperHeaderAccount>

            <div>
              <div>
                <ShoppingCartOutlined />
                <WrapperTextCart>Cart</WrapperTextCart>
              </div>
            </div>
          </WrapperIcon>
        </Col>

      </WrapperHeader>
    </div>

  )
}
export default Header;