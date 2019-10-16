/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';
import { PromiseProvider } from 'mongoose';

const PriceWrap = styled.section``;

const PriceHeader = styled.h2`
text-align: left;
`;

const PriceAfterpay = styled.h1`
font-size: .8em;
text-transform: uppercase;
text-align: left;
`;

const PriceRetail = styled.h4`
text-align: left;
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
        OR 4 INTEREST-FREE INSTALLMENTS OF $17.50 BY
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
