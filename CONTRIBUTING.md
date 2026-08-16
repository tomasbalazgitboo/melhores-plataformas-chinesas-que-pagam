# Como contribuir

Este projeto vive dos dados. Codigo novo e bem-vindo, mas correcao de dado e a
contribuicao mais valiosa que existe aqui.

## Corrigir um dado do dataset

1. Abra `data/bookmakers.json` e localize a casa pelo campo `id`.
2. Altere apenas o que voce consegue comprovar.
3. Rode `node scripts/validate.mjs`. Ele precisa terminar sem erro.
4. Rode `node --test "tests/*.test.mjs"`.
5. Abra um pull request explicando a fonte da correcao.

### O que conta como fonte

Aceitamos, em ordem de preferencia:

1. Print ou link dos termos e condicoes publicos da propria operadora, com data.
2. Comprovante proprio de deposito ou saque, com valores sensiveis ocultados.
3. Registro publico de mediacao de reclamacao com desfecho documentado.
4. Fio de forum com pelo menos tres relatos independentes convergentes.

Nao aceitamos: "ouvi dizer", captura de tela de grupo de mensagens sem contexto,
material promocional de afiliado e comparativos de terceiros sem metodologia.

## Adicionar uma casa nova

Copie a estrutura de um registro existente e preencha todos os campos exigidos
pelo validador. Casas sem licenca declarada e sem `verify_url` nao entram.

Casas com menos de doze meses de operacao ficam de fora ate acumularem historico
de saque verificavel. Nao e preconceito contra operador novo, e apenas o tempo
minimo para existir historico.

## Regras editoriais

- Nada de linguagem promocional. O texto descreve, nao vende.
- Nada de promessa de retorno, "metodo", "estrategia infalivel" ou equivalente.
- Toda afirmacao sobre pagamento precisa vir acompanhada da data da observacao.
- Sem emoji e sem travessao no conteudo do repositorio.
- Todo material voltado ao publico mantem o aviso de 18 anos e o canal de apoio.

## Estilo de codigo

- JavaScript moderno, modulos ES, zero dependencia de runtime.
- Funcoes puras em `src/`, efeitos colaterais apenas em `scripts/`.
- Todo comportamento novo entra com teste em `tests/`.

## Conduta

Discussao tecnica e sobre dados. Divergencia sobre um numero se resolve com
fonte, nao com volume de mensagens.
