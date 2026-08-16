# Melhores Casas de Apostas Chinesas que Pagam 2026

Comparador de código aberto das plataformas asiáticas de apostas esportivas, com foco em um único critério que a maioria dos rankings evita medir: **elas pagam?**

Este repositório contém duas coisas. A primeira é um software simples, sem dependências, que pontua e compara casas de apostas asiáticas a partir de um conjunto de dados aberto e auditável. A segunda é esta documentação, que explica em detalhe o método, o contexto regulatório e o que um apostador brasileiro precisa saber antes de depositar um real em qualquer plataforma sediada na Ásia.

Nada aqui é promessa de lucro. Apostar é uma atividade de risco em que a perda é o resultado mais provável no longo prazo para a maioria das pessoas. O objetivo deste projeto é reduzir um risco específico e evitável: o de escolher uma casa que simplesmente não devolve o dinheiro.

> **Proibido para menores de 18 anos.** Se apostar deixou de ser diversão, procure apoio: [CVV, telefone 188](https://www.cvv.org.br/) ou [Jogadores Anônimos Brasil](https://www.jogadoresanonimos.com.br/).

---

## Índice

1. [Ranking rápido: melhores casas de apostas chinesas que pagam em 2026](#ranking-rápido-melhores-casas-de-apostas-chinesas-que-pagam-em-2026)
2. [Escolha por perfil de apostador](#escolha-por-perfil-de-apostador)
3. [O que é este software e como rodar](#o-que-é-este-software-e-como-rodar)
4. [Metodologia: os sete pilares da nota](#metodologia-os-sete-pilares-da-nota)
5. [O que significa "casa de apostas chinesa"](#o-que-significa-casa-de-apostas-chinesa)
6. [Análise detalhada de cada plataforma](#análise-detalhada-de-cada-plataforma)
7. [Handicap asiático: por que essas casas existem](#handicap-asiático-por-que-essas-casas-existem)
8. [Margem, valor e o custo invisível de uma odd ruim](#margem-valor-e-o-custo-invisível-de-uma-odd-ruim)
9. [Política de limites: a casa aceita quem ganha?](#política-de-limites-a-casa-aceita-quem-ganha)
10. [Pagamentos: Pix, criptomoedas e agentes locais](#pagamentos-pix-criptomoedas-e-agentes-locais)
11. [KYC e verificação de identidade](#kyc-e-verificação-de-identidade)
12. [Passo a passo do primeiro saque](#passo-a-passo-do-primeiro-saque)
13. [Sinais de alerta de uma casa que não paga](#sinais-de-alerta-de-uma-casa-que-não-paga)
14. [Bônus e requisitos de rollover](#bônus-e-requisitos-de-rollover)
15. [Situação legal no Brasil em 2026](#situação-legal-no-brasil-em-2026)
16. [Impostos sobre prêmios](#impostos-sobre-prêmios)
17. [Segurança digital e riscos operacionais](#segurança-digital-e-riscos-operacionais)
18. [Jogo responsável](#jogo-responsável)
19. [Perguntas frequentes](#perguntas-frequentes)
20. [Glossário](#glossário)
21. [Estrutura do repositório e roadmap](#estrutura-do-repositório-e-roadmap)
22. [Fontes e leitura complementar](#fontes-e-leitura-complementar)

---

## Ranking rápido: melhores casas de apostas chinesas que pagam em 2026

A tabela abaixo é a saída literal do comando `node scripts/rank.mjs --benchmark`. Ela não foi escrita à mão. Se você alterar os pesos no dataset, a ordem muda, e é exatamente esse o ponto: um ranking que não pode ser recalculado por quem lê é apenas uma opinião com formatação bonita.

| # | Casa | Nota | Saque médio | Margem | Pix | Conta em BRL | Licenças |
|---|------|------|-------------|--------|-----|--------------|----------|
| 1 | Dafabet | 8.97 | 8h | 2.6% | sim | sim | Curaçao eGaming, PAGCOR |
| 2 | SBOBet | 8.64 | 6h | 1.9% | não | não | Isle of Man GSC, PAGCOR |
| 3 | Pinnacle (referência ocidental) | 8.38 | 4h | 2.0% | não | não | Curaçao eGaming |
| 4 | BK8 | 8.18 | 5h | 3.4% | sim | sim | Curaçao eGaming |
| 5 | 188Bet | 7.82 | 10h | 2.2% | não | não | Isle of Man GSC, PAGCOR |
| 6 | W88 | 7.59 | 10h | 3.1% | não | não | Curaçao eGaming, PAGCOR |
| 7 | M88 Mansion | 7.54 | 12h | 2.5% | não | não | Curaçao eGaming, PAGCOR |
| 8 | CMD368 | 7.47 | 12h | 2.0% | não | não | PAGCOR |
| 9 | Maxbet (IBCBet) | 7.46 | 8h | 1.8% | não | não | PAGCOR |
| 10 | 12BET | 7.28 | 14h | 2.7% | não | não | Curaçao eGaming, PAGCOR |
| 11 | Fun88 | 6.99 | 16h | 3.0% | não | não | Curaçao eGaming, PAGCOR |
| 12 | K9Win | 6.18 | 18h | 3.6% | não | não | Curaçao eGaming |
| 13 | ME88 | 6.01 | 20h | 3.8% | não | não | Curaçao eGaming |
| 14 | 9Wickets | 5.94 | 24h | 3.5% | não | não | Curaçao eGaming |
| 15 | EU9 | 5.71 | 22h | 3.9% | não | não | Curaçao eGaming |

A Pinnacle entra na lista como linha de base, e não como concorrente asiática. Ela é ocidental, opera sob licença de Curaçao e serve de régua para dois números que importam muito neste comparativo: margem de mercado e tolerância a apostadores vencedores. Quando uma casa asiática fica abaixo da Pinnacle nesses dois pilares, o problema não é o mercado asiático, é a casa.

Duas leituras rápidas da tabela merecem atenção.

**Primeira:** as casas com melhor infraestrutura para o Brasil (Dafabet e BK8, as únicas com Pix e conta nativa em real) não são as mesmas que oferecem as melhores odds. Maxbet e SBOBet têm margens muito menores, mas exigem que você opere em dólar ou em stablecoin e conviva com suporte que não fala português.

**Segunda:** velocidade de saque e confiabilidade de pagamento não são a mesma coisa. A BK8 paga rápido, em média cinco horas, e ainda assim aparece atrás de casas mais lentas na nota final, porque restringe com frequência contas de apostadores consistentemente lucrativos. Uma casa que paga rápido enquanto você perde e fecha sua conta quando você começa a ganhar tecnicamente "paga", mas não resolve o seu problema.

---

## Escolha por perfil de apostador

Ranking único serve para vender lista. Na prática, a melhor casa depende do que você faz.

### Você aposta valores pequenos e quer o dinheiro na conta no mesmo dia

Priorize **Dafabet** e **BK8**. São as duas únicas do conjunto com Pix, conta nativa em real e atendimento em português funcionando ao mesmo tempo. O custo dessa conveniência aparece na margem: você paga entre meio ponto e um ponto e meio percentual a mais por aposta do que pagaria na SBOBet. Para quem aposta cem reais por rodada, isso é irrelevante. Para quem aposta cinco mil, é o resultado do ano inteiro.

Recalcule o ranking para esse perfil:

```bash
node scripts/rank.mjs --pix --pt --max-hours=24 --pillars
```

### Você aposta volume alto e procura a melhor linha disponível

Priorize **SBOBet**, **Maxbet** e **CMD368**. As três operam com margens abaixo de 2.2% nas ligas principais, aceitam apostas altas e raramente restringem contas vencedoras. Nenhuma delas tem Pix. Você vai precisar de USDT ou de transferência internacional, e vai precisar aceitar que o suporte responde em inglês ou em chinês.

```bash
node scripts/rank.mjs --sharp --benchmark --pillars
```

### Você é iniciante e nunca apostou em plataforma estrangeira

Antes de olhar qualquer nome desta lista, leia a seção [Situação legal no Brasil em 2026](#situação-legal-no-brasil-em-2026). Nenhuma das casas asiáticas aqui analisadas possui autorização federal brasileira. Isso tem consequências práticas concretas, e você precisa entendê-las antes de decidir, não depois de um saque travado. Para uma leitura em português dedicada ao funcionamento dessas operadoras e ao que muda para o público brasileiro, o site [plataformachinesa.com.br](https://plataformachinesa.com.br/) mantém material específico sobre plataformas asiáticas.

### Você quer apenas entender como o mercado asiático funciona

Vá direto para [Handicap asiático: por que essas casas existem](#handicap-asiático-por-que-essas-casas-existem). É a seção que explica por que existe um circuito de apostas paralelo, centrado no sudeste asiático, com regras de precificação diferentes do modelo europeu.

---

## O que é este software e como rodar

O comparador é deliberadamente simples. Nenhuma dependência de terceiros, nenhum build, nenhum framework. Roda com Node 18 ou superior, e a interface web funciona em qualquer navegador moderno.

### Requisitos

- Node.js 18 ou superior (para o CLI, os testes e o servidor local)
- Um navegador moderno (para a interface web)

### Instalação

```bash
git clone https://github.com/tomasbalazgitboo/melhores-plataformas-chinesas-que-pagam.git
cd melhores-plataformas-chinesas-que-pagam
```

Não há `npm install`. O projeto não tem dependências.

### Interface web

```bash
npm start
```

Abra `http://localhost:4173`. A página carrega o dataset, aplica os filtros que você marcar e recalcula o ranking em tempo real. O painel "Ajustar os pesos do ranking" permite mudar quanto cada pilar vale na nota final, o que na prática transforma o ranking geral em um ranking pessoal.

### Linha de comando

```bash
# ranking padrão
node scripts/rank.mjs

# apenas casas com Pix, interface em português e saque médio até 24h
node scripts/rank.mjs --pix --pt --max-hours=24

# apenas casas que toleram apostadores vencedores, com detalhe por pilar
node scripts/rank.mjs --sharp --pillars

# comparação direta entre duas casas
node scripts/rank.mjs --compare=sbobet,dafabet

# ranking considerando apenas velocidade de saque
node scripts/rank.mjs --weights=withdrawal_speed:1

# saída em JSON, para integrar com outra ferramenta
node scripts/rank.mjs --json --top=5

# todas as opções
node scripts/rank.mjs --help
```

### Validação e testes

```bash
node scripts/validate.mjs
node --test "tests/*.test.mjs"
```

O validador checa integridade estrutural do dataset: campos obrigatórios, ids únicos, notas dentro do intervalo de zero a dez, soma dos pesos igual a um, coerência entre tempo médio e tempo máximo de saque, e presença de uma URL de verificação de licença para cada operadora. O CI do GitHub roda os dois a cada push e a cada pull request. Um dado inconsistente não entra na branch principal.

---

## Metodologia: os sete pilares da nota

A nota final de cada casa é uma média ponderada de sete pilares. Três deles são calculados diretamente a partir de números objetivos do dataset. Quatro são notas editoriais, atribuídas por avaliação e claramente identificadas como tal no arquivo `data/bookmakers.json`.

Essa separação é proposital. Um comparativo que apresenta tudo como "dado" esconde quanto do resultado é julgamento. Aqui, você consegue abrir o JSON e ver exatamente qual número veio de medição e qual veio de opinião.

| Pilar | Peso padrão | Origem |
|-------|-------------|--------|
| Confiabilidade de pagamento | 28% | Editorial |
| Velocidade de saque | 18% | Calculado |
| Valor das odds | 16% | Calculado |
| Política de limites | 12% | Editorial |
| Pagamentos no Brasil | 12% | Híbrido |
| Suporte em português | 8% | Editorial |
| Profundidade do produto | 6% | Editorial |

### 1. Confiabilidade de pagamento (28%)

O pilar de maior peso, e o mais difícil de medir. Ele responde a uma pergunta simples: quando você pede o dinheiro de volta, ele chega?

Os componentes considerados são a idade da operadora, o volume de reclamações não resolvidas em fóruns e serviços de mediação, o histórico de mudanças abruptas de termos, a existência de casos documentados de confisco de saldo, e a estabilidade societária do grupo por trás da marca.

Idade importa mais do que parece. Uma operadora que atravessa vinte anos sem escândalo de pagamento passou por múltiplos ciclos de crise, mudanças regulatórias e picos de saque simultâneo. Uma marca lançada há dezoito meses ainda não foi testada por nenhum deles. Não é preconceito contra operador novo, é reconhecimento de que o histórico é a única evidência que existe.

O peso de 28% reflete a tese central do projeto: uma odd excelente em uma casa que não paga vale zero. Todos os outros pilares são multiplicados, na prática, pela probabilidade de você conseguir sacar.

### 2. Velocidade de saque (18%)

Calculado a partir do campo `withdrawal.avg_hours`, com decaimento linear: dez pontos para saques processados em até duas horas, zero ponto em noventa e seis horas.

A fórmula está em `src/scoring.mjs` e pode ser lida em quinze segundos:

```js
export function withdrawalSpeedScore(bookmaker) {
  return invertedLinearScore(bookmaker.withdrawal?.avg_hours, 2, 96);
}
```

O tempo medido é o tempo até o dinheiro sair da operadora, não o tempo total até cair na conta. A perna final depende do seu banco, da rede da criptomoeda ou do processador local, e varia demais para ser atribuída à casa.

Vale registrar que velocidade média esconde variância. Uma casa com média de oito horas pode processar quase tudo em duas e travar um saque a cada vinte por quatro dias. É por isso que o dataset também registra `max_hours`, e o validador rejeita registros em que a média é maior que o máximo.

### 3. Valor das odds (16%)

Calculado a partir da margem média nas ligas principais de futebol, com dez pontos em 1.5% e zero em 8%.

Margem, também chamada de overround ou vigorish, é a fatia que a casa embute nas cotações. Uma partida com margem de 2% significa que, se você apostasse em todos os resultados possíveis proporcionalmente, perderia 2% do valor total. É o custo de operação da sua aposta, e ele incide em cada bilhete, ganhando ou perdendo.

O mercado asiático é historicamente mais competitivo nesse quesito do que o europeu, e a razão é estrutural: essas casas nasceram atendendo apostadores de alto volume que comparam linhas entre operadoras em tempo real. Quem cobra caro demais perde o fluxo em minutos.

### 4. Política de limites (12%)

Este pilar mede se a casa aceita continuar aceitando apostas de quem ganha.

Existe uma diferença categórica entre dois modelos de negócio. O primeiro, dominante no varejo europeu e em boa parte do mercado brasileiro, lucra com margem alta sobre apostadores recreativos e restringe rapidamente quem demonstra vantagem. O segundo, comum no circuito asiático, lucra com volume enorme e margem apertada, e trata o apostador vencedor como fonte de informação de precificação em vez de como problema.

O dataset registra três campos aqui: `max_single_bet_usd`, `sharp_friendly` e `account_limiting`, este último com valores "baixo", "médio" ou "alto".

Um apostador recreativo pode achar que esse pilar não lhe diz respeito. Diz. Casas que restringem agressivamente costumam restringir também por padrões de comportamento que nada têm a ver com lucro, como apostar sempre logo após a abertura da linha ou concentrar volume em ligas menores.

### 5. Pagamentos no Brasil (12%)

Pilar híbrido: metade nota editorial, metade cálculo objetivo a partir dos campos de pagamento.

O componente objetivo distribui pontos assim: quatro pontos por aceitar Pix, três por manter conta nativa em real, um e meio por aceitar criptomoedas, um por oferecer duas ou mais carteiras eletrônicas, e meio ponto por saque mínimo de até sessenta reais.

O peso do Pix não é exagero. Sem ele, todo depósito e todo saque passa por conversão cambial, e a conversão é onde o dinheiro evapora silenciosamente. Uma casa que converte real para dólar na entrada e dólar para real na saída pode consumir de dois a quatro por cento do valor no ciclo completo, mesmo cobrando "zero de taxa" em cada ponta.

### 6. Suporte em português (8%)

Nota editorial que considera se existe atendimento real em português (e não apenas tradução automática da interface), quais canais estão disponíveis, e o tempo médio de primeira resposta.

Oito por cento pode parecer pouco. É proporcional à frequência com que o suporte importa: raramente. Mas quando importa, importa muito, porque a única situação em que você realmente precisa dele é justamente aquela em que um saque não saiu.

### 7. Profundidade do produto (6%)

Número de esportes, mercados ao vivo, transmissão de jogos, presença de cassino e qualidade dos aplicativos.

Peso baixo de propósito. Quantidade de mercado é o item mais fácil de inflar em material promocional e o menos correlacionado com o resultado do apostador. Uma casa com quarenta esportes e uma casa com vinte esportes servem igualmente bem a quem aposta em futebol europeu.

### Como mudar os pesos

Os pesos padrão refletem uma tese: para o público brasileiro, receber é mais importante do que qualquer outra coisa. Se a sua tese for diferente, mude.

```bash
node scripts/rank.mjs --weights=odds_value:0.5,limits_policy:0.3,payout_reliability:0.2
```

Na interface web, o mesmo ajuste é feito por controles deslizantes, e o ranking recalcula a cada movimento.

---

## O que significa "casa de apostas chinesa"

Vale desfazer uma confusão comum, porque ela leva gente a procurar a coisa errada.

O jogo de azar comercial é proibido na República Popular da China continental, com exceção das loterias estatais. Uma explicação geral do arcabouço está no verbete [Gambling in China](https://en.wikipedia.org/wiki/Gambling_in_China) da Wikipedia. Portanto, não existe uma "casa de apostas chinesa" no sentido de empresa licenciada em Pequim ou Xangai para aceitar apostas esportivas.

O que existe é outra coisa, e é maior.

### O circuito asiático

Existe um ecossistema de operadoras sediadas nas Filipinas, em Curaçao, na Ilha de Man, na Malásia e em Singapura, que historicamente atende ao mercado de língua chinesa e ao sudeste asiático. Essas empresas construíram o formato de precificação que o mundo inteiro hoje chama de handicap asiático, operam com margens muito menores que o varejo europeu e movimentam volume institucional.

Quando um apostador brasileiro procura "melhores casas de apostas chinesas que pagam", é a esse circuito que ele está se referindo, mesmo sem saber. Marcas como SBOBet, 188Bet, M88 e 12BET nasceram dentro dele.

### Macau é outro assunto

[Macau](https://pt.wikipedia.org/wiki/Macau), região administrativa especial da China, tem regime de jogo próprio e legal, mas o foco é cassino físico, não apostas esportivas online para o público internacional. Uma casa "de Macau" no sentido de sportsbook online voltado ao Brasil é, na prática, marketing.

### As licenças que realmente aparecem

Três jurisdições concentram quase tudo que interessa neste comparativo.

**Filipinas (PAGCOR).** A [Philippine Amusement and Gaming Corporation](https://en.wikipedia.org/wiki/Philippine_Amusement_and_Gaming_Corporation) é ao mesmo tempo reguladora e operadora estatal. Licencia operações offshore voltadas a mercados externos. É a origem regulatória mais comum entre as grandes marcas asiáticas.

**[Curaçao](https://pt.wikipedia.org/wiki/Cura%C3%A7ao).** Regime historicamente permissivo, com custo de entrada baixo e supervisão leve, em processo de reforma desde o início da década. O contexto geral desse tipo de licenciamento remoto está no verbete [Online gambling](https://en.wikipedia.org/wiki/Online_gambling) da Wikipedia. Uma licença de Curaçao diz que a empresa existe formalmente. Diz muito pouco sobre se ela paga.

**Ilha de Man.** A [Isle of Man](https://en.wikipedia.org/wiki/Isle_of_Man) mantém o regime mais exigente entre os três, com requisitos de segregação de fundos de jogadores e capital mínimo. Entre as casas asiáticas, é o selo mais forte que aparece, e não por acaso as duas que o carregam neste dataset (SBOBet e 188Bet) estão entre as de melhor histórico de pagamento.

### A hierarquia prática

Não trate todas as licenças como equivalentes. Em ordem decrescente de proteção efetiva ao apostador, dentro do universo deste comparativo: Ilha de Man, depois PAGCOR, depois Curaçao. E abaixo de tudo, casa sem licença verificável, que não deveria receber um centavo seu.

Cada registro do dataset traz o campo `verify_url`, apontando para o registro público da autoridade. Verifique. Marca no rodapé do site não é licença, é imagem.

---

## Análise detalhada de cada plataforma

As análises abaixo descrevem o que cada operadora é, para quem serve e onde ela falha. Nenhuma delas é recomendação. Todas as informações refletem a última revisão do dataset, em agosto de 2026, e mudam sem aviso.

### 1. Dafabet (nota 8.97)

Fundada em 2004, licenciada em Curaçao e pela PAGCOR, é a única casa do conjunto que combina as três coisas que um apostador brasileiro pede na prática: conta nativa em real, Pix funcionando e atendimento em português com tempo médio de primeira resposta na casa dos três minutos.

Essa combinação é rara o suficiente para explicar sozinha a primeira posição. As demais casas asiáticas ou não têm Pix, ou não têm conta em real, ou não têm suporte que fale português de verdade.

O ponto fraco é a margem. Em 2.6% nas ligas principais, a Dafabet é claramente mais cara que SBOBet, Maxbet e CMD368. Para quem gira volume alto, essa diferença de sete décimos de ponto percentual por aposta corrói mais resultado do que qualquer bônus recupera. Para quem aposta valores moderados, a conveniência compensa com folga.

A política de limites é intermediária. A casa aceita apostas altas em mercados principais e tolera apostadores lucrativos até certo ponto, mas há relatos consistentes de redução de limites para contas que operam sistematicamente em mercados de menor liquidez.

Saque médio de oito horas, máximo declarado de quarenta e oito, mínimo de quarenta reais e até três saques gratuitos por semana. É um dos perfis operacionais mais equilibrados da lista.

**Serve para:** apostador brasileiro de volume baixo a médio que quer o dinheiro de volta rápido, em real, sem lidar com câmbio.
**Não serve para:** quem caça a melhor linha disponível e mede resultado em décimos de ponto de margem.

### 2. SBOBet (nota 8.64)

Se existe uma casa que define o circuito asiático, é esta. Fundada em 2004, licenciada pela Isle of Man Gambling Supervision Commission e pela PAGCOR, é a referência histórica do handicap asiático e o padrão contra o qual as demais são medidas.

Os números explicam a reputação. Margem de 1.9% nas ligas principais, mil e quinhentos mercados ao vivo, aposta máxima na casa das seis cifras em dólar, e uma política de limites que é provavelmente a mais permissiva de todo o mercado asiático. A SBOBet historicamente não fecha a conta de quem ganha. Ela ajusta a linha e usa a sua aposta como informação.

A nota de confiabilidade de pagamento, 9.5, é a mais alta entre as casas asiáticas do conjunto, sustentada por mais de vinte anos de operação sem episódio sistêmico de confisco de saldo, sob a licença mais exigente da lista.

O problema é o Brasil. Não há Pix. Não há conta em real. O saque mínimo equivale a cem reais e a estrutura de depósito depende de USDT, carteiras eletrônicas ou transferência internacional. A interface tem português, mas o suporte real é limitado, e o acesso em várias regiões passa por agentes intermediários, um modelo que adiciona uma camada de contraparte que você não escolheu.

**Serve para:** apostador experiente, de volume alto, disposto a operar em dólar ou stablecoin em troca da melhor linha do mercado.
**Não serve para:** iniciante, ou quem não quer lidar com câmbio e suporte em inglês.

### 3. Pinnacle (nota 8.38, referência ocidental)

Incluída fora de concurso. A Pinnacle não é asiática, opera desde 1998 sob licença de Curaçao, e está aqui por um motivo metodológico: ela é a régua.

Com margem de 2.0%, saque médio de quatro horas e a política anti-restrição mais explícita do setor (a empresa declara publicamente que não limita apostadores vencedores), ela define o teto do que é possível em política de limites e o piso do que é aceitável em margem.

Use-a como teste de sanidade. Quando uma casa asiática cobra margem de 3.8% e ainda restringe contas, o problema não é o mercado asiático ser assim. O problema é a casa.

Do lado brasileiro, a Pinnacle é fraca: sem Pix, sem conta em real, sem aplicativo nativo, e um suporte que funciona basicamente por central de ajuda e e-mail, com tempo de resposta medido em horas, não em minutos.

### 4. BK8 (nota 8.18)

Fundada em 2015, com base na Malásia e licença de Curaçao, é a casa mais bem adaptada ao Brasil de todo o conjunto. Pix, conta em real, suporte em português por chat e WhatsApp com resposta média em dois minutos, saque mínimo de cinquenta reais, cinco saques gratuitos por semana e tempo médio de processamento de cinco horas.

Em pagamentos no Brasil, é a nota mais alta da lista. Em experiência de usuário para o público brasileiro, também.

E ainda assim ela fica em quarto. O motivo está em dois pilares.

Primeiro, a margem: 3.4% nas ligas principais é quase o dobro da SBOBet. Você paga essa diferença em cada aposta, todos os dias, ganhando ou perdendo.

Segundo, e mais importante, a política de limites. A BK8 está classificada com restrição de conta "alta" e `sharp_friendly` falso. Contas que demonstram lucro consistente tendem a sofrer redução de limites em prazo curto. Isso não é fraude, é modelo de negócio, e é perfeitamente legal. Mas significa que a casa é excelente enquanto você perde e desconfortável quando você começa a ganhar, o que é exatamente o cenário que uma pesquisa por "casas que pagam" deveria antecipar.

**Serve para:** apostador recreativo brasileiro que valoriza Pix rápido e suporte ágil acima de tudo.
**Não serve para:** quem tem método e pretende escalar volume.

### 5. 188Bet (nota 7.82)

Operando desde 2006 sob licença da Ilha de Man e da PAGCOR, a 188Bet é uma casa sólida no núcleo e ausente na periferia.

No núcleo: margem de 2.2%, novecentos mercados ao vivo, aposta máxima elevada, restrição de conta classificada como baixa e nota de confiabilidade de pagamento de 9.0. A cobertura de futebol asiático, incluindo divisões inferiores de Japão, Coreia do Sul e China, é uma das mais profundas que existem.

Na periferia: nada de Pix, nada de conta em real, nada de interface em português, sem aplicativo iOS, e tempo médio de primeira resposta do suporte na casa dos oito minutos, em inglês. O saque mínimo equivale a cento e vinte reais e a média de processamento é de dez horas.

É uma casa boa que não foi construída pensando no Brasil, e não finge o contrário. Para um apostador que já opera em USDT e domina inglês, ela entrega quase tudo que a SBOBet entrega. Para qualquer outro perfil, a fricção de entrada é alta demais para valer a pena.

### 6. W88 (nota 7.59)

Fundada em 2013, licenciada em Curaçao e pela PAGCOR, é uma casa de perfil misto que se destaca mais em cassino ao vivo e slots do que no esportivo.

O ponto positivo para o Brasil é a interface em português com suporte que responde em cerca de cinco minutos, além de uma gama ampla de criptomoedas aceitas, incluindo USDT, Bitcoin e Ethereum. Saque mínimo equivalente a sessenta reais, média de dez horas.

O ponto negativo é o esportivo em si. Margem de 3.1% coloca a W88 na metade cara da tabela, e a classificação `sharp_friendly` falsa indica tolerância limitada a apostadores vencedores. Não há Pix nem conta nativa em real, o que significa conversão cambial em toda entrada e saída.

**Serve para:** quem quer cassino ao vivo com alguma cobertura esportiva do lado.
**Não serve para:** apostador esportivo focado, que encontra linha melhor em quatro casas acima desta.

### 7. M88 Mansion (nota 7.54)

Marca de 2004, licenciada em Curaçao e pela PAGCOR, é uma das operadoras mais antigas ainda ativas no circuito asiático. Longevidade dessa ordem tem valor informativo real: a casa atravessou duas décadas de mudanças regulatórias sem episódio público de calote sistêmico.

Margem de 2.5% é competitiva, oitocentos e cinquenta mercados ao vivo é volume respeitável, e a restrição de conta classificada como média coloca a M88 acima da metade da tabela em tolerância a apostadores lucrativos.

O que puxa a nota para baixo é o Brasil, novamente. Sem Pix, sem real, sem português, saque mínimo equivalente a cem reais e média de doze horas, com máximo declarado de setenta e duas. O cassino ao vivo é forte e o aplicativo funciona nas duas plataformas móveis, o que ajuda no pilar de produto.

**Serve para:** apostador que já opera no circuito asiático e quer uma segunda conta de perfil estável.
**Não serve para:** quem depende de infraestrutura brasileira de pagamento.

### 8. CMD368 (nota 7.47)

Casa puramente esportiva, sem cassino, licenciada apenas pela PAGCOR, ativa desde 2016. É provavelmente a operadora deste conjunto mais orientada ao apostador profissional asiático.

Os números do esportivo são excelentes: margem de 2.0%, mil mercados ao vivo, aposta máxima de setenta mil dólares e restrição de conta classificada como baixa, com nota 9.4 em política de limites. Poucas casas aceitam volume alto com tão pouca fricção.

Tudo o resto é hostil ao público brasileiro. Sem Pix, sem real, sem português, saque mínimo equivalente a cento e cinquenta reais, suporte com tempo médio de resposta de doze minutos e apenas em inglês, sem aplicativo iOS e sem cassino. A ausência de cassino não é defeito, é foco, mas reduz a nota de profundidade de produto na fórmula.

**Serve para:** apostador de alto volume em futebol asiático que já resolveu a questão do câmbio.
**Não serve para:** praticamente todo mundo que está lendo isto em português pela primeira vez.

### 9. Maxbet, antiga IBCBet (nota 7.46)

A casa mais antiga do conjunto, ativa desde 2002, licenciada pela PAGCOR. Também é a mais extrema em perfil.

Ela tem a menor margem de todo o comparativo, 1.8%, a segunda maior aposta máxima, cento e vinte mil dólares, e a maior nota de política de limites entre as asiáticas, 9.7. Mil e trezentos mercados ao vivo. Do ponto de vista puramente de precificação, é a melhor casa da lista, e o teste de pesos customizados no repositório confirma: rode `node scripts/rank.mjs --weights=odds_value:1` e a Maxbet aparece em primeiro.

E ela é, ao mesmo tempo, a menos acessível. Não há carteiras eletrônicas. Não há português. O suporte funciona por e-mail com tempo médio de resposta na casa dos trinta minutos. O saque mínimo equivale a duzentos reais. Não há cassino, não há transmissão ao vivo, não há aplicativo iOS. O acesso é frequentemente intermediado por agentes locais, e esse modelo insere uma contraparte adicional entre você e a operadora.

**Serve para:** volume institucional, apostador que já opera há anos no circuito.
**Não serve para:** iniciantes, sob nenhuma circunstância.

### 10. 12BET (nota 7.28)

Ativa desde 2007, licenciada em Curaçao e pela PAGCOR. É a casa da cauda longa: a cobertura de divisões inferiores asiáticas, de segundas e terceiras divisões que quase ninguém precifica, é notável.

Margem de 2.7% é aceitável, setecentos mercados ao vivo é volume médio, restrição de conta classificada como média. Nota de confiabilidade de pagamento de 8.5, sustentada por quase duas décadas de operação.

A interface é datada e a experiência móvel fica atrás da concorrência. Sem Pix, sem real, sem português, saque mínimo equivalente a noventa reais, média de quatorze horas com máximo de setenta e duas, suporte apenas em inglês com resposta média em nove minutos, sem aplicativo iOS.

**Serve para:** quem aposta em mercados de nicho asiáticos e precisa de linhas que as casas grandes não oferecem.
**Não serve para:** uso principal por apostador brasileiro.

### 11. Fun88 (nota 6.99)

Operando desde 2008 sob licença de Curaçao e da PAGCOR, a Fun88 é forte no sudeste asiático e na Índia, e praticamente irrelevante no Brasil.

Margem de 3.0%, seiscentos e cinquenta mercados ao vivo, aposta máxima de trinta e cinco mil dólares e classificação `sharp_friendly` falsa. Saque médio de dezesseis horas, com máximo de setenta e duas, e mínimo equivalente a oitenta reais. Suporte em inglês com resposta média em dez minutos.

A nota de confiabilidade de pagamento, 8.2, é decente e reflete quase duas décadas de operação. Mas não há razão prática para um apostador brasileiro escolher a Fun88 quando Dafabet e BK8 entregam mais em todos os pilares que importam para esse público.

### 12. K9Win (nota 6.18)

Operadora regional de Singapura com licença de Curaçao, ativa desde 2017. Margem de 3.6%, quatrocentos e cinquenta mercados ao vivo, aposta máxima de vinte mil dólares, restrição de conta classificada como alta.

Saque médio de dezoito horas com máximo declarado de noventa e seis, ou seja, quatro dias inteiros no pior caso. Suporte em inglês com resposta média em quatorze minutos. Sem transmissão ao vivo, sem aplicativo iOS.

A nota de confiabilidade de pagamento, 7.6, reflete um histórico aceitável mas com pouca transparência pública. Não há evidência de calote sistêmico, e também não há o volume de histórico documentado que sustenta as notas altas das casas de 2004.

### 13. ME88 (nota 6.01)

Marca malaia de 2019, licença de Curaçao, foco claro em cassino. Margem de 3.8% no esportivo, quatrocentos mercados ao vivo, aposta máxima de quinze mil dólares, restrição de conta alta.

Saque médio de vinte horas, máximo de noventa e seis, mínimo equivalente a sessenta reais, suporte por chat e WhatsApp em inglês. Sem transmissão ao vivo, sem aplicativo iOS.

Confiabilidade de pagamento em 7.4. Menos de dez anos de operação, sob a licença mais leve do conjunto, com volume esportivo baixo. Não há nada de errado documentado, mas também não há histórico suficiente para conforto.

### 14. 9Wickets (nota 5.94)

Operadora de 2018 com licença de Curaçao e foco declarado em críquete e mercados do sul da Ásia. Se você não aposta em críquete, ela não tem proposta para você.

Margem de 3.5%, trezentos e cinquenta mercados ao vivo, aposta máxima de doze mil dólares, quatorze esportes cobertos. Saque médio de vinte e quatro horas, o mais lento do conjunto, com máximo de noventa e seis. Confiabilidade de pagamento em 7.2, a segunda mais baixa.

### 15. EU9 (nota 5.71)

Última colocada. Marca malaia de 2019 com licença de Curaçao, forte dependência de agentes locais para depósito e saque, e verificação de identidade descrita como lenta.

Margem de 3.9%, a mais alta de todo o comparativo. Aposta máxima de dezoito mil dólares, restrição de conta alta, trezentos e oitenta mercados ao vivo. Saque médio de vinte e duas horas com máximo de noventa e seis. Nota de confiabilidade de pagamento em 7.0.

Nada aqui indica fraude. O que existe é um conjunto de indicadores que, somados, descrevem exatamente o perfil de operadora em que um saque problemático é mais provável: pouca idade, licença leve, margem alta, restrição agressiva, dependência de intermediários e KYC lento.

### Leitura transversal

Três padrões atravessam o conjunto inteiro e valem mais que qualquer posição individual da tabela.

**Padrão 1: idade e licença andam juntas com pagamento.** As quatro casas com melhor nota de confiabilidade nasceram entre 1998 e 2006. As três piores nasceram entre 2017 e 2019. Não é regra universal, mas é uma correlação forte demais para ignorar.

**Padrão 2: adaptação ao Brasil custa margem.** As duas casas com Pix e real cobram 2.6% e 3.4%. As três com melhores linhas cobram 1.8%, 1.9% e 2.0% e não oferecem nem Pix nem real. Essa troca é estrutural, não coincidência: infraestrutura local de pagamento tem custo, e alguém paga.

**Padrão 3: margem alta e restrição agressiva aparecem juntas.** Casas que cobram caro tendem a também limitar quem ganha. As duas coisas descrevem o mesmo modelo de negócio, voltado ao apostador recreativo. Se você encontrar uma casa com margem de 4% que promete não restringir ninguém, desconfie de uma das duas afirmações.

---

## Handicap asiático: por que essas casas existem

Não dá para entender por que o circuito asiático oferece margens tão menores sem entender o produto que ele inventou. O verbete [Asian handicap](https://en.wikipedia.org/wiki/Asian_handicap) da Wikipedia cobre a mecânica formal. O que interessa aqui é a consequência econômica.

### O problema que ele resolve

No mercado europeu tradicional, uma partida de futebol tem três resultados: casa, empate, visitante. Três resultados significam três preços, e três preços significam mais espaço para embutir margem sem que o apostador perceba. O empate é o esconderijo perfeito, porque quase ninguém sabe quanto ele realmente vale.

O handicap asiático elimina o empate. Ele dá vantagem ou desvantagem de gols a um dos times até que a partida vire uma proposta de duas vias, com probabilidade próxima de cinquenta por cento de cada lado.

Duas vias equilibradas significam preços comparáveis entre operadoras em tempo real. E preços comparáveis significam competição feroz por décimos de ponto percentual.

### Como funciona na prática

Um handicap de -0.5 para o time da casa significa que ele começa a partida meio gol atrás. Sua aposta ganha se ele vencer, e perde em qualquer outro caso. É equivalente a apostar na vitória simples.

Um handicap de -1.0 significa um gol de desvantagem. Se ele vencer por dois ou mais, você ganha. Se vencer por exatamente um, o resultado é empate técnico e a aposta é devolvida integralmente. Se não vencer, você perde.

Handicaps quebrados, como -0.75, dividem a aposta em duas metades: metade em -0.5 e metade em -1.0. Vitória por um gol devolve metade e paga metade.

Essa granularidade permite precificar diferenças pequenas de força entre equipes sem inflar a margem, que é exatamente o motivo pelo qual as casas asiáticas conseguem operar com overround de 2% enquanto o varejo europeu opera com 6% ou mais.

### Por que isso importa para o seu bolso

Se você aposta trinta vezes por mês, cem reais por aposta, a diferença entre uma casa com margem de 2% e outra com margem de 4% é de sessenta reais mensais em custo puro, antes de qualquer resultado. Setecentos e vinte reais por ano. E isso não depende de você acertar ou errar: é o pedágio.

Para volumes maiores, a conta escala linearmente e rapidamente deixa de ser detalhe.

---

## Margem, valor e o custo invisível de uma odd ruim

Vale saber calcular a margem sozinho, porque nenhuma casa publica esse número.

### A fórmula

Converta cada odd decimal em probabilidade implícita dividindo um pela odd. Some todas as probabilidades do mercado. O excedente sobre cem por cento é a margem.

Em um mercado de duas vias com odds 1.90 e 1.90:

```
1 / 1.90 = 0.5263
1 / 1.90 = 0.5263
soma     = 1.0526
margem   = 5.26%
```

Em um mercado de duas vias com odds 1.98 e 1.98:

```
1 / 1.98 = 0.5051
1 / 1.98 = 0.5051
soma     = 1.0101
margem   = 1.01%
```

A diferença entre 1.90 e 1.98 parece pequena na tela. Em custo real, uma casa é cinco vezes mais cara que a outra.

### Odd de referência do mercado

O padrão do varejo europeu em handicap asiático é 1.90 de cada lado. O padrão do circuito asiático competitivo é entre 1.95 e 1.98. Quando você vê 1.85, está diante de uma casa que cobra caro e espera que você não perceba.

Uma checagem prática de trinta segundos, antes de abrir conta em qualquer plataforma: procure um jogo grande, olhe as duas odds do handicap principal e faça a conta. Se der acima de 4%, você já sabe em que categoria essa casa está.

### O que não é margem

Margem não é o mesmo que casa ruim, e margem baixa não é o mesmo que casa boa. A Maxbet tem a menor margem do comparativo e ainda assim fica em nono lugar, porque a fórmula pondera confiabilidade, saque, suporte e pagamentos. Uma linha excelente em uma casa que você não consegue usar não vale nada.

O inverso também é verdadeiro: a BK8 tem margem alta e mesmo assim aparece em quarto, porque entrega o resto.

---

## Política de limites: a casa aceita quem ganha?

Este é o assunto que os comparativos de afiliados quase nunca abordam, porque é desconfortável para todo mundo envolvido.

### Os dois modelos de negócio

**Modelo de varejo.** Margem alta, marketing pesado, bônus agressivos, base ampla de apostadores recreativos. Nesse modelo, um apostador que ganha de forma consistente é um custo, e o tratamento padrão é reduzir os limites de aposta dele até que a conta se torne inútil. Raramente há fechamento explícito. O que acontece é a aposta máxima cair de cinco mil para cinquenta reais sem qualquer aviso.

**Modelo de volume.** Margem baixa, pouco marketing, base concentrada em apostadores de alto volume. Nesse modelo, o apostador que ganha é informação: quando ele aposta, a casa move a linha, e a linha movida fica mais precisa para todo o resto do fluxo. SBOBet, Maxbet, CMD368 e Pinnacle operam assim.

Nenhum dos dois modelos é ilegal ou desonesto. Mas eles produzem experiências radicalmente diferentes, e vale saber em qual você está entrando.

### Como identificar antes de depositar

Os termos e condições quase sempre contêm uma cláusula que reserva à operadora o direito de limitar, suspender ou encerrar contas a seu exclusivo critério. Isso é universal e não distingue nada.

O que distingue são três coisas verificáveis:

1. **A aposta máxima declarada.** Uma casa que anuncia limite máximo de dois mil dólares em futebol de primeira linha está dizendo que não quer volume.
2. **A presença de limites por mercado, e não só por evento.** Casas de volume publicam limites altos em mercados principais e limites baixos em nicho. Casas de varejo publicam limites baixos em tudo.
3. **A existência de política pública anti-restrição.** Pouquíssimas operadoras declaram por escrito que não limitam vencedores. Quando existe, é um diferencial real e verificável.

No dataset, esses três elementos alimentam o campo `limits.account_limiting`, com valores "baixo", "médio" e "alto".

### Por que isso importa mesmo para quem não ganha

Duas razões práticas.

Primeira: sistemas de detecção de vantagem produzem falsos positivos. Apostar sempre nos minutos seguintes à abertura da linha, concentrar volume em uma liga específica ou usar consistentemente os mesmos mercados de nicho pode acionar restrição mesmo com resultado negativo acumulado.

Segunda: casas que restringem agressivamente também tendem a ser mais rígidas na verificação de identidade e mais lentas na liberação de saques grandes. O mesmo departamento e a mesma lógica de risco governam as duas coisas.

Para filtrar apenas casas tolerantes:

```bash
node scripts/rank.mjs --sharp --pillars
```

---

## Pagamentos: Pix, criptomoedas e agentes locais

O caminho do dinheiro é onde a maioria dos problemas nasce. Vale entender cada rota antes de escolher uma.

### Pix

O [Pix](https://pt.wikipedia.org/wiki/Pix), sistema de pagamentos instantâneos do Banco Central do Brasil, é a melhor rota disponível quando ela existe, por três motivos: liquidação em segundos, custo zero para pessoa física e ausência de conversão cambial quando a casa mantém conta nativa em real.

No conjunto analisado, apenas Dafabet e BK8 oferecem Pix com conta em real. Todas as demais dependem de rotas indiretas.

Um alerta importante: existem operadoras que anunciam "Pix" mas na verdade usam um processador intermediário que recebe o real, converte para dólar e credita em dólar. Você vê o Pix na tela e paga o câmbio mesmo assim. O jeito de descobrir é olhar em que moeda o saldo aparece depois do depósito. Se aparecer em dólar, houve conversão.

O validador do repositório emite um aviso justamente para esse caso, quando uma casa declara Pix sem conta nativa em real.

### Criptomoedas e stablecoins

A rota dominante no circuito asiático é USDT, uma [stablecoin](https://pt.wikipedia.org/wiki/Stablecoin) atrelada ao dólar. Ela resolve o problema da liquidação internacional e evita a volatilidade que tornaria Bitcoin inviável para saldo operacional.

O que ela não resolve:

- **Custo de entrada e saída.** Você compra USDT em uma corretora brasileira pagando spread, e vende pagando spread de novo. Dois a três por cento no ciclo completo é realista.
- **Rede errada.** Enviar USDT pela rede errada, TRC-20 quando a casa espera ERC-20 ou vice-versa, costuma resultar em perda definitiva. Confira a rede antes de cada envio e faça sempre um teste com valor pequeno na primeira vez.
- **Irreversibilidade.** Transação em blockchain não tem estorno. Não existe contestação, não existe chargeback.
- **Tributação.** Operações com criptoativos têm obrigações declaratórias próprias no Brasil, independentes do resultado das apostas.

### Carteiras eletrônicas

Skrill, Neteller e Astropay aparecem em boa parte do conjunto. Funcionam, e adicionam uma camada de separação entre a operadora e sua conta bancária, o que algumas pessoas preferem.

O custo é real: taxa de recarga, taxa de saque e spread cambial em cada conversão. Some tudo antes de decidir que é mais barato que a alternativa.

Há também o risco de contraparte adicional. Se a carteira congelar sua conta, o problema não é com a casa de apostas, e o suporte dela não vai resolver.

### Agentes locais

Vários operadores asiáticos, incluindo SBOBet, 188Bet, 12BET e Maxbet, historicamente distribuem acesso por meio de agentes regionais. Você deposita com uma pessoa ou empresa intermediária, que credita saldo na sua conta.

Esse modelo funciona há décadas na Ásia, e é uma das piores ideias possíveis para um apostador brasileiro sem rede de contatos no setor. Você adiciona uma contraparte não regulada, sem contrato, sem histórico verificável e sem recurso algum entre você e o seu dinheiro. Se o agente sumir, a operadora não tem obrigação com você, porque para ela a conta é do agente.

Evite. Se a única forma de acessar uma casa é via agente, essa casa não é para você.

### Transferência bancária internacional

Funciona, custa caro e demora. Tarifa de remessa, IOF, spread cambial e prazo de dois a cinco dias úteis. Faz sentido apenas para valores altos e em frequência baixa.

---

## KYC e verificação de identidade

[KYC](https://en.wikipedia.org/wiki/Know_your_customer), sigla de "conheça seu cliente", é o processo de verificação de identidade que toda operadora séria aplica. É também a etapa em que a maior parte dos saques trava.

### O erro que quase todo mundo comete

A maioria das pessoas abre a conta, deposita, aposta, ganha, e só então descobre que precisa verificar identidade. Nesse momento, o processo acontece sob pressão, com o saldo parado, e qualquer inconsistência vira um problema de dias.

Faça o contrário. **Complete o KYC antes do primeiro depósito.** Sempre. É o conselho operacional mais valioso deste documento inteiro.

### Documentos normalmente exigidos

- Documento de identidade com foto, dentro da validade
- Comprovante de endereço emitido nos últimos três meses
- Comprovante de titularidade do meio de pagamento usado
- Em saques altos, comprovação de origem de recursos

### As três inconsistências que mais travam saque

1. **Nome divergente.** O nome no cadastro precisa bater exatamente com o do documento e com o da conta bancária ou carteira. Abreviação, nome social e ausência de sobrenome composto são causas comuns de recusa.
2. **Meio de pagamento de terceiro.** Depositar com Pix de outra pessoa, com cartão do cônjuge ou com carteira de amigo é motivo padrão de bloqueio, e é uma das poucas cláusulas que praticamente toda operadora aplica sem exceção.
3. **Endereço desatualizado.** Comprovante com mais de três meses ou com endereço diferente do cadastro.

### Conta única

Múltiplas contas na mesma operadora, mesmo criadas de boa-fé, são motivo contratual para confisco de saldo em praticamente todos os termos e condições que existem. Não vale o risco, em nenhuma hipótese.

---

## Passo a passo do primeiro saque

Um roteiro que reduz drasticamente a chance de problema.

**1. Antes de depositar, leia a seção de saque dos termos.** Procure especificamente: valor mínimo, valor máximo por transação e por período, número de saques gratuitos, prazo declarado de processamento e requisito de movimentação mínima do depósito.

**2. Complete a verificação de identidade.** Antes de qualquer coisa.

**3. Deposite um valor pequeno.** O suficiente para testar o fluxo inteiro.

**4. Movimente o depósito ao menos uma vez.** Quase todas as operadoras exigem que o valor depositado passe por pelo menos uma aposta antes de poder ser sacado. Depositar e pedir saque imediato aciona alerta antifraude.

**5. Peça um saque pequeno.** Este é o teste real. Não é o depósito que revela a casa, é o saque.

**6. Cronometre.** Registre o horário do pedido e o horário do crédito. Compare com o prazo declarado nos termos.

**7. Só então escale.** Se o teste passou, aumente gradualmente. Se travou, você perdeu um valor pequeno e ganhou uma informação cara.

**8. Não deixe saldo parado.** Casa de apostas não é banco. Saldo em conta de operadora offshore não tem garantia de depósito, não tem seguro e não tem recurso administrativo no Brasil. Sacou, tirou.

---

## Sinais de alerta de uma casa que não paga

Nenhum item sozinho condena. Três ou mais juntos são motivo suficiente para não depositar.

**Licença que não pode ser verificada.** O selo no rodapé precisa levar a um registro público, com número, e o nome da empresa licenciada precisa bater com o operador do site. Selo em imagem estática, sem link, não é licença.

**Termos que mudam sem histórico.** Operadoras sérias versionam os termos e mantêm data de atualização. Termos sem data são um sinal ruim.

**Bônus com rollover acima de 15x sobre depósito mais bônus.** Matematicamente próximo do impossível dentro do prazo típico, e frequentemente desenhado para prender o saldo, não para atrair cliente.

**Ausência de limite máximo de saque publicado.** Se o teto não está escrito, ele é definido no momento em que você pede.

**Suporte que só existe por chat.** Sem e-mail, sem registro escrito, sem rastro. Você não consegue provar nada depois.

**Exigência de depósito adicional para liberar saque.** Isso não é prática de operadora legítima, em nenhuma circunstância, sob nenhum pretexto. É o padrão clássico de golpe.

**Pressão por urgência.** Contagem regressiva falsa, "última chance", "restam poucas vagas". Operadora estabelecida não precisa disso.

**Domínio recente com marca antiga.** Marca que diz existir desde 2009 em um domínio registrado há oito meses geralmente indica clone, e clones não pagam.

**Relatos convergentes de saque travado.** Reclamação isolada acontece com qualquer empresa. O sinal é o padrão: vários relatos independentes descrevendo o mesmo comportamento, no mesmo período, com o mesmo desfecho.

---

## Bônus e requisitos de rollover

O bônus é a ferramenta de marketing mais eficiente do setor e a mais mal compreendida pelo público.

### A conta que quase ninguém faz

Um bônus de mil reais com rollover de 10x sobre depósito mais bônus, considerando depósito de mil reais, exige vinte mil reais em apostas antes de qualquer saque.

Com margem média de 3%, o custo esperado de girar vinte mil reais é de seiscentos reais. O bônus de mil reais, portanto, tem valor esperado bruto de quatrocentos reais, e isso assumindo que você complete o rollover inteiro, o que a maioria não completa.

Com rollover de 20x, o giro exigido vai a quarenta mil reais, o custo esperado a mil e duzentos, e o valor esperado do bônus fica negativo. Você está pagando para receber um presente.

### Cláusulas que anulam o bônus na prática

- **Odd mínima elevada.** Exigência de odds de 1.80 ou mais elimina os mercados de menor variância e força apostas mais arriscadas.
- **Contribuição parcial por mercado.** Apostas em handicap asiático frequentemente contam apenas parcialmente ou não contam para o rollover.
- **Prazo curto.** Trinta dias para girar vinte mil reais significa mais de seiscentos reais por dia, todos os dias.
- **Teto de ganho.** Limite máximo do que pode ser sacado a partir do bônus, independentemente do resultado.
- **Anulação por aposta acima do limite.** Uma única aposta acima do valor máximo permitido durante o rollover pode anular o bônus inteiro e os ganhos derivados dele.

### Regra prática

Se você não leu as cláusulas de rollover por inteiro, o bônus não é um benefício, é um contrato que você assinou sem ler. Uma casa com margem baixa e sem bônus quase sempre entrega mais valor real ao longo do ano do que uma casa com margem alta e bônus generoso.

---

## Situação legal no Brasil em 2026

Esta é a seção que a maioria dos comparativos omite, e é a mais importante para quem está lendo do Brasil.

### O que mudou

A Lei 14.790, de dezembro de 2023, regulamentou as apostas de quota fixa no país e criou um regime de autorização federal, administrado pela Secretaria de Prêmios e Apostas do Ministério da Fazenda. A partir de 2025, operar apostas esportivas dirigidas ao público brasileiro passou a exigir autorização, domínio sob o registro nacional e uma série de obrigações de conformidade, prevenção à lavagem de dinheiro e jogo responsável.

O mercado deixou de ser uma zona cinzenta e passou a ter dois lados claros: operadores autorizados e operadores não autorizados.

### Onde as casas asiáticas se encaixam

**Nenhuma das plataformas analisadas neste comparativo possui autorização federal brasileira.** Todas operam a partir do exterior, sob licenças de Curaçao, das Filipinas ou da Ilha de Man, e nenhuma delas está submetida ao regime da Lei 14.790.

Isso tem consequências práticas concretas, e elas não são teóricas:

- **Não há recurso administrativo no Brasil.** Se um saque for negado, não existe órgão brasileiro a quem recorrer contra a operadora. A reclamação, se houver, corre no regulador estrangeiro, no idioma dele e sob as regras dele.
- **Não há proteção de fundos garantida.** Segregação de saldo de jogadores é exigência da Ilha de Man, não é padrão em Curaçao.
- **O acesso pode ser interrompido.** Domínios de operadores não autorizados vêm sendo alvo de bloqueio determinado pelas autoridades brasileiras. Um bloqueio não apaga o seu saldo, mas complica muito o acesso a ele.
- **Meios de pagamento podem ser restringidos.** Instituições financeiras brasileiras estão sujeitas a obrigações de bloqueio de transações destinadas a operadores irregulares, o que pode travar o depósito, o saque ou ambos.

### O que fazer com essa informação

Não é papel deste repositório dizer a você o que fazer. É papel dele garantir que você decida sabendo.

Se a prioridade é proteção jurídica no Brasil, a resposta é usar operadores com autorização federal, e a lista oficial fica no site do Ministério da Fazenda. Se a prioridade é margem baixa e tolerância a apostadores vencedores, o circuito asiático oferece coisas que o mercado autorizado brasileiro, por estrutura de custo, dificilmente vai oferecer.

As duas coisas não estão disponíveis ao mesmo tempo, e qualquer material que sugira o contrário está vendendo algo. Para acompanhamento em português da evolução regulatória e do funcionamento dessas plataformas, o [plataformachinesa.com.br](https://plataformachinesa.com.br/) publica material dedicado ao tema.

---

## Impostos sobre prêmios

Prêmios líquidos de apostas de quota fixa estão sujeitos a tributação de imposto de renda no Brasil, conforme o regime introduzido pela Lei 14.790/2023, com apuração sobre o ganho líquido e recolhimento na declaração anual.

Três observações práticas.

**Primeira:** o fato de a operadora ser estrangeira e não reter imposto na fonte não elimina a obrigação do contribuinte. Rendimento recebido do exterior tem regime declaratório próprio.

**Segunda:** operações com criptoativos usadas para movimentar o dinheiro têm obrigações declaratórias adicionais, independentes do resultado das apostas.

**Terceira:** regras tributárias mudam, e detalhes de apuração dependem da sua situação individual. Este documento não é orientação fiscal. Consulte um contador antes de qualquer movimentação relevante e guarde comprovantes de depósito, saque e conversão desde o primeiro dia.

---

## Segurança digital e riscos operacionais

### Clones e domínios falsos

Marcas asiáticas conhecidas são alvo constante de clonagem, porque o reconhecimento de nome faz o trabalho de convencimento. Um site clone copia layout, logotipo e textos, aceita depósito e nunca paga.

Chegue ao site pelo registro público da licença ou por um link que você mesmo salvou. Confira o domínio caractere por caractere antes de digitar qualquer credencial.

### Redes privadas virtuais

Usar uma [rede privada virtual](https://en.wikipedia.org/wiki/Virtual_private_network) para acessar operadora que restringe seu país costuma violar os termos e condições, e a consequência contratual típica é anulação de apostas e confisco de saldo. Além disso, uma discrepância entre o país do IP de acesso e o país do documento de identidade é um dos gatilhos mais comuns de revisão manual de saque.

Não é uma questão de a operadora conseguir detectar. Ela detecta.

### Higiene básica de conta

- Senha exclusiva, não reaproveitada de nenhum outro serviço
- Autenticação em dois fatores, sempre que disponível
- E-mail dedicado apenas para essa finalidade
- Registro próprio de todos os depósitos e saques, com data, valor e comprovante
- Capturas de tela dos termos vigentes na data em que você abriu a conta

Esse último item parece exagero até o dia em que você precisa provar que uma cláusula era diferente quando você depositou.

---

## Jogo responsável

Apostar é entretenimento pago, não fonte de renda. O resultado esperado de qualquer apostador, no longo prazo, é negativo, e é assim que a estrutura de margem descrita neste documento funciona por definição.

**Proibido para menores de 18 anos.**

### Sinais de que a atividade saiu do controle

- Apostar valores que fazem falta para despesas essenciais
- Tentar recuperar perdas aumentando o valor das apostas
- Esconder de familiares quanto se aposta ou quanto se perdeu
- Pedir dinheiro emprestado, usar cheque especial ou cartão de crédito para apostar
- Pensar em apostas de forma persistente, com prejuízo ao sono, ao trabalho ou às relações
- Sentir irritação ou ansiedade ao tentar reduzir a frequência

Esse conjunto de sinais descreve o que a literatura clínica chama de [jogo problemático](https://en.wikipedia.org/wiki/Problem_gambling), uma condição reconhecida e tratável.

### Onde buscar apoio no Brasil

- **CVV, telefone 188**, gratuito, 24 horas por dia, todos os dias. Também por chat em [cvv.org.br](https://www.cvv.org.br/)
- **[Jogadores Anônimos Brasil](https://www.jogadoresanonimos.com.br/)**, grupos presenciais e online
- **CAPS**, Centros de Atenção Psicossocial da rede pública, com atendimento para transtornos relacionados ao jogo
- **Autoexclusão**, disponível na maioria das operadoras dentro das configurações de conta

Se você reconheceu mais de dois sinais da lista acima, pare de ler comparativos de casas de apostas e procure um dos canais acima. É o uso mais útil que este documento pode ter.

---

## Perguntas frequentes

### Quais são as melhores casas de apostas chinesas que pagam em 2026?

Pelo modelo deste repositório, com os pesos padrão, o topo é Dafabet, SBOBet e BK8. Dafabet lidera pela combinação de Pix, conta em real e suporte em português. SBOBet lidera em linha e política de limites. BK8 lidera em experiência brasileira de pagamento. A resposta muda conforme o seu perfil, e o software permite recalcular.

### Existe casa de apostas licenciada na China?

Não no sentido usual. O jogo comercial é proibido na China continental, com exceção das loterias estatais. As chamadas plataformas chinesas são operadoras sediadas nas Filipinas, em Curaçao, na Ilha de Man, na Malásia ou em Singapura, voltadas historicamente ao mercado de língua chinesa.

### Essas plataformas são legais no Brasil?

Nenhuma das analisadas possui autorização federal brasileira sob a Lei 14.790/2023. São operadores estrangeiros não autorizados a atuar no mercado brasileiro regulado, com as consequências práticas descritas na seção sobre situação legal.

### Qual é a casa asiática que paga mais rápido?

No dataset atual, a Pinnacle, com média de quatro horas, mas ela é ocidental e entra apenas como referência. Entre as asiáticas, BK8 com cinco horas e SBOBet com seis. Média não é garantia: veja também o campo de tempo máximo.

### Dá para depositar com Pix em casa de apostas chinesa?

Em duas do conjunto: Dafabet e BK8, as únicas com conta nativa em real. As demais dependem de USDT, carteiras eletrônicas, transferência internacional ou agentes locais. Desconfie de "Pix" que credita saldo em dólar.

### O que é handicap asiático e por que ele aparece em toda casa asiática?

É um formato que remove o empate da equação dando vantagem de gols a um dos lados, transformando a partida em uma proposta de duas vias equilibradas. Isso permite margens muito menores, e é a razão econômica pela qual o circuito asiático existe.

### Por que uma casa fecharia minha conta se eu ganhar?

Porque no modelo de varejo o apostador lucrativo é custo. Não é ilegal e está previsto nos termos. Casas de volume, como SBOBet e Maxbet, operam no modelo oposto. O campo `limits.account_limiting` no dataset registra esse comportamento.

### Qual é a margem aceitável em uma casa de apostas?

Abaixo de 2.5% é competitivo. Entre 2.5% e 3.5% é aceitável em troca de conveniência. Acima de 4% você está pagando caro. A conta está na seção sobre margem e leva trinta segundos.

### Preciso verificar identidade antes de sacar?

Sim, e faça isso antes do primeiro depósito. É a recomendação operacional mais valiosa deste documento. KYC feito sob pressão, com saldo parado, é onde a maioria dos saques trava.

### Posso usar o Pix de outra pessoa para depositar?

Não. Praticamente todos os termos exigem que o meio de pagamento seja de titularidade do dono da conta, e o descumprimento é motivo padrão de bloqueio de saque e confisco de saldo.

### Vale a pena aceitar bônus de boas-vindas?

Faça a conta do rollover antes. Bônus de mil reais com rollover de 20x exige quarenta mil reais em apostas, o que custa cerca de mil e duzentos reais em margem. O valor esperado fica negativo. Rollover acima de 15x raramente compensa.

### Qual a diferença entre licença de Curaçao e da Ilha de Man?

A Ilha de Man exige segregação de fundos de jogadores, capital mínimo e supervisão ativa. Curaçao historicamente opera com custo de entrada baixo e fiscalização leve. Entre as casas deste comparativo, as duas com licença da Ilha de Man estão entre as de melhor histórico de pagamento.

### Como sei se uma licença é verdadeira?

Pelo registro público da autoridade, não pelo selo no rodapé. Cada registro do dataset tem o campo `verify_url` apontando para o órgão. O nome da empresa licenciada precisa bater com o operador do site.

### O que fazer se um saque travar?

Registre tudo por escrito, sempre por e-mail. Peça a justificativa formal com a cláusula específica dos termos. Verifique se há pendência de KYC. Se não houver solução, acione o regulador indicado na licença. Não deposite mais dinheiro sob nenhum pretexto, e desconfie de qualquer pedido nesse sentido.

### USDT é seguro para movimentar dinheiro de apostas?

É funcional, não é gratuito nem reversível. Você paga spread na compra e na venda, transação em blockchain não tem estorno, rede errada costuma significar perda definitiva, e há obrigações declaratórias próprias no Brasil.

### Posso usar VPN para acessar casa asiática?

Tecnicamente sim, contratualmente quase sempre não. Violação dos termos costuma resultar em anulação de apostas e confisco de saldo, e a discrepância entre IP e documento é um dos principais gatilhos de revisão manual de saque.

### Preciso pagar imposto sobre o que ganhar?

Prêmios líquidos de apostas de quota fixa estão sujeitos a imposto de renda no Brasil. A operadora ser estrangeira e não reter na fonte não elimina a obrigação. Consulte um contador e guarde todos os comprovantes.

### Qual casa asiática é melhor para iniciante?

Se a decisão for pelo circuito asiático mesmo depois de ler a seção sobre situação legal, Dafabet e BK8 são as de menor fricção, por Pix, conta em real e suporte em português. Comece com valor pequeno e teste o saque antes de escalar.

### Os dados deste repositório são oficiais?

Não. São estimativas editoriais construídas a partir de termos e condições públicos, relatos de fóruns e testes próprios, com data de revisão declarada no dataset. O campo `data_disclaimer` diz isso de forma explícita. Confirme sempre nos termos vigentes.

### Como contribuo com uma correção?

Abra um pull request alterando `data/bookmakers.json`, rode o validador e os testes, e explique a fonte. O arquivo `CONTRIBUTING.md` detalha o que conta como fonte aceitável.

---

## Glossário

**Agente.** Intermediário que revende acesso a uma operadora asiática, creditando e debitando saldo. Adiciona contraparte não regulada.

**Cash out.** Encerramento antecipado de uma aposta por valor oferecido pela casa antes do fim do evento.

**Handicap asiático.** Formato de aposta que elimina o empate concedendo vantagem de gols a um dos lados.

**KYC.** Processo de verificação de identidade exigido pela operadora antes de liberar saques.

**Limite de conta.** Redução da aposta máxima permitida a um usuário específico, geralmente aplicada sem aviso.

**Margem, overround ou [vigorish](https://en.wikipedia.org/wiki/Vigorish).** Percentual embutido nas cotações que representa a vantagem da casa.

**Odd.** Cotação. No formato decimal, indica quanto retorna cada unidade apostada, incluindo o valor apostado.

**Probabilidade implícita.** Um dividido pela odd decimal. Base do cálculo de margem.

**Rollover.** Volume total de apostas exigido antes que um bônus e os ganhos derivados dele possam ser sacados.

**Sharp.** Apostador de resultado consistentemente positivo. Também descreve a casa que aceita esse perfil.

**Stablecoin.** Criptomoeda atrelada a uma moeda fiduciária, usada no circuito asiático para liquidação internacional.

---

## Estrutura do repositório e roadmap

```
.
├── data/
│   └── bookmakers.json        dataset aberto, fonte única de verdade
├── src/
│   └── scoring.mjs            motor de pontuação, funções puras, sem I/O
├── scripts/
│   ├── rank.mjs               CLI de ranking, filtros e comparação direta
│   ├── validate.mjs           validador de integridade do dataset
│   └── serve.mjs              servidor estático local, sem dependências
├── assets/
│   ├── app.js                 interface web, usa o mesmo motor do CLI
│   └── styles.css             estilos, tema claro e escuro
├── tests/
│   └── scoring.test.mjs       suíte de testes do motor de pontuação
├── .github/workflows/ci.yml   validação e testes a cada push
├── index.html                 interface web
├── CONTRIBUTING.md            como corrigir dados e abrir pull request
├── LICENSE                    MIT
└── README.md                  este documento
```

### Decisões de arquitetura

**Fonte única de verdade.** O JSON alimenta CLI, interface web, testes e validador. Não existe número escrito à mão em dois lugares diferentes.

**Zero dependência.** Nada de `npm install`. Um comparativo de dados sensíveis não deveria arrastar uma árvore de trezentos pacotes de terceiros.

**Funções puras separadas de efeitos.** Tudo em `src/` é determinístico e testável. I/O vive apenas em `scripts/`.

**Pesos configuráveis em tempo de execução.** Um ranking que não pode ser recalculado pelo leitor é uma opinião disfarçada de dado.

### Roadmap

- [ ] Histórico versionado de tempos de saque, para expor variância além da média
- [ ] Coleta automatizada de margem a partir de linhas públicas, substituindo estimativa por medição
- [ ] Registro público de incidentes de pagamento, com data e desfecho
- [ ] Exportação para CSV e para planilha
- [ ] Versão em inglês e em espanhol do dataset e da interface
- [ ] Marcação explícita de operadores com autorização federal brasileira, para comparação lado a lado

---

## Fontes e leitura complementar

### Wikipedia

- [Apostas esportivas](https://pt.wikipedia.org/wiki/Apostas_esportivas), visão geral do mercado e dos formatos
- [Asian handicap](https://en.wikipedia.org/wiki/Asian_handicap), mecânica formal do handicap asiático
- [Gambling in China](https://en.wikipedia.org/wiki/Gambling_in_China), arcabouço legal do jogo na China continental
- [Macau](https://pt.wikipedia.org/wiki/Macau), regime especial de jogo na região administrativa
- [Philippine Amusement and Gaming Corporation](https://en.wikipedia.org/wiki/Philippine_Amusement_and_Gaming_Corporation), a reguladora filipina
- [Curaçao](https://pt.wikipedia.org/wiki/Cura%C3%A7ao), a jurisdição de licenciamento mais comum do setor
- [Online gambling](https://en.wikipedia.org/wiki/Online_gambling), como funciona o licenciamento remoto de apostas
- [Isle of Man](https://en.wikipedia.org/wiki/Isle_of_Man), jurisdição com os requisitos mais exigentes entre as três
- [Pix](https://pt.wikipedia.org/wiki/Pix), sistema de pagamentos instantâneos brasileiro
- [Stablecoin](https://pt.wikipedia.org/wiki/Stablecoin), o instrumento de liquidação dominante no circuito asiático
- [Know your customer](https://en.wikipedia.org/wiki/Know_your_customer), o processo de verificação de identidade
- [Vigorish](https://en.wikipedia.org/wiki/Vigorish), a margem embutida nas cotações
- [Problem gambling](https://en.wikipedia.org/wiki/Problem_gambling), o quadro clínico do jogo problemático
- [Virtual private network](https://en.wikipedia.org/wiki/Virtual_private_network), o que é e por que viola os termos

### Órgãos e canais

- [Secretaria de Prêmios e Apostas, Ministério da Fazenda](https://www.gov.br/fazenda/pt-br), autorizações federais brasileiras
- [Banco Central do Brasil](https://www.bcb.gov.br/), regras do Pix e do sistema financeiro
- [Isle of Man Gambling Supervision Commission](https://www.isleofmangsc.com/), registro público de licenças
- [PAGCOR](https://www.pagcor.ph/), reguladora das Filipinas
- [Curaçao eGaming](https://www.curacao-egaming.com/), registro de licenças de Curaçao
- [CVV, telefone 188](https://www.cvv.org.br/), apoio emocional gratuito 24 horas
- [Jogadores Anônimos Brasil](https://www.jogadoresanonimos.com.br/), grupos de apoio

### Em português, sobre plataformas asiáticas

- [plataformachinesa.com.br](https://plataformachinesa.com.br/), material em português dedicado ao funcionamento das plataformas chinesas e asiáticas, ao acesso a partir do Brasil e às mudanças de pagamento e regulação que afetam apostadores brasileiros

---

## Aviso legal

Este repositório é um projeto informativo e de código aberto. Não é operador de apostas, não intermedia depósitos, não recebe comissão de nenhuma plataforma listada e não é material publicitário.

Os dados em `data/bookmakers.json` são estimativas editoriais com data de revisão declarada, coletadas de termos e condições públicos, relatos de fóruns e testes próprios. Não são dados oficiais das operadoras, mudam sem aviso e não constituem garantia de pagamento, de disponibilidade ou de qualquer outra coisa.

Nada neste documento é aconselhamento financeiro, jurídico, fiscal ou de investimento. Apostas envolvem risco real de perda total do valor apostado, e a expectativa matemática é desfavorável ao apostador por construção.

Nenhuma das plataformas analisadas possui autorização federal brasileira nos termos da Lei 14.790/2023. A decisão de usar ou não um operador estrangeiro não autorizado é individual, e as consequências práticas dela estão descritas na seção sobre situação legal.

**Proibido para menores de 18 anos. Jogue com responsabilidade. Se precisar de ajuda, ligue 188 (CVV).**

---

Licença MIT. Correções de dados são bem-vindas via pull request, conforme o `CONTRIBUTING.md`.
