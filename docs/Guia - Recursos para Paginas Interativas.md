# Guia de Recursos para Paginas Interativas

## Objetivo
Este documento serve como biblioteca de ideias para construir paginas de curso mais vivas, didaticas e alinhadas com a tematica de Contas a Pagar.

Use este guia para decidir rapidamente:
- qual tipo de interacao usar em cada slide;
- como organizar conteudo tecnico sem ficar cansativo;
- como manter consistencia visual e pedagogica entre modulos.

---

## 1) Tipos de elementos interativos

### Cartoes clicaveis (tabs visuais)
**Quando usar**
- para separar categorias (ex.: TED, PIX, Boleto, Tributos);
- para explicar papeis (ex.: SAP MM, SAP FI, SAP RE).

**Vantagem**
- reduz texto inicial e entrega foco por bloco.

### Acordeao (expandir/recolher)
**Quando usar**
- listas longas de regras (ex.: bloqueios A, F, J, O, P, Q, X, Y);
- comparacoes com muito detalhe.

**Vantagem**
- melhora escaneabilidade sem perder profundidade.

### Linha do tempo / Stepper
**Quando usar**
- fluxos sequenciais (ex.: solicitacao -> entrega -> lancamento -> preparacao -> efetivacao -> conciliacao).

**Vantagem**
- facilita entendimento de ordem, dependencia e transicao.

### Hotspots em imagem/diagrama
**Quando usar**
- telas SAP, fluxos CNAB, diagramas de processo.

**Vantagem**
- conecta conteudo textual com contexto visual real.

### Quiz rapido no meio do conteudo
**Quando usar**
- checkpoints de aprendizagem a cada 2-4 slides.

**Vantagem**
- reforca memorizacao antes de avancar.

### Simuladores simples (cenario)
**Quando usar**
- decisoes de tratativa (ex.: divergencia de vencimento vs atraso na entrega).

**Vantagem**
- aproxima o conteudo da rotina real do time.

### Before/After ou Comparativo lado a lado
**Quando usar**
- diferencas entre modalidades (ex.: boleto x fatura; conciliacao automatica x manual).

**Vantagem**
- evidencia contrastes de forma imediata.

### Tooltips e popovers
**Quando usar**
- glossario (PEP, CNAB 240, D=0, FF.5, F110).

**Vantagem**
- evita interromper o fluxo principal de leitura.

---

## 2) Estruturas prontas por tipo de conteudo

### Conteudo conceitual (slides de introducao)
**Estrutura sugerida**
1. Hero curto (1 frase de contexto);
2. 3-4 cartoes de pilares;
3. Painel de detalhe dinamico;
4. bloco "por que isso importa".

### Conteudo de processo (fluxo)
**Estrutura sugerida**
1. timeline horizontal/vertical;
2. etapa ativa com descricao expandida;
3. alerta de risco por etapa;
4. CTA "proxima etapa".

### Conteudo de regra/controle
**Estrutura sugerida**
1. acordeao por categoria;
2. tag de criticidade (alto/medio/baixo);
3. exemplos de erro comum;
4. conduta recomendada.

### Conteudo tecnico (SAP/transacoes)
**Estrutura sugerida**
1. card "o que e";
2. "quando usar";
3. "passo a passo";
4. "erros mais comuns";
5. "check final".

---

## 3) Ideias aplicadas ao curso (exemplos diretos)

### Modulo 1
- **Slide 6**: mapa de empresas com hotspots por unidade.
- **Slide 7**: cartoes SAP MM/FI/RE com casos reais.
- **Slide 8-9**: macrofluxo em stepper com estado "concluido/atual/proximo".
- **Slide 10-11**: filtro por forma de pagamento (deposito, cobranca, antecipacao).

### Modulo 2
- **Slide 16-17**: simulador do DDA_BR com checklist interativo.
- **Slide 18-19**: matriz de divergencias (tipo, causa, responsavel, acao).
- **Slide 20-21**: tabela de bloqueios com busca e filtro por letra.
- **Slide 29**: animacao do fluxo SAP -> CNAB -> Banco -> Retorno.
- **Slide 31-34**: comparativo "conciliacao automatica x manual" + cenario de baixa.

### Modulo 3
- perguntas contextualizadas por caso real, com feedback imediato e justificativa curta.

---

## 4) Boas praticas de UX para curso corporativo

- manter 1 objetivo por slide;
- limitar 1 interacao principal por tela;
- usar texto curto no primeiro nivel (detalhe fica sob clique);
- sempre mostrar estado selecionado/ativo;
- indicar progresso e proximo passo;
- garantir navegacao por teclado (setas, tab, enter);
- usar linguagem consistente com operacao (termos SAP + linguagem simples).

---

## 5) Acessibilidade e responsividade (minimo recomendado)

- contraste alto entre texto e fundo;
- foco visivel em botoes/cartoes;
- elementos clicaveis com area minima confortavel;
- interacoes que funcionem sem hover (mobile);
- labels claros para leitores de tela quando possivel;
- evitar depender somente de cor para indicar estado.

---

## 6) Componentes base para padronizar no projeto

Crie um pequeno kit reutilizavel no curso:
- `heroBloco(titulo, texto, badge)`
- `cardsInterativos(lista, onSelect)`
- `painelDetalhe(itemAtivo)`
- `stepperFluxo(etapas, etapaAtual)`
- `acordeaoSecoes(secoes)`
- `quizRapido(pergunta, alternativas, feedback)`
- `tabelaFiltros(colunas, linhas, filtros)`

Beneficio: acelera criacao de slides e reduz retrabalho visual.

---

## 7) Checklist de qualidade antes de publicar uma pagina

- O slide tem um objetivo claro?
- A interacao ajuda o entendimento (e nao so "enfeite")?
- O texto bate com o roteiro oficial?
- Existe destaque visual para o ponto mais importante?
- Em mobile, a pagina continua legivel e clicavel?
- O usuario consegue avancar sem ficar preso na interacao?

---

## 8) Proximo passo sugerido

Piloto recomendado:
1. aplicar este padrao nos slides 6, 7 e 8;
2. validar com 2-3 usuarios internos (tempo de leitura + compreensao);
3. ajustar o template;
4. replicar nos demais slides.

---

## 9) Inspiracoes internas do repositorio

Referencias usadas:
- `curso-scorm-NR17`
- `fato_fake`

### 9.1 Padrões fortes observados no `curso-scorm-NR17`

**Biblioteca unica de interativos (bom para escala)**
- arquivo: `curso-scorm-NR17/assets/js/interactive.js`
- padrao: um modulo central inicializa modal, card expansivel, flip card, reveal, acordeao, slider e glossario.
- ganho: reduz duplicacao e facilita padronizacao entre paginas.

**Acessibilidade integrada na interacao**
- padrao observado: leitura guiada (TTS), suporte teclado, foco em componentes, leitura de conteudo ao abrir modal/card.
- ideia para este curso: todo componente novo deve nascer com teclado + estado visual de foco + texto alternativo funcional.

**Nudge de descoberta (wiggle sincronizado)**
- padrao observado: destaque visual suave para elementos clicaveis ainda nao explorados.
- ideia para este curso: usar "dica de clique" em slides com hotspot ou cards para reduzir abandono.

**Gamificacao por progresso real**
- arquivo: `curso-scorm-NR17/assets/js/gamification.js`
- padrao: desbloqueio de conteudo extra conforme badges conquistadas.
- ideia para este curso: liberar "casos avancados" apos concluir blocos-chave (ex.: DDA, bloqueios, conciliacao).

### 9.2 Padrões fortes observados no `fato_fake`

**Interacao com narrativa tematica**
- arquivo: `fato_fake/assets/js/modules/classification-game.js`
- padrao: a mecanica segue uma historia (mesa de detetive, ferramentas, passos).
- ganho: maior engajamento por contexto, nao apenas "quiz seco".
- ideia para este curso: tema "mesa do analista financeiro" com ferramentas como agenda de vencimentos, painel de bloqueios e validacao de remessa.

**Fluxo em etapas com confirmacao**
- padrao: cada passo exige selecao + botao confirmar; so entao avanca.
- ganho: evita clique acidental e reforca aprendizagem por etapa.
- ideia para este curso: aplicar em simulacoes de tratativa (divergencia, bloqueio, programacao).

**Feedback rico apos cada caso**
- padrao: mostra acertos por dimensao, resposta do usuario, resposta aceita e explicacao.
- ganho: feedback formativo (ensina), nao apenas "certo/errado".
- ideia para este curso: explicar o "por que" da tratativa correta em cenarios SAP.

**Resultados finais com motivacao**
- padrao: score, percentual, medalha e opcao de replay.
- ideia para este curso: resumo final por competencia (preparacao, efetivacao, conciliacao).

### 9.3 Padroes minimos para replicar daqui para frente

- criar um modulo unico de interativos em `assets/curso-interativos.js` para centralizar comportamentos;
- definir um "contrato de componente" (classes CSS + eventos + acessibilidade);
- adotar feedback em 3 camadas:
  1. resposta imediata;
  2. explicacao curta;
  3. proximo passo sugerido;
- manter todos os interativos com:
  - suporte a teclado;
  - estado ativo/selecionado;
  - fallback para mobile (sem hover obrigatorio).

---

## 10) Mapeamento rapido de ideias para os proximos slides

### M1 - Slide 6 (Conhecendo as empresas)
- formato: mapa/cards com hotspot;
- interacao: clique por empresa -> painel lateral com tipo de despesa e risco comum.

### M1 - Slide 7 (Entradas do processo)
- formato: cards SAP MM/FI/RE;
- interacao: "quando usar" + "erro comum" + "check final".

### M1 - Slides 8-9 (Macrofluxo)
- formato: stepper de 6 etapas;
- interacao: cada etapa abre riscos, controles e responsavel.

### M1 - Slides 10-11 (Formas de pagamento)
- formato: filtro por categoria (Deposito/Cobranca/Antecipacao);
- interacao: comparativo dinamico entre TED, PIX, Boleto, Fatura, Tributos, Risco Sacado.

### M2 - Slides 16-21 (DDA e Bloqueios)
- formato: simulador guiado com passos;
- interacao: selecionar tratativa e receber feedback por criterio.

---

## 11) Backlog de componentes (prioridade)

### Alta prioridade
- `StepperProcessoFinanceiro`
- `CardsSapModulo`
- `PainelComparativoPagamento`
- `SimuladorTratativaDivergencia`

### Media prioridade
- `GlossarioContextual`
- `TabelaBloqueiosComFiltro`
- `ResumoCompetenciasModulo`

### Baixa prioridade
- `SistemaBadgeCurso`
- `DesbloqueioExtrasPorProgresso`
