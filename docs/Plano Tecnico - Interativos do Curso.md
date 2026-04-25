# Plano Tecnico - Interativos do Curso

## Objetivo
Transformar os slides do curso em experiencias mais interativas, mantendo consistencia visual, acessibilidade e alinhamento com o roteiro.

Este plano organiza a execucao em sprints curtas, com entregas testaveis.

---

## 1) Arquitetura proposta

### Camadas
- **Conteudo**: `assets/curso.js` (dados dos slides, textos e metadados).
- **Renderizacao**: funcoes de render por tipo de slide.
- **Interacao**: modulo dedicado para componentes reutilizaveis.
- **Estilo**: `assets/curso.css` com secao base + secao por componente.

### Novo modulo sugerido
- `assets/curso-interativos.js`

Responsabilidade:
- registrar componentes reutilizaveis;
- inicializar eventos;
- manter estado local por slide/componente;
- padronizar acessibilidade (teclado, foco, aria).

---

## 2) Estrategia de implementacao (sprints)

## Sprint 1 - Fundacao de componentes (prioridade alta)
**Meta**: criar base reutilizavel para nao repetir codigo.

### Escopo
- criar `assets/curso-interativos.js` com:
  - `renderHeroBloco()`
  - `renderCardsInterativos()`
  - `renderPainelDetalhe()`
  - `renderStepperFluxo()`
  - `bindKeyboardNavigation()`
- organizar `assets/curso.css` por blocos:
  - base layout;
  - componentes genericos;
  - variacoes por modulo.
- adaptar `assets/curso.js` para usar os componentes no M1 (slides 3, 4, 5) sem alterar comportamento final.

### Arquivos impactados
- `assets/curso.js`
- `assets/curso.css`
- `assets/curso-interativos.js` (novo)

### Criterios de aceite
- slides 3, 4 e 5 funcionando com componentes reutilizaveis;
- navegacao por teclado operacional nos interativos;
- sem regressao nos demais slides.

---

## Sprint 2 - Macrofluxo interativo M1 (slides 6 a 9)
**Meta**: transformar parte central do M1 em experiencia guiada.

### Escopo
- Slide 6: mapa/cards de empresas com painel de detalhe.
- Slide 7: SAP MM/FI/RE com "quando usar", "erro comum", "check final".
- Slides 8 e 9: stepper de 6 etapas do macrofluxo:
  - status visual (atual/concluido/proximo);
  - riscos por etapa;
  - area responsavel;
  - controle principal.

### Arquivos impactados
- `assets/curso.js`
- `assets/curso.css`
- `assets/curso-interativos.js`

### Criterios de aceite
- usuario consegue percorrer fluxo completo sem ambiguidade;
- cada etapa mostra contexto operacional claro;
- leitura mobile continua boa.

---

## Sprint 3 - Formas de pagamento M1 (slides 10 e 11)
**Meta**: tornar comparacao de modalidades mais objetiva.

### Escopo
- filtro por categoria: Deposito / Cobranca / Antecipacao.
- comparativo dinamico:
  - TED, Transferencia, PIX, Boleto, Fatura, Tributos, Risco Sacado.
- cards com padrao:
  - definicao curta;
  - quando usar;
  - risco comum;
  - boa pratica.

### Arquivos impactados
- `assets/curso.js`
- `assets/curso.css`
- `assets/curso-interativos.js`

### Criterios de aceite
- comparacao fica acessivel em no maximo 2 cliques;
- usuario identifica diferenca boleto vs fatura sem texto longo;
- componente reaproveitavel para modulo 2.

---

## Sprint 4 - Simuladores de tratativa M2 (slides 16 a 21)
**Meta**: aproximar conteudo da rotina real.

### Escopo
- simulador DDA (passos: logon -> DDA_BR -> conferencia -> programacao).
- matriz de divergencias (vencimento, entrega, ambos).
- tabela/filtro de bloqueios (automaticos e manuais).
- feedback orientado:
  - resposta do usuario;
  - resposta esperada;
  - justificativa curta.

### Arquivos impactados
- `assets/curso.js`
- `assets/curso.css`
- `assets/curso-interativos.js`

### Criterios de aceite
- usuario recebe feedback pedagogico (nao so certo/errado);
- termos tecnicos com apoio contextual;
- experiencia consistente com M1.

---

## Sprint 5 - Refino e qualidade final
**Meta**: consolidar padrao e estabilizar.

### Escopo
- revisão de texto para consistencia de tom;
- ajustes de performance visual;
- validação de acessibilidade;
- padronizacao final de componentes.

### Criterios de aceite
- sem quebrar navegacao geral;
- componentes reutilizaveis documentados;
- base pronta para evoluir M3.

---

## 3) Backlog tecnico por componente

### `StepperProcessoFinanceiro`
- props: `etapas`, `etapaAtiva`, `onChange`
- exibe: objetivo, risco, controle, area
- suporte teclado: setas esquerda/direita

### `CardsSapModulo`
- props: `modulos` (MM/FI/RE etc.)
- comportamento: clique para abrir detalhe
- estado: card ativo destacado

### `PainelComparativoPagamento`
- props: `categorias`, `itens`
- comportamento: filtro por categoria + detalhe lateral
- uso: slides 10-11

### `SimuladorTratativaDivergencia`
- props: `cenarios`, `respostasEsperadas`
- comportamento: selecao guiada por passos
- saida: feedback com justificativa

### `TabelaBloqueiosComFiltro`
- props: `linhas`, `filtros`
- busca: letra/tipo/responsavel
- uso: slides 20-21

---

## 4) Definicao de pronto (DoD)

Uma entrega de slide interativo so e considerada pronta quando:
- conteudo esta aderente ao roteiro oficial;
- interacao principal funciona por mouse e teclado;
- estado ativo/selecionado e claramente visivel;
- layout responsivo em desktop e mobile;
- sem erros de linter nos arquivos alterados;
- texto revisado (clareza e consistencia).

---

## 5) Ordem recomendada de execucao imediata

1. Refatorar slides 3-5 para usar modulo reutilizavel (Sprint 1).
2. Implementar macrofluxo interativo (Sprint 2).
3. Implementar comparativo de formas de pagamento (Sprint 3).
4. Iniciar simuladores do M2 (Sprint 4).

---

## 6) Riscos e mitigacao

- **Risco:** excesso de customizacao por slide.
  - **Mitigacao:** priorizar componentes padrao antes de casos especiais.

- **Risco:** interacao bonita, mas pouco didatica.
  - **Mitigacao:** cada interacao deve responder "o que muda na operacao?".

- **Risco:** regressao em navegacao existente.
  - **Mitigacao:** manter fallback de render textual para qualquer slide nao mapeado.

---

## 7) Proximo passo pratico

Iniciar Sprint 1 com:
- criacao de `assets/curso-interativos.js`;
- migracao dos slides 3, 4, 5 para componentes reutilizaveis;
- checklist de acessibilidade basico aplicado nesses tres slides.
