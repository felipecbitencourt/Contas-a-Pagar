# Guia - Otimizacao de Tokens

## Objetivo
Reduzir custo e latencia nas conversas com agentes (Cursor e Claude Code), mantendo qualidade de entrega.

---

## 1) Principios de economia de tokens

- **Escopo pequeno por vez**: pedir 1 bloco de trabalho por mensagem (ex.: "slides 6 e 7 apenas").
- **Contexto minimo**: enviar trechos selecionados, nao arquivos inteiros.
- **Formato fixo de resposta**: pedir "diagnostico curto + patch + teste".
- **Sem repeticao de historico**: referenciar decisoes ja registradas em docs.
- **Reuso de componentes**: reduzir codigo novo e explicacao repetida.

---

## 2) Como escrever prompts mais baratos

Use templates curtos.

### Implementacao
`Aplique direto em [arquivo]. Escopo: [x]. Nao explique muito. No final: o que mudou + como testar.`

### Revisao
`Revise apenas riscos e regressao em [arquivo/trecho]. Liste por severidade.`

### Bugfix
`Corrija [erro]. Mantenha mudanca minima. Validar linter no final.`

### Conteudo
`Atualize [slides/trecho] conforme roteiro [referencia]. Sem expandir fora do escopo.`

---

## 3) Estrategias por etapa

### Antes de pedir
- definir objetivo em 1 frase;
- listar arquivos-alvo;
- listar criterio de aceite (2-4 itens).

### Durante execucao
- evitar trocar de assunto na mesma thread;
- quebrar tarefas grandes em lotes;
- pedir "continuar do ponto X" em vez de reexplicar tudo.

### Depois
- consolidar decisoes em um doc unico para virar referencia;
- abrir nova conversa para macrotema novo.

---

## 4) Estrategias tecnicas no projeto

- manter componentes reutilizaveis (ex.: `assets/curso-interativos.js`);
- criar "template de slide" para nao redesenhar do zero;
- usar checklist de publicacao curto;
- evitar retrabalho visual sem criterio de aceite claro.

---

## 5) Arquivos-base que agentes podem usar

## Existe um arquivo unico tipo `claude.md` para tudo?
Nao. Depende do ambiente.

### Claude Code
- **`CLAUDE.md`**: pode funcionar como guia persistente do repositorio (quando presente e configurado no fluxo).
- **`~/.claude/commands/*/SKILL.md`**: skills/comandos do Claude Code.
- **`~/.claude.json`**: configuracoes (ex.: MCP servers).

### Cursor
- **`.cursor/rules/*.md`**: principal mecanismo de regras persistentes por projeto.
- **`AGENTS.md`**: pode ser usado como guia de agente em alguns fluxos/ferramentas.
- **`~/.cursor/skills/<nome>/SKILL.md`**: skills pessoais do Cursor.

## Recomendacao pratica
Para este projeto, padronizar assim:
1. regras de comportamento em `.cursor/rules/`;
2. guias operacionais em `docs/`;
3. skills reutilizaveis em `~/.cursor/skills/`.

---

## 6) Checklist rapido anti-desperdicio

- O pedido esta com escopo fechado?
- Enviei so o trecho necessario?
- Pedi formato curto de resposta?
- Tenho criterio de aceite objetivo?
- Evitei misturar implementacao + brainstorm?

---

## 7) Padrao recomendado para este repositorio

Quando solicitar trabalho ao agente, usar:

`Objetivo:`  
`Arquivos:`  
`Escopo:`  
`Criterio de aceite:`  
`Formato da resposta: curto`

Exemplo:

`Objetivo: melhorar slide 9`  
`Arquivos: assets/curso.js, assets/curso.css`  
`Escopo: apenas slide 9`  
`Criterio de aceite: stepper clicavel + teclado + linter ok`  
`Formato da resposta: o que mudou + teste`
