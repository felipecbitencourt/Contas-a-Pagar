const coursePages = [
  {
    id: "m1-p1",
    module: "Módulo 1",
    label: "Slide 3 · O que é o setor",
    title: "O que é o Contas a Pagar",
    body: [
      "O Contas a Pagar é o setor responsável por administrar todos os compromissos financeiros que o Grupo Zaffari possui com fornecedores, prestadores de serviços, órgãos governamentais e outras entidades.",
      "Esses compromissos surgem a partir de produtos comprados, serviços contratados ou despesas geradas pela operação.",
      "É esse setor que registra, organiza e controla todas essas obrigações, garantindo que cada pagamento seja realizado de forma correta e dentro do prazo. Assim, mantemos a saúde financeira da empresa e fortalecemos o relacionamento com nossos parceiros comerciais.",
    ],
  },
  {
    id: "m1-p2",
    module: "Módulo 1",
    label: "Slide 4 · Empresas controladas",
    title: "Empresas controladas e abrangência",
    body: [
      "O Grupo Zaffari atua em diversos segmentos além do varejo e atacado, e conta também com uma variedade de empreendimentos.",
      "Cada empresa controlada possui caixa próprio e gestão financeira individual.",
      "Isso exige processos claros, controles internos eficientes e uma atuação cuidadosa do Contas a Pagar.",
    ],
  },
  {
    id: "m1-p3",
    module: "Módulo 1",
    label: "Slide 5 · Estrutura do Grupo",
    title: "Dimensão do trabalho no Grupo Zaffari",
    body: [
      "Para entender a dimensão do trabalho realizado pelo Contas a Pagar, é essencial conhecer as empresas que compõem o Grupo Zaffari.",
      "O Grupo é formado por diferentes frentes de negócio, cada uma com sua própria operação, demanda e natureza de despesas.",
    ],
  },
  {
    id: "m1-p4",
    module: "Módulo 1",
    label: "Slide 6 · Conhecendo as empresas",
    title: "Conheça as empresas do grupo",
    body: [
      "Nesta etapa, o aluno explora os ícones e imagens para conhecer as empresas do grupo.",
      "Os recursos visuais ajudam a contextualizar a abrangência das operações financeiras.",
    ],
  },
  {
    id: "m1-p5",
    module: "Módulo 1",
    label: "Slide 7 · Entradas do processo",
    title: "Como documentos e despesas chegam ao setor",
    body: [
      "Cada empresa do Grupo Zaffari gera documentos, notas fiscais e despesas específicas.",
      "Essas informações chegam diariamente ao Contas a Pagar e precisam ser tratadas com organização, precisão e dentro dos processos definidos.",
      "O SAP MM é o módulo responsável por controlar compras, estoque e fornecedores, registrando a entrada de mercadorias e serviços por meio de registro fiscal.",
      "O SAP FI é o módulo responsável pela contabilidade e finanças, garantindo que todas as movimentações sejam registradas corretamente, como no lançamento de impostos.",
      "O SAP RE é o módulo responsável por administrar os imóveis da empresa, próprios e alugados, incluindo lançamentos como aluguéis a pagar.",
    ],
  },
  {
    id: "m1-p6",
    module: "Módulo 1",
    label: "Slide 8 · Macrofluxo",
    title: "Macrofluxo do processo",
    body: [
      "O macrofluxo do Contas a Pagar representa a jornada completa percorrida por uma despesa, desde o momento em que um pedido é solicitado até a conciliação final no financeiro.",
      "Cada etapa foi estruturada para garantir controle, segurança, rastreabilidade e conformidade.",
      "Ao visualizar esse macrofluxo, você entende como as atividades se conectam, quais áreas se relacionam ao Contas a Pagar e por que cada fase é essencial para manter o fluxo financeiro organizado e eficiente.",
    ],
  },
  {
    id: "m1-p7",
    module: "Módulo 1",
    label: "Slide 9 · Etapas do macrofluxo",
    title: "Sequência das etapas do Contas a Pagar",
    body: [
      "Este é o macrofluxo do Contas a Pagar, com a sequência completa das etapas percorridas por uma despesa no Grupo Zaffari.",
      "Começamos pela Solicitação do Pedido, onde a necessidade é registrada. Em seguida, ocorre a Entrega e Recebimento, momento em que o produto ou serviço é conferido.",
      "Depois, avançamos para o Lançamento da Nota Fiscal ou Lançamento Manual, garantindo o registro correto da despesa no sistema.",
      "Na etapa de Preparação dos Pagamentos, as notas são organizadas e as datas são definidas conforme acordos comerciais.",
      "Logo após, temos a Efetivação dos Pagamentos, quando os valores são pagos aos fornecedores. Por fim, realizamos a Conciliação Final, conferindo todas as informações entre sistemas e documentos.",
      "Essa sequência mostra como cada fase se conecta para garantir um processo seguro e eficiente.",
    ],
  },
  {
    id: "m1-p8",
    module: "Módulo 1",
    label: "Slide 10 · Formas de pagamento",
    title: "Categorias de pagamento",
    body: [
      "As formas de pagamento estão organizadas em três categorias: Depósito, Cobrança e Antecipação.",
      "Depósito: TED, Transferência e PIX.",
      "Cobrança: Boleto, Fatura e Tributos. Antecipação: programa Risco Sacado.",
      "Essas modalidades são utilizadas conforme o tipo de documento ou necessidade de cada fornecedor, garantindo pagamentos corretos e seguros.",
    ],
  },
  {
    id: "m1-p9",
    module: "Módulo 1",
    label: "Slide 11 · Detalhamento",
    title: "Detalhamento das modalidades",
    body: [
      "A TED é uma transferência eletrônica entre bancos diferentes e costuma cair na conta em até duas horas.",
      "A Transferência é usada quando o pagamento é feito entre contas do mesmo banco, e o PIX é o pagamento instantâneo, muito utilizado para transferências e pagamento de contas.",
      "O Boleto é um documento de cobrança registrado em banco.",
      "A Fatura funciona de forma parecida, mas é usada principalmente para contas de consumo, como água, luz, telefonia ou tributos.",
      "A escolha da modalidade depende das características do documento recebido, garantindo pagamento adequado em cada caso.",
    ],
  },
  {
    id: "m1-p10",
    module: "Módulo 1",
    label: "Slide 12 · Risco Sacado",
    title: "Antecipação de recebíveis",
    body: [
      "Risco Sacado é o programa de antecipação de recebíveis do Grupo Zaffari.",
      "Nesse programa, os fornecedores podem receber antes do prazo normal sem alterar o fluxo de pagamentos da empresa.",
      "O Zaffari avalia a negociação junto ao banco parceiro e garante que o fornecedor receba o valor correto na data.",
      "O banco parceiro, atualmente o Itaú, faz a intermediação, realiza o pagamento ao fornecedor e mantém a comunicação operacional com a empresa.",
      "O fornecedor, caso queira antecipar, acessa a plataforma do banco e conclui a operação.",
      "Esse processo traz agilidade, segurança e fortalece o relacionamento com parceiros comerciais.",
    ],
  },
  {
    id: "m1-p11",
    module: "Módulo 1",
    label: "Slide 13 · Encerramento do módulo",
    title: "Conclusão do Módulo 1",
    body: [
      "Parabéns por concluir o Módulo 1 da Jornada do Contas a Pagar.",
      "Agora você já conhece a estrutura do Contas a Pagar, as empresas do Grupo Zaffari, o macrofluxo do processo e as formas de pagamento utilizadas.",
      "Próximo passo: seguir para o Módulo 2, onde vamos conhecer cada etapa do fluxo do Contas a Pagar.",
    ],
  },
  {
    id: "m2-p1",
    module: "Módulo 2",
    label: "Slide 14 · Visão geral",
    title: "Fluxo do Contas a Pagar",
    body: [
      "Neste módulo, você vai conhecer em detalhes como funciona o fluxo do Contas a Pagar.",
      "As três grandes etapas são: Preparação de pagamentos, Efetivação dos pagamentos e Conciliação.",
      "Vamos aprofundar a rotina, mostrar como cada fase se conecta e esclarecer os procedimentos que garantem segurança, precisão e organização financeira no Grupo Zaffari.",
    ],
  },
  {
    id: "m2-p2",
    module: "Módulo 2",
    label: "Slide 15 · Etapas do fluxo",
    title: "As três fases do processo",
    body: [
      "Nesta etapa da Jornada, aprofundamos as três grandes fases do fluxo.",
      "Cada fase será explicada separadamente, começando por Preparação de Pagamentos.",
    ],
  },
  {
    id: "m2-p3",
    module: "Módulo 2",
    label: "Slides 16-17 · DDA",
    title: "DDA e rotina inicial no SAP",
    body: [
      "O DDA (Débito Direto Autorizado) permite visualizar e pagar boletos de forma eletrônica, sem impressão física.",
      "Essa ferramenta foi desenvolvida e é gerenciada pela Febraban.",
      "Para obter essas informações, o banco contratado realiza varredura dos CNPJs das empresas e controladas em todas as instituições financeiras. O arquivo é disponibilizado e importado diariamente.",
      "Passos principais: logon no SAP, acesso à transação DDA_BR, gravação das informações do boleto em memória, conferência da forma de pagamento, bloqueio de pagamento, data de vencimento e comparação do valor do boleto com a nota fiscal.",
      "Depois, ocorre a programação do boleto para pagamento e a criação da planilha de boletos não liberados.",
    ],
  },
  {
    id: "m2-p4",
    module: "Módulo 2",
    label: "Slide 18 · Divergências",
    title: "Principais divergências no cruzamento",
    body: [
      "No cruzamento de boletos com partidas do SAP, podem ocorrer divergências.",
      "Principais problemas: prazo de pagamento diferente do acordo comercial, divergência no percentual de desconto do contrato e divergência no valor da nota fiscal.",
      "Também pode ocorrer cobrança quando a nota fiscal ou o fornecedor ainda não está registrado no Grupo Zaffari.",
    ],
  },
  {
    id: "m2-p5",
    module: "Módulo 2",
    label: "Slide 19 · ZMM078",
    title: "Tratativa de divergências comerciais",
    body: [
      "A transação ZMM078 foi criada para identificar e tratar pendências comerciais de pagamento.",
      "Com ela, as notas com divergência recebem bloqueio T no sistema.",
      "Principais tipos: divergência de vencimento, atraso na entrega e vencimento/entrega divergentes.",
      "Divergência de vencimento: o prazo informado pelo fornecedor é menor do que o estipulado no acordo.",
      "Atraso na entrega: vencimento está OK, mas a mercadoria foi entregue fora do prazo.",
      "Vencimento/entrega divergentes: há inconsistência nos dois pontos ao mesmo tempo.",
      "Após a tratativa com o fornecedor e validações internas, as notas podem ser liberadas manualmente para pagamento.",
    ],
  },
  {
    id: "m2-p6",
    module: "Módulo 2",
    label: "Slides 20-21 · Bloqueios",
    title: "Bloqueios automáticos e manuais",
    body: [
      "O processo utiliza bloqueios de pagamento para garantir cumprimento dos acordos.",
      "Conforme a condição utilizada no pedido, a nota ou parte dela pode entrar bloqueada para pagamento.",
      "Bloqueios automáticos e de condição: C (compra condicional), G (retenção técnica), H (compensação de adiantamento), W (workflow) e T (bloqueio inbound por divergências).",
      "Bloqueios manuais: A (bloqueio do Contas a Pagar), F (antecipação de pagamentos), J (jurídico), O (outros), P (penhora), Q (rejeição), X (divergência comercial) e Y (baixas em perdas ou receitas financeiras).",
    ],
  },
  {
    id: "m2-p7",
    module: "Módulo 2",
    label: "Slide 22 · Tributos",
    title: "Tributos e transação ZFI028",
    body: [
      "Tributos são valores recolhidos ao Estado e pagos por chave de arrecadação.",
      "A programação ocorre com forma de pagamento O, via transação ZFI028.",
      "Modalidades abordadas: impostos, contribuições e taxas.",
      "Impostos: tributo obrigatório destinado ao governo, como IPTU. Contribuições: tributos com finalidade específica, como PIS e COFINS. Taxas: cobranças por serviço prestado pelo Estado, como registro empresarial.",
    ],
  },
  {
    id: "m2-p8",
    module: "Módulo 2",
    label: "Slide 23 · ZFI045",
    title: "Lançamentos específicos de pagamento",
    body: [
      "A transação ZFI045 atende áreas que precisam lançar valores a pagar fora do método convencional do MM.",
      "Os lançamentos usam contas contábeis, centro de custos e lucros pré-definidos.",
      "Relatórios diários garantem que os lançamentos foram aprovados e programados para pagamento.",
      "Esse controle diário é essencial para mitigar impactos de inadimplência.",
    ],
  },
  {
    id: "m2-p9",
    module: "Módulo 2",
    label: "Slide 24 · Gestão antecipada",
    title: "Relatórios e controle D=0",
    body: [
      "Existe relatório para identificar lançamentos com vencimento em até 3 dias úteis sem programação.",
      "Isso evita atrasos e pagamentos em D=0.",
      "O padrão do Grupo Zaffari é agendar pagamentos com um dia de antecedência ao vencimento. Solicitações fora desse prazo são tratadas como D=0.",
      "Para reduzir perdas financeiras, exceções exigem aprovação do gerente da área solicitante, do coordenador do Contas a Pagar e do gerente financeiro.",
    ],
  },
  {
    id: "m2-p10",
    module: "Módulo 2",
    label: "Slide 25 · Transição para efetivação",
    title: "Da preparação para a efetivação",
    body: [
      "Após compreender a Preparação de Pagamentos, o fluxo avança para a etapa de Efetivação dos Pagamentos.",
      "Este é o ponto de transição entre organização/validação e execução financeira junto às instituições bancárias.",
    ],
  },
  {
    id: "m2-p11",
    module: "Módulo 2",
    label: "Slide 26 · Revisão pré-execução",
    title: "Checks diários antes da execução",
    body: [
      "Antes da execução, toda a preparação precisa ser revisada para garantir consistência dos dados.",
      "Nesta etapa, realizamos checks diários que funcionam como revisão final para assegurar que nenhuma inconsistência siga adiante no processo.",
      "Esses checks ajudam a evitar divergências financeiras, pagamentos incorretos e atrasos.",
    ],
  },
  {
    id: "m2-p12",
    module: "Módulo 2",
    label: "Slide 27 · Tipos de checks",
    title: "Validações operacionais do dia",
    body: [
      "Checks principais: relatório de inadimplência, validação de verbas com PEP ativo e equalização de partidas.",
      "Relatório de inadimplência: verificar se existem verbas e notas de devolução vinculadas a pagamentos que ultrapassam o valor total a pagar.",
      "PEP ativo e equalização das partidas: conferir verbas versus notas para garantir direcionamento correto das despesas.",
      "Também é verificada a distribuição dos bancos conforme a forma de pagamento definida.",
    ],
  },
  {
    id: "m2-p13",
    module: "Módulo 2",
    label: "Slide 28 · Introdução à efetivação",
    title: "Início da etapa de efetivação",
    body: [
      "Com os checks concluídos, o fluxo entra na efetivação dos pagamentos.",
      "Nesta fase, o que foi organizado e validado passa a ser executado de fato, respeitando prazos e procedimentos financeiros do Grupo Zaffari.",
    ],
  },
  {
    id: "m2-p14",
    module: "Módulo 2",
    label: "Slide 29 · Fluxo SAP > Banco",
    title: "Fluxo técnico da efetivação",
    body: [
      "As informações de pagamento são consolidadas no SAP e transformadas em arquivo CNAB 240.",
      "O arquivo segue por canal seguro (SFTP ou VAN) para bancos parceiros como Itaú, Santander, Banrisul e Banco do Brasil.",
      "A primeira etapa é a Remessa: a F110 executa automaticamente na madrugada, identifica pagamentos programados e gera o arquivo para envio aos bancos.",
      "A segunda etapa é o Retorno: a FF.5 processa os arquivos enviados pelos bancos em ciclos recorrentes, identificando erros, rejeições e divergências.",
      "Essas etapas garantem integração contínua, monitoramento e segurança no processo SAP-bancos.",
    ],
  },
  {
    id: "m2-p15",
    module: "Módulo 2",
    label: "Slide 30 · Transição para conciliação",
    title: "Da efetivação para a conciliação",
    body: [
      "Após compreender a efetivação, o fluxo avança para sua etapa final: a conciliação.",
      "A conciliação confirma se o que foi pago no banco está alinhado com os registros internos.",
    ],
  },
  {
    id: "m2-p16",
    module: "Módulo 2",
    label: "Slide 31 · Conceito de conciliação",
    title: "Conciliação bancária no Contas a Pagar",
    body: [
      "Conciliação bancária é a comparação entre transações do sistema interno e transações do extrato bancário.",
      "No Contas a Pagar, isso garante que despesas e pagamentos registrados no sistema interno correspondam aos valores efetivamente debitados da conta bancária.",
      "O processo pode ocorrer de forma automática ou manual.",
    ],
  },
  {
    id: "m2-p17",
    module: "Módulo 2",
    label: "Slide 32 · Conciliação automática e manual",
    title: "Modalidades de conciliação",
    body: [
      "Conciliação automática: ocorre em pagamentos pelas transações F110/F110S, com compensação e lançamento na conta bancária.",
      "Conciliação manual: usada em exceções com pagamento imediato via Internet Banking e lançamento posterior.",
      "A conciliação assegura precisão, transparência e controle de caixa.",
    ],
  },
  {
    id: "m2-p18",
    module: "Módulo 2",
    label: "Slide 33 · Contabilização de baixa",
    title: "Reconhecimento dos pagamentos no SAP",
    body: [
      "Depois da conciliação, os pagamentos precisam ser reconhecidos no SAP por meio da contabilização de baixa.",
      "É fundamental que todos os pagamentos realizados, independentemente da forma de execução, tenham lançamento correspondente no sistema.",
      "Esse registro é essencial para fechar corretamente a conciliação e manter saldo bancário aderente ao sistema.",
    ],
  },
  {
    id: "m2-p19",
    module: "Módulo 2",
    label: "Slide 34 · Fluxo de baixa",
    title: "Como acontece a baixa contábil",
    body: [
      "O fluxo conecta SAP, bancos e extrato bancário para confirmar os débitos realizados.",
      "As informações saem do SAP para bancos como Itaú, Santander, Banrisul e Banco do Brasil. Após o processamento, o extrato retorna ao SAP para comparação com os registros internos.",
      "Quando os dados de banco e SAP coincidem, ocorre a contabilização de baixa.",
      "A baixa pode ocorrer por Internet Banking, arquivo CNAB, cheque ou débito em conta.",
      "Independentemente da forma de pagamento, o objetivo é garantir que o que saiu do banco esteja devidamente registrado no SAP.",
    ],
  },
  {
    id: "m2-p20",
    module: "Módulo 2",
    label: "Slide 35 · Encerramento",
    title: "Conclusão do Módulo 2",
    body: [
      "Parabéns por chegar ao final deste módulo.",
      "Aqui, aprofundamos o entendimento do fluxo de Contas a Pagar nas etapas de Preparação dos pagamentos, Efetivação dos pagamentos e Conciliação.",
      "Esses conhecimentos são fundamentais para garantir um processo financeiro eficiente, seguro e alinhado às práticas do Grupo Zaffari.",
      "No próximo módulo, você encontrará uma avaliação de conhecimento para reforçar os principais pontos aprendidos.",
    ],
  },
]

let currentIndex = 0
let slide3Focus = "fornecedores"
let slide4Focus = "varejo"
let slide5Focus = "escala"
let slide6Focus = "varejo"
let slide7Focus = "mm"
let slide8Focus = "solicitacao"
let slide9Focus = "solicitacao"
let slide10Focus = "deposito"
let slide11Focus = "ted"
let slide12Focus = "zaffari"
let slide14Focus = "preparacao"
let slide15Focus = "preparacao"
let slideM24Focus = "vencimento"

const menuEl = document.getElementById("curso-menu")
const titleEl = document.getElementById("content-title")
const badgeEl = document.getElementById("content-badge")
const bodyEl = document.getElementById("content-body")
const progressEl = document.getElementById("course-progress")
const progressTextEl = document.getElementById("progress-text")
const sidebarEl = document.getElementById("curso-sidebar")
const contentEl = document.getElementById("curso-content")
const shellEl = document.querySelector(".curso-shell")
const interativos = window.CursoInterativos

function goToIndex(nextIndex) {
  if (nextIndex < 0 || nextIndex >= coursePages.length) return
  currentIndex = nextIndex
  renderContent()
  renderMenu()
}

function goToNextPage() {
  goToIndex(currentIndex + 1)
}

function goToPrevPage() {
  goToIndex(currentIndex - 1)
}

function renderMenu() {
  if (!menuEl) return
  menuEl.innerHTML = ""

  const grouped = coursePages.reduce((acc, page, index) => {
    if (!acc[page.module]) acc[page.module] = []
    acc[page.module].push({ ...page, index })
    return acc
  }, {})

  Object.entries(grouped).forEach(([moduleName, pages]) => {
    const moduleLabel = document.createElement("div")
    moduleLabel.className = "menu-module"
    moduleLabel.textContent = moduleName
    menuEl.appendChild(moduleLabel)

    pages.forEach((page) => {
      const button = document.createElement("button")
      button.type = "button"
      button.className = `menu-item ${page.index === currentIndex ? "active" : ""}`
      button.textContent = page.label.includes("·")
        ? page.label.split("·").slice(1).join("·").trim()
        : page.label
      button.addEventListener("click", () => {
        goToIndex(page.index)
      })
      menuEl.appendChild(button)
    })
  })
}

function renderContent() {
  const page = coursePages[currentIndex]
  if (!page) return

  // Re-dispara animação de entrada do título a cada slide
  titleEl.style.animation = "none"
  void titleEl.offsetHeight
  titleEl.style.animation = ""

  titleEl.textContent = page.title
  badgeEl.textContent = `${page.module} · ${page.label.split("·")[0].trim()}`
  if (page.id === "m1-p1") {
    renderSlide3(page)
  } else if (page.id === "m1-p2") {
    renderSlide4(page)
  } else if (page.id === "m1-p3") {
    renderSlide5(page)
  } else if (page.id === "m1-p4") {
    renderSlide6(page)
  } else if (page.id === "m1-p5") {
    renderSlide7(page)
  } else if (page.id === "m1-p6") {
    renderSlide8(page)
  } else if (page.id === "m1-p7") {
    renderSlide9(page)
  } else if (page.id === "m1-p8") {
    renderSlide10(page)
  } else if (page.id === "m1-p9") {
    renderSlide11(page)
  } else if (page.id === "m1-p10") {
    renderSlide12(page)
  } else if (page.id === "m1-p11") {
    renderSlide13(page)
  } else if (page.id === "m2-p1") {
    renderSlide14(page)
  } else if (page.id === "m2-p2") {
    renderSlide15(page)
  } else if (page.id === "m2-p3") {
    renderSlideDDA(page)
  } else if (page.id === "m2-p4") {
    renderSlideDivergencias(page)
  } else if (page.id === "m2-p6") {
    renderSlideBloqueios(page)
  } else {
    bodyEl.innerHTML = page.body.map((text) => `<p>${text}</p>`).join("")
  }

  const progress = Math.round(((currentIndex + 1) / coursePages.length) * 100)
  progressEl.value = progress
  progressTextEl.textContent = `${progress}%`
}

function renderSlide3(page) {
  const details = {
    fornecedores: {
      title: "Relação com fornecedores",
      text: "Cada compromisso financeiro precisa ser tratado com prazo, conferência e rastreabilidade para manter uma relação saudável com parceiros comerciais.",
    },
    servicos: {
      title: "Contratação de serviços",
      text: "Despesas de serviços exigem conferência documental, validação do acordo e programação correta para evitar inconsistências de pagamento.",
    },
    tributos: {
      title: "Obrigações legais e fiscais",
      text: "Pagamentos a órgãos governamentais dependem de precisão nos dados e cumprimento rigoroso de vencimentos.",
    },
    controle: {
      title: "Controle e conformidade",
      text: "O setor registra, organiza e controla compromissos para garantir pagamentos corretos, no prazo e com aderência às políticas internas.",
    },
  }

  const trackSteps = [
    { icon: "inbox",  label: "Receber demanda",       activeFor: "fornecedores" },
    { icon: "search", label: "Conferir dados",        activeFor: "servicos" },
    { icon: "card",   label: "Programar pagamento",   activeFor: "tributos" },
    { icon: "shield", label: "Garantir conformidade", activeFor: "controle" },
  ]

  const cards = [
    { id: "fornecedores", icon: "building",  title: "Fornecedores", subtitle: "Compromissos comerciais e relacionamento." },
    { id: "servicos",     icon: "wrench",    title: "Serviços",     subtitle: "Contratos, validação e pagamento correto." },
    { id: "tributos",     icon: "bank",      title: "Tributos",     subtitle: "Exigências fiscais e cumprimento de prazos." },
    { id: "controle",     icon: "clipboard", title: "Controle",     subtitle: "Organização e governança financeira." },
  ]
  const current = details[slide3Focus] ?? details.fornecedores

  const trackHtml = trackSteps
    .map((step, i) =>
      `<span class="cp-track-item${slide3Focus === step.activeFor ? " is-active" : ""}">${interativos?.renderIcon(step.icon, "cp-track-emoji") ?? ""}${step.label}</span>` +
      (i < trackSteps.length - 1 ? `<span class="cp-track-arrow">→</span>` : "")
    )
    .join("")

  bodyEl.innerHTML = `
    <section class="cp-intro">
      <div class="cp-intro-main">
        <span class="lesson-kicker">Visão do setor</span>
        <h3 class="cp-intro-title">Centro de controle do Contas a Pagar</h3>
        <p class="lesson-lead">${page.body[0]}</p>
      </div>
      <div class="cp-intro-side">
        <div class="cp-kpi">
          <span class="cp-kpi-label">Foco diário</span>
          <strong class="cp-kpi-value">${interativos?.renderIcon("clock", "cp-kpi-emoji") ?? ""}Prazo + precisão</strong>
        </div>
        <div class="cp-kpi">
          <span class="cp-kpi-label">Objetivo operacional</span>
          <strong class="cp-kpi-value">${interativos?.renderIcon("check", "cp-kpi-emoji") ?? ""}Pagamento correto</strong>
        </div>
      </div>
    </section>

    <div class="cp-track">${trackHtml}</div>

    ${interativos?.renderCardsInterativos({ cards, activeId: slide3Focus, dataAttr: "data-s3" }) ?? ""}
    ${interativos?.renderPainelDetalhe({ title: current.title, text: current.text }) ?? ""}
    <div class="pill-row">
      <span class="pill">${interativos?.renderIcon("folder", "pill-emoji") ?? ""}Organização</span>
      <span class="pill">${interativos?.renderIcon("target", "pill-emoji") ?? ""}Precisão</span>
      <span class="pill">${interativos?.renderIcon("clock", "pill-emoji") ?? ""}Prazo</span>
      <span class="pill">${interativos?.renderIcon("trace", "pill-emoji") ?? ""}Rastreabilidade</span>
    </div>
    <p class="hint">Clique nos blocos para explorar as frentes principais do Contas a Pagar.</p>
  `

  interativos?.bindSelectableCards({
    container: bodyEl,
    dataAttr: "data-s3",
    details,
    onTrack: (newId, container) => {
      const trackItems = container.querySelectorAll(".cp-track-item")
      trackSteps.forEach((step, i) =>
        trackItems[i]?.classList.toggle("is-active", step.activeFor === newId)
      )
    },
    onChange: (next) => {
      slide3Focus = next || "fornecedores"
    },
  })
}

function renderSlide4(page) {
  const details = {
    varejo: {
      title: "Varejo e operação diária",
      text: "O volume operacional do varejo exige disciplina no processamento de notas, vencimentos e meios de pagamento para manter o fluxo em dia.",
    },
    atacado: {
      title: "Atacado e negociação B2B",
      text: "No atacado, condições comerciais e acordos com fornecedores impactam diretamente o calendário e as validações do pagamento.",
    },
    empreendimentos: {
      title: "Empreendimentos e imobiliário",
      text: "Despesas ligadas a empreendimentos têm naturezas diferentes e reforçam a necessidade de governança específica por empresa.",
    },
    controladas: {
      title: "Controladas com caixa próprio",
      text: "Cada empresa possui gestão financeira individual, o que demanda controle segmentado e visão consolidada do Contas a Pagar.",
    },
  }

  const cards = [
    { id: "varejo",          icon: "cart",     title: "Varejo",          subtitle: "Alta recorrência de documentos." },
    { id: "atacado",         icon: "box",      title: "Atacado",         subtitle: "Condições comerciais e volume B2B." },
    { id: "empreendimentos", icon: "building", title: "Empreendimentos", subtitle: "Despesas com dinâmica própria." },
    { id: "controladas",     icon: "building", title: "Controladas",     subtitle: "Gestão individual por empresa." },
  ]
  const current = details[slide4Focus] ?? details.varejo

  const panoramaItems = [
    { icon: "building", label: "Empresas com caixa próprio" },
    { icon: "list", label: "Políticas financeiras por operação" },
    { icon: "trace", label: "Rastreabilidade entre áreas" },
  ]

  const panoramaHtml = panoramaItems
    .map(
      (item) =>
        `<div class="cp-panorama-item">${interativos?.renderIcon(item.icon, "cp-panorama-icon") ?? ""}<span>${item.label}</span></div>`,
    )
    .join("")

  bodyEl.innerHTML = `
    <section class="cp-panorama">
      <div class="cp-panorama-main">
        <span class="lesson-kicker">Abrangência do grupo</span>
        <h3 class="cp-intro-title">Empresas controladas, gestão financeira individual</h3>
        <p class="lesson-lead">${page.body[0]}</p>
      </div>
      <div class="cp-panorama-side">${panoramaHtml}</div>
    </section>
    <div class="mini-stats">
      <div class="mini-stat"><span class="label">Frentes de negócio</span><span class="value">4+</span></div>
      <div class="mini-stat"><span class="label">Modelo financeiro</span><span class="value">Caixa próprio</span></div>
      <div class="mini-stat"><span class="label">Foco do setor</span><span class="value">Padronização</span></div>
    </div>
    ${interativos?.renderCardsInterativos({ cards, activeId: slide4Focus, dataAttr: "data-s4" }) ?? ""}
    ${interativos?.renderPainelDetalhe({ title: current.title, text: current.text }) ?? ""}
  `

  interativos?.bindSelectableCards({
    container: bodyEl,
    dataAttr: "data-s4",
    details,
    onChange: (next) => {
      slide4Focus = next || "varejo"
    },
  })
}

function renderSlide5(page) {
  const details = {
    escala: {
      title: "Escala do processo",
      text: "Com múltiplas empresas e perfis de despesa, o Contas a Pagar precisa de padronização para manter previsibilidade e performance operacional.",
    },
    complexidade: {
      title: "Complexidade operacional",
      text: "Cada frente de negócio possui regras próprias de documentação, vencimento e validação, elevando a complexidade da rotina.",
    },
    governanca: {
      title: "Governança financeira",
      text: "Controles internos e trilhas de auditoria fortalecem segurança e conformidade em toda a jornada financeira.",
    },
  }

  const cards = [
    { id: "escala",       icon: "chart",  title: "Escala",       subtitle: "Volume e recorrência de pagamentos." },
    { id: "complexidade", icon: "split",  title: "Complexidade", subtitle: "Múltiplas regras e fluxos paralelos." },
    { id: "governanca",   icon: "shield", title: "Governança",   subtitle: "Controle para garantir conformidade." },
  ]

  const metrics = [
    { icon: "building", value: "10+",   label: "Empresas controladas" },
    { icon: "list",     value: "3",     label: "Módulos SAP ativos" },
    { icon: "calendar", value: "Diário", label: "Ritmo do processo" },
  ]

  const current = details[slide5Focus] ?? details.escala

  bodyEl.innerHTML = `
    ${interativos?.renderHeroBloco({ kicker: "Dimensão do trabalho", lead: page.body[0] }) ?? ""}
    ${interativos?.renderMetricRow({ metrics }) ?? ""}
    ${interativos?.renderCardsInterativos({ cards, activeId: slide5Focus, dataAttr: "data-s5" }) ?? ""}
    ${interativos?.renderPainelDetalhe({ title: current.title, text: current.text }) ?? ""}
  `

  interativos?.bindSelectableCards({
    container: bodyEl,
    dataAttr: "data-s5",
    details,
    onChange: (next) => {
      slide5Focus = next || "escala"
    },
  })
}

function renderSlide6(page) {
  const details = {
    varejo: {
      title: "Varejo",
      text: "Operação com alta recorrência de documentos e grande volume de pagamentos aos fornecedores.",
    },
    atacado: {
      title: "Atacado",
      text: "Fluxo B2B com negociações comerciais específicas e impacto direto no calendário financeiro.",
    },
    cd: {
      title: "Centro de Distribuição",
      text: "Despesas logísticas e operacionais exigem controle de prazo e rastreabilidade por unidade.",
    },
    empreendimentos: {
      title: "Empreendimentos",
      text: "Estrutura com despesas imobiliárias e contratos de natureza distinta do varejo tradicional.",
    },
    controladas: {
      title: "Controladas",
      text: "Empresas com caixa próprio e gestão individual, mantendo padronização de governança financeira.",
    },
    administrativo: {
      title: "Administrativo",
      text: "Backoffice financeiro consolidando controles, validações e conformidade das rotinas de pagamento.",
    },
  }

  const cards = [
    { id: "varejo", icon: "cart", title: "Varejo", subtitle: "Supermercados e operação diária." },
    { id: "atacado", icon: "box", title: "Atacado", subtitle: "Negócios B2B e escala de compras." },
    { id: "cd", icon: "building", title: "Centro de Distribuição", subtitle: "Logística e abastecimento." },
    { id: "empreendimentos", icon: "building", title: "Empreendimentos", subtitle: "Shoppings e imóveis." },
    { id: "controladas", icon: "shield", title: "Controladas", subtitle: "Caixa próprio e gestão individual." },
    { id: "administrativo", icon: "clipboard", title: "Administrativo", subtitle: "Financeiro e backoffice." },
  ]

  const current = details[slide6Focus] ?? details.varejo

  bodyEl.innerHTML = `
    ${interativos?.renderHeroBloco({ kicker: "Conhecendo as empresas", lead: page.body[0] }) ?? ""}
    ${interativos?.renderCardsInterativos({ cards, activeId: slide6Focus, dataAttr: "data-s6" }) ?? ""}
    ${interativos?.renderPainelDetalhe({ title: current.title, text: current.text }) ?? ""}
    <p class="hint">${page.body[1]}</p>
  `

  interativos?.bindSelectableCards({
    container: bodyEl,
    dataAttr: "data-s6",
    details,
    onChange: (next) => {
      slide6Focus = next || "varejo"
    },
  })
}

function renderSlide7(page) {
  const details = {
    mm: {
      title: "SAP MM - Compras e fornecedores",
      text: "Controla compras, estoque e fornecedores, registrando a entrada de mercadorias e serviços por meio de registro fiscal.",
      usage: "Quando usar: notas de compras e serviços ligados ao processo de suprimentos.",
      risk: "Risco comum: inconsistência entre documento fiscal e recebimento físico.",
      check: "Check final: validar vínculo com pedido/recebimento antes de programar pagamento.",
    },
    fi: {
      title: "SAP FI - Contabilidade e finanças",
      text: "Garante o registro contábil correto das movimentações financeiras, incluindo lançamentos como impostos e obrigações fiscais.",
      usage: "Quando usar: lançamentos financeiros, impostos e ajustes contábeis da operação.",
      risk: "Risco comum: classificação contábil incorreta impactando conciliação e fechamento.",
      check: "Check final: revisar conta contábil, centro de custo e natureza do lançamento.",
    },
    re: {
      title: "SAP RE - Gestão imobiliária",
      text: "Administra imóveis próprios e alugados, com despesas como aluguéis, encargos e obrigações contratuais.",
      usage: "Quando usar: compromissos financeiros relacionados a contratos de imóveis.",
      risk: "Risco comum: divergência de valores/competência contratual no lançamento.",
      check: "Check final: conferir contrato, período de competência e condição de pagamento.",
    },
  }

  const cards = [
    { id: "mm", icon: "box", title: "SAP MM", subtitle: "Compras, estoque e fornecedores." },
    { id: "fi", icon: "list", title: "SAP FI", subtitle: "Contabilidade e finanças." },
    { id: "re", icon: "building", title: "SAP RE", subtitle: "Imóveis e contratos." },
  ]

  const current = details[slide7Focus] ?? details.mm

  bodyEl.innerHTML = `
    ${interativos?.renderHeroBloco({ kicker: "Entradas do processo", lead: page.body[0] }) ?? ""}
    <p>${page.body[1]}</p>
    ${interativos?.renderCardsInterativos({ cards, activeId: slide7Focus, dataAttr: "data-s7" }) ?? ""}
    ${interativos?.renderPainelDetalhe({ title: current.title, text: current.text }) ?? ""}
    <div class="pill-row">
      <span class="pill">${interativos?.renderIcon("target", "pill-emoji") ?? ""}${current.usage}</span>
      <span class="pill">${interativos?.renderIcon("shield", "pill-emoji") ?? ""}${current.risk}</span>
      <span class="pill">${interativos?.renderIcon("check", "pill-emoji") ?? ""}${current.check}</span>
    </div>
    <h4 class="section-sub">Retenção rápida por módulo SAP</h4>
    ${
      interativos?.renderAccordion({
        groupName: "sap-acc",
        items: [
          {
            title: "SAP MM em uma frase",
            body: "<p>Compras e suprimentos: o foco é alinhar documento fiscal, pedido e recebimento antes de liberar pagamento.</p>",
          },
          {
            title: "SAP FI em uma frase",
            body: "<p>Contabilidade: o foco é conta, centro de custo e natureza corretas para fechar conciliações sem surpresas.</p>",
          },
          {
            title: "SAP RE em uma frase",
            body: "<p>Imóveis: o foco é contrato, competência e condição de pagamento coerentes com o que foi pactuado.</p>",
          },
        ],
      }) ?? ""
    }
  `

  interativos?.bindSelectableCards({
    container: bodyEl,
    dataAttr: "data-s7",
    details,
    onChange: (next) => {
      slide7Focus = next || "mm"
      renderSlide7(page)
    },
  })
}

function renderSlide8(page) {
  const steps = [
    {
      id: "solicitacao",
      icon: "note",
      title: "Solicitação",
      detail:
        "A necessidade é registrada pela área requisitante, iniciando oficialmente a jornada da despesa com rastreabilidade.",
      risk: "Pedido incompleto ou sem informações essenciais.",
    },
    {
      id: "entrega",
      icon: "box",
      title: "Entrega e Recebimento",
      detail:
        "Produto ou serviço é conferido para validar aderência ao que foi acordado comercialmente.",
      risk: "Recebimento sem conferência adequada.",
    },
    {
      id: "lancamento",
      icon: "list",
      title: "Lançamento da NF",
      detail:
        "A despesa é registrada corretamente no sistema, garantindo base contábil e financeira consistente.",
      risk: "Dados fiscais ou valores lançados incorretamente.",
    },
    {
      id: "preparacao",
      icon: "folder",
      title: "Preparação",
      detail:
        "Notas e datas são organizadas conforme acordos e regras internas para programação do pagamento.",
      risk: "Programação fora do prazo ou sem validações.",
    },
    {
      id: "efetivacao",
      icon: "card",
      title: "Efetivação",
      detail:
        "Pagamentos são executados junto às instituições financeiras, conforme modalidade definida.",
      risk: "Rejeição bancária ou pagamento indevido.",
    },
    {
      id: "conciliacao",
      icon: "check",
      title: "Conciliação",
      detail:
        "Conferência final entre sistema e banco para garantir que o valor pago foi corretamente reconhecido.",
      risk: "Diferença entre extrato bancário e registros internos.",
    },
  ]

  const current = steps.find((step) => step.id === slide8Focus) ?? steps[0]
  bodyEl.innerHTML = `
    ${interativos?.renderHeroBloco({ kicker: "Macrofluxo do processo", lead: page.body[0] }) ?? ""}
    <p>${page.body[1]}</p>
    ${interativos?.renderStepperFluxo({ steps, activeId: current.id, dataAttr: "data-s8" }) ?? ""}
    ${interativos?.renderPainelDetalhe({
      title: current.title,
      text: `${current.detail} Risco principal: ${current.risk}`,
    }) ?? ""}
    <p class="hint">Use as setas do teclado para navegar pelas etapas do fluxo.</p>
  `

  interativos?.bindStepper({
    container: bodyEl,
    dataAttr: "data-s8",
    onChange: (next) => {
      slide8Focus = next || "solicitacao"
      renderContent()
    },
  })
}

function renderSlide9(page) {
  const steps = [
    {
      id: "solicitacao",
      icon: "note",
      title: "Solicitação",
      owner: "Área requisitante",
      input: "Necessidade de compra/serviço",
      output: "Pedido formal registrado",
      control: "Informações completas e aprovadas",
    },
    {
      id: "entrega",
      icon: "box",
      title: "Entrega e Recebimento",
      owner: "Área requisitante + recebimento",
      input: "Pedido aprovado",
      output: "Entrega conferida",
      control: "Validação de quantidade/qualidade",
    },
    {
      id: "lancamento",
      icon: "list",
      title: "Lançamento da NF",
      owner: "Contas a Pagar / Fiscal",
      input: "Documento fiscal e recebimento",
      output: "Despesa registrada no sistema",
      control: "Conferência de dados fiscais e valores",
    },
    {
      id: "preparacao",
      icon: "folder",
      title: "Preparação",
      owner: "Contas a Pagar",
      input: "Notas lançadas e validadas",
      output: "Pagamentos programados",
      control: "Prazo, bloqueios e condições comerciais",
    },
    {
      id: "efetivacao",
      icon: "card",
      title: "Efetivação",
      owner: "Contas a Pagar + bancos",
      input: "Pagamentos programados",
      output: "Pagamentos executados",
      control: "Retorno bancário e tratativa de rejeições",
    },
    {
      id: "conciliacao",
      icon: "check",
      title: "Conciliação",
      owner: "Contas a Pagar / Financeiro",
      input: "Débitos bancários e lançamentos SAP",
      output: "Fechamento conciliado",
      control: "Correspondência banco x sistema",
    },
  ]

  const current = steps.find((s) => s.id === slide9Focus) ?? steps[0]

  bodyEl.innerHTML = `
    ${interativos?.renderHeroBloco({ kicker: "Etapas do macrofluxo", lead: page.body[0] }) ?? ""}
    <p>${page.body[1]}</p>
    ${interativos?.renderStepperFluxo({ steps, activeId: current.id, dataAttr: "data-s9" }) ?? ""}
    ${interativos?.renderPainelDetalhe({
      title: current.title,
      text: `Responsável: ${current.owner}. Entrada: ${current.input}. Saída: ${current.output}. Controle-chave: ${current.control}.`,
    }) ?? ""}
    <div class="pill-row">
      <span class="pill">${interativos?.renderIcon("building", "pill-emoji") ?? ""}Responsável: ${current.owner}</span>
      <span class="pill">${interativos?.renderIcon("inbox", "pill-emoji") ?? ""}Entrada: ${current.input}</span>
      <span class="pill">${interativos?.renderIcon("check", "pill-emoji") ?? ""}Saída: ${current.output}</span>
    </div>
  `

  interativos?.bindStepper({
    container: bodyEl,
    dataAttr: "data-s9",
    onChange: (next) => {
      slide9Focus = next || "solicitacao"
      renderSlide9(page)
    },
  })
}

function renderSlide10(page) {
  const details = {
    deposito: {
      title: "Depósito",
      text: "Categoria usada para transferências diretas entre contas e liquidação ágil dos pagamentos.",
      methods: ["TED", "Transferência", "PIX"],
      when: "Quando usar: pagamento direto em conta do fornecedor.",
    },
    cobranca: {
      title: "Cobrança",
      text: "Categoria orientada a documentos de cobrança emitidos e registrados em banco ou fisco.",
      methods: ["Boleto", "Fatura", "Tributos"],
      when: "Quando usar: quitação com base em título/guias de cobrança.",
    },
    antecipacao: {
      title: "Antecipação",
      text: "Categoria para operação de antecipação de recebíveis por meio do programa de Risco Sacado.",
      methods: ["Risco Sacado"],
      when: "Quando usar: estratégia financeira acordada com fornecedor e banco parceiro.",
    },
  }

  const cards = [
    { id: "deposito", icon: "card", title: "Depósito", subtitle: "TED, Transferência e PIX." },
    { id: "cobranca", icon: "list", title: "Cobrança", subtitle: "Boleto, Fatura e Tributos." },
    { id: "antecipacao", icon: "chart", title: "Antecipação", subtitle: "Programa de Risco Sacado." },
  ]

  const current = details[slide10Focus] ?? details.deposito
  const methodsHtml = current.methods
    .map(
      (method) =>
        `<span class="pill">${interativos?.renderIcon("check", "pill-emoji") ?? ""}${method}</span>`,
    )
    .join("")

  bodyEl.innerHTML = `
    ${interativos?.renderHeroBloco({ kicker: "Formas de pagamento", lead: page.body[0] }) ?? ""}
    <p>${page.body[1]}</p>
    ${interativos?.renderCardsInterativos({ cards, activeId: slide10Focus, dataAttr: "data-s10" }) ?? ""}
    ${interativos?.renderPainelDetalhe({ title: current.title, text: current.text }) ?? ""}
    <div class="pill-row">${methodsHtml}</div>
    <p class="hint">${current.when}</p>
    ${
      interativos?.renderReveal({
        label: "Ver dica de categorização na operação",
        html: "<p>Na prática, a categoria guia qual documento e qual trilha de conferência entram na mesa: depósito costuma exigir dados bancários limpos; cobrança exige título ou guia válidos; antecipação exige aderência ao programa e ao banco parceiro.</p>",
      }) ?? ""
    }
  `

  interativos?.bindSelectableCards({
    container: bodyEl,
    dataAttr: "data-s10",
    details,
    onChange: (next) => {
      slide10Focus = next || "deposito"
      renderSlide10(page)
    },
  })
  interativos?.bindReveal(bodyEl)
}

function renderSlide11(page) {
  const details = {
    ted: {
      title: "TED",
      text: "Transferência eletrônica entre bancos diferentes, normalmente com liquidação em até duas horas.",
      uso: "Usado quando o pagamento precisa ir para conta de outro banco.",
    },
    transferencia: {
      title: "Transferência",
      text: "Pagamento entre contas do mesmo banco, com processamento mais simples na rotina operacional.",
      uso: "Usado quando pagador e favorecido estão na mesma instituição financeira.",
    },
    pix: {
      title: "PIX",
      text: "Pagamento instantâneo com alta velocidade de liquidação e ampla adoção nas operações atuais.",
      uso: "Usado quando há necessidade de liquidação imediata.",
    },
    boleto: {
      title: "Boleto",
      text: "Documento de cobrança registrado em banco, com pagamento vinculado ao código/barras digitável.",
      uso: "Usado em cobranças formais emitidas por fornecedor ou prestador.",
    },
    fatura: {
      title: "Fatura",
      text: "Documento de cobrança comum em despesas de consumo e tributos, com lógica similar ao boleto.",
      uso: "Usado para água, luz, telefonia, tributos e despesas recorrentes.",
    },
  }

  const cards = [
    { id: "ted", icon: "card", title: "TED", subtitle: "Transferência entre bancos." },
    { id: "transferencia", icon: "inbox", title: "Transferência", subtitle: "Mesma instituição bancária." },
    { id: "pix", icon: "clock", title: "PIX", subtitle: "Liquidação instantânea." },
    { id: "boleto", icon: "list", title: "Boleto", subtitle: "Documento de cobrança bancária." },
    { id: "fatura", icon: "note", title: "Fatura", subtitle: "Cobrança de consumo/tributos." },
  ]

  const current = details[slide11Focus] ?? details.ted

  bodyEl.innerHTML = `
    ${interativos?.renderHeroBloco({ kicker: "Detalhamento das modalidades", lead: page.body[0] }) ?? ""}
    <p>${page.body[1]}</p>
    ${interativos?.renderCardsInterativos({ cards, activeId: slide11Focus, dataAttr: "data-s11" }) ?? ""}
    ${interativos?.renderPainelDetalhe({ title: current.title, text: current.text }) ?? ""}
    <div class="pill-row">
      <span class="pill">${interativos?.renderIcon("target", "pill-emoji") ?? ""}${current.uso}</span>
      <span class="pill">${interativos?.renderIcon("check", "pill-emoji") ?? ""}A modalidade deve seguir o tipo de documento recebido.</span>
    </div>
    ${
      interativos?.renderCompareTabs({
        kicker: "Comparativo em um clique: boleto versus fatura",
        tabs: [
          {
            id: "bol",
            title: "Boleto",
            body: `<ul>
              <li><strong>Origem:</strong> cobrança formal registrada em banco, com código de barras.</li>
              <li><strong>Uso típico:</strong> fornecedores e prestadores que emitem título bancário.</li>
              <li><strong>Atenção:</strong> validar linha digitável, valor e beneficiário antes de programar.</li>
            </ul>`,
          },
          {
            id: "fat",
            title: "Fatura",
            body: `<ul>
              <li><strong>Origem:</strong> fatura de consumo ou serviço recorrente (água, luz, telecom, tributos).</li>
              <li><strong>Uso típico:</strong> despesas recorrentes e arrecadações com lógica próxima ao boleto.</li>
              <li><strong>Atenção:</strong> conferir competência e leituras/consumo para evitar pagamento duplicado.</li>
            </ul>`,
          },
        ],
      }) ?? ""
    }
  `

  interativos?.bindSelectableCards({
    container: bodyEl,
    dataAttr: "data-s11",
    details,
    onChange: (next) => {
      slide11Focus = next || "ted"
      renderSlide11(page)
    },
  })
  interativos?.bindCompareTabs(bodyEl)
}

function renderSlide12(page) {
  const details = {
    zaffari: {
      title: "Papel do Grupo Zaffari",
      text: "Avalia a negociação com o banco parceiro para garantir que o fornecedor receba o valor correto na data acordada.",
    },
    banco: {
      title: "Papel do Banco (Itaú)",
      text: "Intermedeia a operação, realiza o pagamento ao fornecedor e mantém a comunicação operacional com a empresa.",
    },
    fornecedor: {
      title: "Papel do Fornecedor",
      text: "Opta pela antecipação e conclui a operação na plataforma do banco, sem alterar o fluxo regular de pagamentos da empresa.",
    },
  }

  const cards = [
    { id: "zaffari", icon: "building", title: "Grupo Zaffari", subtitle: "Coordena e valida a negociação." },
    { id: "banco", icon: "card", title: "Banco Parceiro", subtitle: "Intermedia e executa o pagamento." },
    { id: "fornecedor", icon: "check", title: "Fornecedor", subtitle: "Decide antecipar e conclui operação." },
  ]

  const current = details[slide12Focus] ?? details.zaffari

  bodyEl.innerHTML = `
    ${interativos?.renderHeroBloco({ kicker: "Risco Sacado", lead: page.body[0] }) ?? ""}
    <p>${page.body[1]}</p>
    ${interativos?.renderCardsInterativos({ cards, activeId: slide12Focus, dataAttr: "data-s12" }) ?? ""}
    ${interativos?.renderPainelDetalhe({ title: current.title, text: current.text }) ?? ""}
    <div class="pill-row">
      <span class="pill">${interativos?.renderIcon("clock", "pill-emoji") ?? ""}Antecipação sem alterar o fluxo padrão da empresa.</span>
      <span class="pill">${interativos?.renderIcon("shield", "pill-emoji") ?? ""}Ganha agilidade e fortalece relação com parceiros.</span>
    </div>
  `

  interativos?.bindSelectableCards({
    container: bodyEl,
    dataAttr: "data-s12",
    details,
    onChange: (next) => {
      slide12Focus = next || "zaffari"
      renderSlide12(page)
    },
  })
}

function renderSlide13(page) {
  const checklist = [
    "Estrutura do Contas a Pagar",
    "Empresas do Grupo Zaffari",
    "Macrofluxo do processo",
    "Formas de pagamento utilizadas",
  ]

  const checklistHtml = checklist
    .map(
      (item) =>
        `<span class="pill">${interativos?.renderIcon("check", "pill-emoji") ?? ""}${item}</span>`,
    )
    .join("")

  bodyEl.innerHTML = `
    ${interativos?.renderHeroBloco({ kicker: "Conclusão do módulo", lead: page.body[0] }) ?? ""}
    <p>${page.body[1]}</p>
    <div class="pill-row">${checklistHtml}</div>
    ${interativos?.renderPainelDetalhe({
      title: "Próximo passo",
      text: "Avançar para o Módulo 2 para aprofundar cada etapa do fluxo do Contas a Pagar.",
    }) ?? ""}
    <h4 class="section-sub">Checkpoint rápido</h4>
    ${
      interativos?.renderQuizCheckpoint({
        question: "Depois do Módulo 1, qual é o foco natural do Módulo 2?",
        correctId: "fluxo",
        options: [
          { id: "formas", label: "Repetir apenas as formas de pagamento, sem aprofundar o fluxo." },
          { id: "fluxo", label: "Aprofundar Preparação, Efetivação e Conciliação no dia a dia operacional." },
          { id: "fim", label: "Encerrar a jornada sem prática no SAP nem rotina de tratativa." },
        ],
        feedbackOk:
          "Correto. O Módulo 2 mergulha nas três fases do fluxo e nos procedimentos que sustentam segurança e precisão.",
        feedbackWrong:
          "Ainda não. O roteiro direciona para o Módulo 2 justamente para detalhar o fluxo (preparação, execução e conciliação), não para encerrar no conceito.",
      }) ?? ""
    }
  `
  interativos?.bindQuizCheckpoint(bodyEl)
}

function renderSlideDDA(page) {
  const steps = [
    {
      title: "Conceito e base regulatória",
      html: `<p>${page.body[0]}</p><p>${page.body[1]}</p>`,
    },
    {
      title: "Varredura bancária e importação",
      html: `<p>${page.body[2]}</p>`,
    },
    {
      title: "Rotina na transação DDA_BR",
      html: `<p>${page.body[3]}</p>`,
      checks: [
        { id: "forma", label: "Conferi forma de pagamento e aderência ao título recebido." },
        { id: "bloq", label: "Revisei bloqueios de pagamento que impedem a programação." },
        { id: "valor", label: "Comparei valor e vencimento do boleto com a nota fiscal." },
      ],
    },
    {
      title: "Programação e planilha de não liberados",
      html: `<p>${page.body[4]}</p><p class="hint">Use o material oficial como referência completa; aqui o foco é a ordem da rotina.</p>`,
    },
  ]

  bodyEl.innerHTML = `
    ${interativos?.renderHeroBloco({
      kicker: "Simulação guiada · DDA",
      lead: "Siga os passos como no SAP: importação, conferência na DDA_BR e só então a programação do boleto.",
    }) ?? ""}
    ${interativos?.renderDdAWizard({ steps }) ?? ""}
  `
  interativos?.bindDdAWizard(bodyEl)
}

function renderSlideDivergencias(page) {
  const details = {
    vencimento: {
      title: "Divergência de vencimento",
      text: "O prazo informado pelo fornecedor é menor do que o estipulado no acordo comercial. A tratativa envolve compras e fornecedor; após validações, a nota pode ser liberada manualmente.",
    },
    entrega: {
      title: "Atraso na entrega",
      text: "O vencimento está coerente, mas a mercadoria foi entregue fora do prazo. O foco passa a ser recebimento e logística até normalizar o cruzamento com o título.",
    },
    ambos: {
      title: "Vencimento e entrega divergentes",
      text: "Há inconsistência nos dois pontos ao mesmo tempo. Exige análise conjunta e costuma manter bloqueio até fechar a tratativa com o fornecedor.",
    },
  }

  const cards = [
    { id: "vencimento", icon: "calendar", title: "Vencimento", subtitle: "Prazo menor que o acordado." },
    { id: "entrega", icon: "box", title: "Entrega", subtitle: "Mercadoria fora do prazo." },
    { id: "ambos", icon: "split", title: "Ambos", subtitle: "Vencimento e entrega inconsistentes." },
  ]

  const current = details[slideM24Focus] ?? details.vencimento

  bodyEl.innerHTML = `
    ${interativos?.renderHeroBloco({ kicker: "Matriz de divergências", lead: page.body[0] }) ?? ""}
    <p>${page.body[1]}</p>
    <p>${page.body[2]}</p>
    ${interativos?.renderCardsInterativos({ cards, activeId: slideM24Focus, dataAttr: "data-m24" }) ?? ""}
    ${interativos?.renderPainelDetalhe({ title: current.title, text: current.text }) ?? ""}
    <p class="hint">Selecione um tipo para ver o foco da tratativa. A ZMM078 concentra pendências comerciais com bloqueio T.</p>
  `

  interativos?.bindSelectableCards({
    container: bodyEl,
    dataAttr: "data-m24",
    details,
    onChange: (next) => {
      slideM24Focus = next || "vencimento"
      renderSlideDivergencias(page)
    },
  })
}

function renderSlideBloqueios(page) {
  const rows = [
    { tipo: "auto", tipoLabel: "Automático", letra: "C", desc: "Compra condicional" },
    { tipo: "auto", tipoLabel: "Automático", letra: "G", desc: "Retenção técnica" },
    { tipo: "auto", tipoLabel: "Automático", letra: "H", desc: "Compensação de adiantamento" },
    { tipo: "auto", tipoLabel: "Automático", letra: "W", desc: "Workflow" },
    { tipo: "auto", tipoLabel: "Automático", letra: "T", desc: "Bloqueio inbound (divergências / ZMM078)" },
    { tipo: "manual", tipoLabel: "Manual", letra: "A", desc: "Bloqueio do Contas a Pagar" },
    { tipo: "manual", tipoLabel: "Manual", letra: "F", desc: "Antecipação de pagamentos" },
    { tipo: "manual", tipoLabel: "Manual", letra: "J", desc: "Jurídico" },
    { tipo: "manual", tipoLabel: "Manual", letra: "O", desc: "Outros" },
    { tipo: "manual", tipoLabel: "Manual", letra: "P", desc: "Penhora" },
    { tipo: "manual", tipoLabel: "Manual", letra: "Q", desc: "Rejeição" },
    { tipo: "manual", tipoLabel: "Manual", letra: "X", desc: "Divergência comercial" },
    { tipo: "manual", tipoLabel: "Manual", letra: "Y", desc: "Baixas em perdas ou receitas financeiras" },
  ]

  bodyEl.innerHTML = `
    ${interativos?.renderHeroBloco({ kicker: "Bloqueios no SAP", lead: page.body[0] }) ?? ""}
    <p>${page.body[1]}</p>
    <p>${page.body[2]}</p>
    ${interativos?.renderTabelaBloqueios({ rows }) ?? ""}
    <p class="hint">${page.body[3]}</p>
  `
  interativos?.bindTabelaBloqueios(bodyEl)
}

function renderSlide14(page) {
  const details = {
    preparacao: {
      title: "Preparação de pagamentos",
      text: "Fase em que documentos, prazos, bloqueios e validações são tratados para garantir base consistente da execução.",
    },
    efetivacao: {
      title: "Efetivação dos pagamentos",
      text: "Fase de execução financeira junto aos bancos, com remessa, retorno e acompanhamento de status dos pagamentos.",
    },
    conciliacao: {
      title: "Conciliação",
      text: "Fase final de conferência entre registros internos e extrato bancário para fechamento seguro do ciclo.",
    },
  }

  const cards = [
    { id: "preparacao", icon: "folder", title: "Preparação", subtitle: "Organizar, validar e programar." },
    { id: "efetivacao", icon: "card", title: "Efetivação", subtitle: "Executar pagamentos com segurança." },
    { id: "conciliacao", icon: "check", title: "Conciliação", subtitle: "Conferir banco x sistema." },
  ]

  const current = details[slide14Focus] ?? details.preparacao

  bodyEl.innerHTML = `
    ${interativos?.renderHeroBloco({ kicker: "Módulo 2", lead: page.body[0] }) ?? ""}
    <p>${page.body[1]}</p>
    ${interativos?.renderCardsInterativos({ cards, activeId: slide14Focus, dataAttr: "data-s14" }) ?? ""}
    ${interativos?.renderPainelDetalhe({ title: current.title, text: current.text }) ?? ""}
    <div class="pill-row">
      <span class="pill">${interativos?.renderIcon("shield", "pill-emoji") ?? ""}Segurança operacional</span>
      <span class="pill">${interativos?.renderIcon("target", "pill-emoji") ?? ""}Precisão financeira</span>
      <span class="pill">${interativos?.renderIcon("trace", "pill-emoji") ?? ""}Rastreabilidade do fluxo</span>
    </div>
  `

  interativos?.bindSelectableCards({
    container: bodyEl,
    dataAttr: "data-s14",
    details,
    onChange: (next) => {
      slide14Focus = next || "preparacao"
      renderSlide14(page)
    },
  })
}

function renderSlide15(page) {
  const steps = [
    {
      id: "preparacao",
      icon: "folder",
      title: "Preparação",
      detail: "Conferir documentos, tratar bloqueios e deixar pagamentos aptos para execução.",
    },
    {
      id: "efetivacao",
      icon: "card",
      title: "Efetivação",
      detail: "Enviar remessa, processar retorno e acompanhar pagamentos junto aos bancos.",
    },
    {
      id: "conciliacao",
      icon: "check",
      title: "Conciliação",
      detail: "Validar que os débitos bancários correspondem aos lançamentos do sistema.",
    },
  ]

  const current = steps.find((s) => s.id === slide15Focus) ?? steps[0]

  bodyEl.innerHTML = `
    ${interativos?.renderHeroBloco({ kicker: "As três fases do processo", lead: page.body[0] }) ?? ""}
    <p>${page.body[1]}</p>
    ${interativos?.renderStepperFluxo({ steps, activeId: current.id, dataAttr: "data-s15" }) ?? ""}
    ${interativos?.renderPainelDetalhe({ title: current.title, text: current.detail }) ?? ""}
    <p class="hint">Começamos por Preparação de Pagamentos e avançamos fase a fase no fluxo.</p>
  `

  interativos?.bindStepper({
    container: bodyEl,
    dataAttr: "data-s15",
    onChange: (next) => {
      slide15Focus = next || "preparacao"
      renderSlide15(page)
    },
  })
}

document.getElementById("btn-back-menu")?.addEventListener("click", () => {
  window.location.href = "./index.html"
})

document.getElementById("btn-toggle-sidebar")?.addEventListener("click", () => {
  const mobile = window.matchMedia("(max-width: 980px)").matches
  if (mobile) {
    sidebarEl?.classList.toggle("open")
    return
  }
  shellEl?.classList.toggle("sidebar-collapsed")
})

document.getElementById("btn-settings-placeholder")?.addEventListener("click", () => {
  window.alert("Menu de configurações será implementado na próxima etapa.")
})

document.addEventListener("keydown", (event) => {
  const activeTag = document.activeElement?.tagName
  const isTypingContext =
    activeTag === "INPUT" ||
    activeTag === "TEXTAREA" ||
    activeTag === "SELECT" ||
    document.activeElement?.isContentEditable

  if (isTypingContext) return

  if (event.key === "ArrowRight") {
    event.preventDefault()
    goToNextPage()
    return
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault()
    goToPrevPage()
    return
  }

  if (event.key === "Home") {
    event.preventDefault()
    goToIndex(0)
    return
  }

  if (event.key === "End") {
    event.preventDefault()
    goToIndex(coursePages.length - 1)
    return
  }

  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "b") {
    event.preventDefault()
    sidebarEl?.classList.toggle("open")
    return
  }

  if (event.key === "Escape") {
    if (sidebarEl?.classList.contains("open")) {
      event.preventDefault()
      sidebarEl.classList.remove("open")
    }
  }
})

renderMenu()
renderContent()
contentEl?.focus()
