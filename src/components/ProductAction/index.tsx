import React from 'react';

import visaCard from '../../assets/visa.svg';
import masterCard from '../../assets/mastercard.svg';


import { 
  Container,
  Condition,
  Row,
  HeartIcon,
  DispatchTag,
  PriceCard,
  PriceRow,
  InstallmentsInfo, 
  StockStatus,
  MethodCard,
  CheckIcon,
  Actions,
  Button,
  Benefits,
  ShieldIcon,
  Conditions,
  OldPrice,
  CardIcon,
  ReturnIcon
} from './styles';

const ProductAction: React.FC = () => {
  return (
    <Container>
      <Conditions>
        <Condition>Novo</Condition>
        <Condition>254 vendidos</Condition>
      </Conditions>


      <Row>
        <h1>Camiseta Branca Básica Lisa</h1>
        <HeartIcon />
      </Row>

      <PriceCard>
        <OldPrice>
          <span>R$ 34</span>
        </OldPrice>
        <PriceRow>
          <span className="symbol">R$</span>
          <span className="fraction">24</span>
          <span className="cents">90</span>
        </PriceRow>

      </PriceCard>

      <DispatchTag>Enviando normalmente</DispatchTag>


      <MethodCard>
        <CardIcon />

        <div>
          <span className="title">4x R$6,22 sem juros</span>
          <div className="payment-methods">
            <img src={visaCard} alt="Visa Card"/>
            <img src={masterCard} alt="MasterCard"/>
          </div>
          <a href="#" className="more">
            Mais informações
          </a>
        </div>
      </MethodCard>

      <MethodCard>
        <CheckIcon />

        <div>
          <span className="title">Frete grátis</span>
          <span className="details">Saiba os prazos de entrega e as formas de envio</span>
          <a href="#" className="more">
            Calcular o prazo de entrega
          </a>
        </div>
      </MethodCard>

      <MethodCard>
        <ReturnIcon />

        <div>
          <span className="title">Devolução grátis</span>
          <span className="details">Você tem 30 dias a partir da data de recebimento</span>
          <a href="#" className="more">
            Saiba mais
          </a>
        </div>
      </MethodCard>

      <StockStatus>Estoque disponível</StockStatus>

      <Actions>
        <Button solid>Comprar agora</Button>
        <Button>Adicionar ao carrinho</Button>
      </Actions>

      <Benefits>
        <li>
          <ShieldIcon />
          <p>
            Compra garantida, receba o produto que está esperando ou devolvemos o seu dinheiro.
          </p>
        </li>
      </Benefits>
    </Container>
  );
};

export default ProductAction;
