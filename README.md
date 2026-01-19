# Frontend — Análise Tabela FIPE

Aplicação frontend desenvolvida em **Angular 14**, responsável por permitir a **seleção de marca e modelo de veículos** e exibir a **análise histórica de valores calculada pelo microsserviço backend**.

O frontend atua exclusivamente como **camada de apresentação**, delegando toda a lógica de negócio e cálculos ao backend.

---

## Objetivo

- Permitir ao usuário selecionar:
  - tipo de veículo
  - marca
  - modelo
- Enviar os parâmetros selecionados ao backend
- Exibir os dados retornados de forma clara e organizada:
  - valor do veículo por ano
  - variação absoluta de preço
  - variação percentual
- Garantir uma interface simples, funcional e de fácil entendimento

---

## Funcionalidades

- Listagem de marcas e modelos a partir da **API pública da Tabela FIPE**
- Integração com o microsserviço backend para análise histórica
- Exibição dos dados em formato tabular
- Formatação monetária (R$) e percentual
- Tratamento visual para valores inexistentes (ex.: primeiro ano da série)

---

## Decisão Arquitetural

### Consumo direto da API FIPE

As informações de **marcas** e **modelos** são consumidas diretamente no frontend a partir da **API pública da Tabela FIPE**.

Essa abordagem foi adotada de forma intencional, considerando que:

- São dados públicos e sem regra de negócio
- Não exigem validação ou processamento adicional
- Não fazem parte do domínio central da aplicação
- Evitam a criação de endpoints de repasse (*proxy*) no backend

O backend permanece focado exclusivamente em **casos de uso e regras de negócio**, enquanto o frontend atua como consumidor e apresentador dos dados.

---

## Integração com o Backend

O frontend se comunica com o backend por meio do seguinte endpoint:

```http
GET /api/fipe/analise?vehicleType={tipo}&brandId={marca}&modelId={modelo}
