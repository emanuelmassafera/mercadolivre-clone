/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';

import tshirtImage from '../../assets/tshirt.png';

import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction';

import { Container, Row, Panel, Column, Gallery, Section, Description } from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="T-Shirt" src={tshirtImage} />
          </Gallery>

          <Info/>
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">Receba o produto que está esperando ou devolvemos o seu dinheiro.</p>
      </span>

      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">7 dias de garantia para defeito de fabricação.</p>
      </span>

    </div>
    
    <a href="#">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id efficitur tortor. Vestibulum volutpat erat nulla, nec laoreet eros sagittis sed.
      <br />
      <br />
      Curabitur vel tempor arcu: <br />
      <br />
      - vitae <br />
      - vestibulum <br />
      - velit <br />
      - semper <br />
      <br />
      Fusce gravida lectus lacinia risus congue, gravida interdum ex consequat:
      <br />
      <br />
      Fusce faucibus neque eget leo semper, a dictum nisl sagittis. Nullam pellentesque porttitor massa. Curabitur sit amet urna metus. Aliquam suscipit urna vel tempus consequat. Vestibulum eleifend gravida felis, non mollis leo sodales et.
      </p>
  </Description>
);

export default Product;
