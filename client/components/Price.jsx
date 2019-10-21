/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';
// import { PromiseProvider } from 'mongoose';

const PriceWrap = styled.section``;

const PriceHeader = styled.h2`
text-align: left;
font-family: Helvetica;
font-weight: 700;
font-size: 18px;
`;

const PriceAfterpay = styled.h1`
font-size: 10px;
text-transform: uppercase;
text-align: left;
font-family: Helvetica;
line-height: 12px;
font-weight: 400;
`;

const PriceRetail = styled.h4`
text-align: left;
font-size: 13px;
font-family: Helvetica;
font-weight: 300;
color: grey;
`;

// eslint-disable-next-line react/prop-types
function Price({ price, afterpay, retail }) {
  return (
    <PriceWrap>
      <PriceHeader>
        $
        {price}
      </PriceHeader>
      <PriceAfterpay>
        OR 4 INTEREST-FREE INSTALLMENTS OF ${price / 4} BY
        <img src={afterpay} />
        Ⓘ
      </PriceAfterpay>
      <PriceRetail>
        Traditional Retail: $
        {retail}
      </PriceRetail>
    </PriceWrap>
  );
}

export default Price;
