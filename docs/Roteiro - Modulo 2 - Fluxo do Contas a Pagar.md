# Módulo 2 - Fluxo do Contas a Pagar

Slide 14: Neste módulo, você vai conhecer em detalhes **como funciona o fluxo do Contas a Pagar**, passando pelas três grandes etapas do processo:

* **Preparação de pagamentos**

* **Efetivação dos pagamentos**

* **Conciliação**

Vamos aprofundar a rotina, mostrar como cada fase se conecta e esclarecer os procedimentos que garantem segurança, precisão e organização financeira no Grupo Zaffari.

**Clique para avançar!**

**Slide 15 –** Nesta etapa da Jornada, vamos aprofundar as três grandes fases do processo do Fluxo do Contas a Pagar.

Cada fase será explicada separadamente. Clique na opção Preparação de Pagamentos para começar.

![Diagrama, Texto, chat ou mensagem de textoO conteúdo gerado por IA pode estar incorreto.][image5]

---

**Slide 16 –** O DDA (Débito Direto Autorizado) é uma ferramenta desenvolvida e gerenciada pela Febraban (Federação Brasileira de Bancos) que permite que os boletos sejam visualizados e pagos eletronicamente, sem a necessidade de impressão do boleto físico.

Para obtermos estas informações é efetuada uma varredura, pelo banco contratado, nos CNPJs das empresas e das controladas em todas as instituições financeiras, este arquivo é disponibilizado e importado diariamente.

Clique na imagem para conhecer o passo a passo:

**Slide 17:**

* Realizar o *Logon* no sistema SAP;

* Acesso à transação **DDA_BR;**

* Gravação das informações do boleto em memória;

* Conferência das seguintes informações:
  * Forma de pagamento;
  * Bloqueio de pagamento;
  * Data de vencimento;
  * Comparar o valor do boleto com a da Nota Fiscal.

* Programação do boleto para pagamento;

* Criação da planilha de boletos não liberados.

  Agora siga em frente.

![TextoO conteúdo gerado por IA pode estar incorreto.][image6]

---

**Slide 18 –** Durante o cruzamento do arquivo de boletos com as partidas lançadas no SAP, podem ocorrer divergências:

**Principais problemas:**

* Prazo de pagamento diferente do acordo comercial

* Divergência no percentual de desconto do contrato

* Divergência no valor da Nota Fiscal

* Quando uma cobrança chega, mas a Nota Fiscal ou fornecedor não está registrado no Grupo Zaffari.

---

**Slide 19** – Com o objetivo de gerenciar e bloquear pagamentos que apresentarem divergências comerciais nas notas emitidas pelos fornecedores, foi desenvolvida a transação **ZMM078**, um código dentro do sistema SAP que permite identificar e informar essas pendências.

Existem dois tipos de divergências: **atraso na entrega da mercadoria** e **divergência de vencimento**, que ocorre quando o prazo de pagamento combinado na compra não é cumprido pelo fornecedor.
Essas notas, quando contabilizadas no Contas a Pagar, recebem o bloqueio **“T”** no sistema.

Clique para saber mais sobre os Tipos de Divergências.

**1. Divergência de Vencimento** – Responsabilidade do Contas a Pagar
Ocorre quando o prazo de pagamento informado pelo fornecedor é menor do que o estipulado no acordo.

* Vencimento divergente / entrega OK: o vencimento informado na nota fiscal está diferente do que foi acordado na compra, porém a mercadoria foi entregue dentro do prazo.

**2. Atraso na Entrega – Responsabilidade da Área Comercial**
Ocorre quando a mercadoria chega após o prazo estabelecido na compra.

* **Vencimentos OK / Entrega:** o vencimento informado na nota fiscal está de acordo com o negociado, mas a entrega ocorreu com atraso.

**3. Vencimento/Entrega Divergentes**
Ocorre quando **ambos** os itens apresentam inconsistências:

* o vencimento informado na nota fiscal está divergente do acordado **e** a mercadoria foi entregue com atraso.

Após a tratativa com o fornecedor, as notas são **liberadas manualmente para pagamento**.

---

**Slide 20 –** Com a premissa de garantir que todos os itens acordados serão respeitados, foram criados os bloqueios de pagamentos que podem ser oriundos das condições de pagamento, automáticos ou manuais.

Para operacionalizar determinadas negociações comerciais, foram desenvolvidas travas de pagamentos no sistema, identificadas por uma letra que representa uma situação de bloqueio.

Condições de pagamento:

Conforme a condição utilizada no pedido, a nota ou parte dela entra bloqueada para pagamento.

Confira quais as opções de bloqueio no quadro ao lado:

**C - Representa:** Compra condicional - Bloqueio exclusivo do comercial, que condiciona a liberação para pagamento à uma ação da equipe responsável pela negociação.

**G- Representa:** Retenção técnica - Bloqueio utilizado pela equipe de obras para a validação de serviços prestados onde é retido um percentual do pagamento.

**H- Representa:** Compensação de adiantamento - Utilizado para identificar documentos já pagos via adiantamento, esse bloqueio tem o objetivo de evitar pagamentos em duplicidade e sua liberação é efetuada manualmente pelo contas a pagar.

W- Representa: Workflow - Bloqueio de documentos já registrados em FI, porém, com o fluxo de aprovação ainda não concluído no workflow. Este é um Bloqueio automático.

T- Representa: Bloqueio Inbound - Utilizado para identificar notas com divergências de vencimento ou atraso na entrega de mercadorias. Este é um Bloqueio automático.

---

Slide 21 Clique no quadro abaixo para visualizar mais detalhes sobre os Bloqueios Manuais.

A **- Representa**: Bloqueio de pagamento - Bloqueio exclusivo do contas a pagar.

F**- Representa**: Antecipação de pagamentos - Utilizado para bloquear as notas do comercial varejo até que ocorra a validação das verbas de desconto de contrato.

 J**- Representa**: Jurídico - Utilizado para identificar documentos bloqueados devido a alguma ação jurídica sem penhora.

O**- Representa**: Outros - Bloqueio de pagamento genérico utilizado pelo contas a pagar para que não ocorram pagamentos ou abatimentos indevidos relacionados a exceções.

P**- Representa**: Penhora - Bloqueio com o objetivo de identificar notas penhoradas em alguma ação judicial ou retenção de determinado percentual do faturamento do fornecedor.

Q**- Representa**: Rejeição - Utilizado com o objetivo de bloquear notas onde ocorreram rejeições no pagamento até uma tratativa de identificar e corrigir o problema.

X**: Representa**: Divergência comercial - Bloqueio para divergências comerciais.

Y: É Utilizado para identificar documentos a serem baixados em perdas ou receitas financeiras.

Slide 22 – Vamos conhecer os principais tipos de tributos e como eles se relacionam com o processo de pagamento.

Tributos são todos os valores pagos por cada contribuinte (pessoa física ou jurídica) ao Estado (fisco), decorrentes da relação jurídica existente entre eles. Por tratar-se de pagamentos efetuados por chave de arrecadação (guias), a programação de pagamento é realizada com a **forma de pagamento “O”** e por meio da transação específica com o código **“ZFI028”**.

Explore as três modalidades.

Basta clicar nos círculos para visualizar os detalhes.

* **Impostos:** Consistem em um tributo obrigatório, cujo valor é destinado ao governo e calculado a partir de uma porcentagem.
  *Exemplo: IPTU.*

* **Contribuições:** Tributos cobrados pelo governo com finalidade específica.
  *Exemplo: PIS, COFINS.*

* **Taxas:** Tributos cobrados pelo Estado em função de um serviço prestado.
  *Exemplo: taxa de registro empresarial na Junta Comercial.*

---

**Slide 23 –** A transação ZFI045 foi desenvolvida para atender as necessidades das áreas que necessitam entrar com lançamentos de valores a pagar sem utilizar o método convencional (Módulo MM).

Esses lançamentos são efetuados utilizando contas contábeis, centro de custos e lucros pré-estabelecidos na transação e disponibilizados aos usuários através de rubricas.

São extraídos relatórios diariamente para garantirmos que todos os lançamentos foram aprovados e programados para pagamento devido a criticidade dos impactos de inadimplência.

---

**Slide 24 –**

Para garantir uma gestão eficiente dos pagamentos, o Contas a Pagar conta com um relatório específico que identifica todos os lançamentos com vencimento em até 3 dias úteis futuros e que ainda não possuem programação de pagamento definida.

Esse acompanhamento antecipado permite atuar nas pendências antes do prazo, evitando pagamentos em atraso ou que precisem ser efetuados em D=0. Vale lembrar que as formas de pagamento podem ocorrer por crédito em conta ou boleto, conforme a negociação realizada pela área comercial.

Além disso, é importante reforçar que todos os pagamentos **do Grupo Zaffari** seguem um padrão: o agendamento junto às instituições financeiras é feito sempre com um dia de antecedência ao vencimento. Qualquer solicitação feita após esse prazo passa a ser tratada como D=0.

Para reduzir perdas financeiras ocasionadas por resgates de aplicações fora do tempo ideal, foram estabelecidas medidas adicionais de controle, como a necessidade de aprovação do Gerente da área solicitante, do Coordenador do Contas a Pagar e do Gerente Financeiro. Todas as exceções devem ser registradas e aprovadas internamente.

---

Slide 25: Agora que já compreendemos como funciona a Preparação de Pagamentos, seguimos para a próxima etapa do Fluxo do Contas a Pagar: Clique na opção de Efetivação dos Pagamentos.

![Diagrama, Texto, chat ou mensagem de textoO conteúdo gerado por IA pode estar incorreto.][image5]

---

**Slide 26 –** Antes de seguirmos para a execução dos pagamentos, é fundamental garantir que toda a preparação foi feita corretamente.
Nesta etapa, trabalhamos com alguns ***checks*** **diários**, que funcionam como uma revisão final para assegurar que nenhuma inconsistência ou erro siga adiante no processo.
Essas validações ajudam a evitar divergências financeiras, pagamentos incorretos ou atrasos, garantindo um fluxo mais seguro e eficiente.

Slide 27: Clique nos ícones para descobrir quais são os *checks* que devem ser realizados diariamente:

* **Relatório de inadimplência:** verificar se existem verbas e notas de devolução vinculadas aos pagamentos que ultrapassam o valor total a ser pago.

* **Validação de verbas com o elemento “PEP” ativo:** PEP é uma nomenclatura utilizada para identificar um coletor de custos vinculado a um projeto. É nesse coletor que são alocados os valores referentes às verbas de Marketing e Trade dentro do módulo PS, garantindo o correto direcionamento dessas despesas na operação financeira. **Equalização das partidas:** conferência de verbas x notas.

* **Distribuição dos bancos conforme a forma de pagamento.**

---

Slide 28:

Após realizarmos todos os *checks* necessários na preparação, garantindo que verbas, notas, bancos e classificações estejam corretos, vamos conhecer como ocorre a **Efetivação dos Pagamentos**, fase em que tudo aquilo que foi organizado e validado passa a ser executado de fato.

O foco é assegurar que os pagamentos sejam realizados dentro dos prazos, sem erros e seguindo os procedimentos financeiros do Grupo Zaffari.

Para explorar, **clique no fluxo abaixo** e acompanhe cada etapa da Efetivação dos Pagamentos.

Slide 29 – Efetivação dos Pagamentos

Áudio do fluxo: Agora, vamos entender como funciona o fluxo de efetivação dos pagamentos.

Tudo começa no ambiente interno do Grupo Zaffari, onde as informações de pagamento são registradas e consolidadas no SAP, o sistema utilizado para gestão financeira.

A partir do SAP, é gerado um arquivo no padrão **CNAB 240**, que contém todos os dados necessários para que os bancos processem os pagamentos.
Esse arquivo é então enviado por meio de um canal seguro, através de **SFTP ou VAN**, garantindo a integridade e a confidencialidade das informações.

Depois do envio, os arquivos seguem para as instituições financeiras parceiras, como **Itaú, Santander, Banrisul e Banco do Brasil**, onde os pagamentos são efetivamente processados.
Os bancos também enviam arquivos e mensagens de retorno, que voltam pelo mesmo canal seguro e são importados novamente no SAP, permitindo o acompanhamento da liquidação e o controle do processo.

Esse fluxo garante que todas as etapas aconteçam de forma integrada, segura e dentro dos padrões exigidos pelas instituições financeiras.

E ao **clicar no SAP dentro do fluxo**, você poderá visualizar duas etapas importantes que fazem esse processo acontecer: **Remessa** e **Retorno**.

**![Gráfico, Gráfico de cascataO conteúdo gerado por IA pode estar incorreto.][image7]**

A primeira etapa é a Remessa.
Nessa fase, a rotina é executada automaticamente durante a madrugada.
A transação F110 varre o sistema, identifica todos os pagamentos programados e gera o arquivo que será enviado aos bancos.

A segunda etapa é o Retorno.
Essa rotina ocorre várias vezes ao dia, a cada 15 minutos.
Por meio da transação FF.5, o SAP interpreta os arquivos enviados pelas instituições financeiras, identificando possíveis erros, rejeições ou divergências nos pagamentos.

Essas duas etapas trabalham juntas para garantir que o processo seja contínuo, monitorado e seguro, assegurando a integração completa entre o SAP e os bancos.

---

Slide 30: Agora que já compreendemos como funciona a Efetivação dos Pagamentos, seguimos para a última etapa do Fluxo do Contas a Pagar: Clique na opção de Conciliação.

![Diagrama, Texto, chat ou mensagem de textoO conteúdo gerado por IA pode estar incorreto.][image5]

---

**CONCILIAÇÃO**

**Slide 31 –** A Conciliação bancária é o processo de comparar as transações registradas no sistema interno da empresa com as transações registradas no extrato bancário. Isso é feito para garantir que não haja erros ou fraudes nas transações financeiras do Grupo Zaffari.

No contas a pagar, a conciliação é importante para garantir que todas as despesas e pagamentos registrados no sistema interno correspondem a valores que realmente foram debitados da conta bancária.

Isso ajuda a garantir que todas as contas sejam pagas corretamente. Este processo pode ocorrer de forma automática ou manual.

**Slide 32:** Clique nas cartas para saber mais!

Automática: A forma automática, ocorre quando os pagamentos são efetuados através das transações F110 e F110S (transações standard do SAP) que, ao ser executada, as partidas que estão sendo pagas são compensadas e lançadas na conta bancária que está efetivando o pagamento.

**Manuais:**  Ocorre quando, em determinadas situações (exceções), é necessário o pagamento imediato. Esse processo ocorre através do Internet Banking e a conciliação é efetuada após o lançamento contábil.

Em resumo, a conciliação é essencial para garantir a precisão e a transparência das transações financeiras da empresa e para manter o controle sobre o fluxo de caixa.

---

**Slide 33 –** Agora que já entendemos como funciona a conciliação bancária, avançamos para a etapa em que os pagamentos precisam ser efetivamente reconhecidos dentro do SAP: a Contabilização de Baixa.

É fundamental que todos os pagamentos realizados, independentemente da forma como foram efetuados, possuam um lançamento correspondente no sistema.
Só assim conseguimos garantir que a conciliação seja fechada corretamente e que o saldo bancário esteja alinhado com o que está registrado internamente. Clique na imagem para conhecer mais detalhes do fluxo.

Slide: 34: Agora, vamos visualizar como funciona o fluxo da contabilização de baixa após a efetivação dos pagamentos.

Tudo começa com as informações registradas pelo grupo Zaffari no SAP, onde cada pagamento é programado e identificado.
A partir do SAP, esses pagamentos seguem para as instituições financeiras, como Itaú, Santander, Banrisul e Banco do Brasil, que realizam a cobrança e o débito das contas da empresa.

Depois que o banco processa o pagamento, ele disponibiliza o extrato bancário, que contém todos os débitos efetivamente realizados.
Esse extrato retorna para o SAP, onde é importado e comparado com os registros internos.

É nesse momento que ocorre a conciliação:
as informações que saíram do SAP e os valores debitados no banco precisam estar exatamente iguais.
Quando essas informações coincidem, podemos então realizar a contabilização de baixa, garantindo que o sistema reflita com precisão o que aconteceu na conta bancária.

Esse fluxo assegura que tudo o que foi pago esteja devidamente registrado, mantendo a integridade e a confiabilidade das informações financeiras da empresa.

![DiagramaO conteúdo gerado por IA pode estar incorreto.][image8]

AO clicar no SAP: A contabilização pode ocorrer de diferentes maneiras, dependendo da forma como o pagamento foi executado. As principais são:

• **Internet Banking** é utilizada em situações excepcionais, quando há necessidade de pagamento imediato. Depois da execução, o lançamento contábil é realizado manualmente para registrar a baixa.
• **Arquivo** é quando o pagamento é enviado aos bancos por meio de arquivo CNAB, o sistema consegue gerar os lançamentos automaticamente a partir das transações padrão.
• **Cheque** é utilizado em casos específicos, onde a baixa é feita conforme o cheque é compensado pelo banco.
• **Débito em conta** é ocorre quando um fornecedor é pago diretamente via débito automático. Nesse caso, o lançamento contábil deve refletir o valor debitado pelo banco no extrato.

Independentemente da forma de pagamento, o objetivo é sempre o mesmo: garantir que o que saiu do banco esteja devidamente registrado no SAP, mantendo o controle financeiro preciso e atualizado.

---

Slide 35 – Parabéns por chegar ao final deste módulo!
Aqui, aprofundamos o entendimento sobre o Fluxo de Contas a Pagar, passando pelas etapas de:

* Preparação dos pagamentos

* Efetivação dos pagamentos

* Conciliação

Esses conhecimentos são fundamentais para garantir um processo financeiro eficiente, seguro e alinhado às práticas do Grupo Zaffari.

No próximo módulo, você encontrará uma avaliação de conhecimento para reforçar os principais pontos aprendidos até aqui e avançar para a próxima etapa com segurança.

Nos vemos lá!
