# Sistema de Gestão de Portfólio, CRM e Projetos

## Documento de Especificação do Sistema

Versão 1.0

---

# 1. Visão Geral

Este sistema consiste em um **painel administrativo integrado ao portfólio pessoal**, destinado a centralizar a gestão de:

* conteúdo do portfólio
* relacionamento com clientes (CRM)
* projetos e tarefas
* cálculo de orçamento
* geração de documentos profissionais
* mensagens de leads
* utilitários para desenvolvimento

O objetivo é fornecer uma **plataforma profissional de gestão de projetos freelance**, permitindo organizar atividades, controlar custos e gerar documentação formal para clientes.

---

# 2. Objetivos do Sistema

## Objetivo Principal

Criar uma plataforma que permita gerenciar todo o ciclo de trabalho de um desenvolvedor ou freelancer:

```
Lead → Cliente → Projeto → Execução → Entrega → Documentação
```

---

## Objetivos Específicos

* organizar projetos e clientes
* calcular orçamentos automaticamente
* registrar tarefas e tempo
* gerar documentos profissionais
* gerenciar conteúdo do portfólio
* centralizar mensagens recebidas
* registrar tecnologias e custos

---

# 3. Módulos do Sistema

O sistema será dividido nos seguintes módulos:

```
Dashboard
Portfólio
CRM
Gestão de Projetos
Financeiro
Mensagens
Documentos
Utilitários Dev
Tecnologias
```

---

# 4. Dashboard

Página inicial do sistema.

## Indicadores

* leads recebidos no mês
* projetos ativos
* projetos concluídos
* faturamento estimado
* tarefas pendentes
* horas trabalhadas

## Widgets

* atividades recentes
* projetos em andamento
* próximos prazos
* mensagens novas

---

# 5. Gestão de Conteúdo do Portfólio

Permite gerenciar o conteúdo exibido no site.

## Funcionalidades

* cadastro de projetos
* cadastro de artigos
* cadastro de tecnologias
* gerenciamento de imagens
* controle de publicação

---

## Estrutura de Projeto do Portfólio

Campos:

* título
* descrição
* tecnologias utilizadas
* imagens
* links (github/demo)
* data
* destaque
* status de publicação

---

# 6. CRM (Gestão de Clientes)

Sistema para cadastro e acompanhamento de clientes.

## Funcionalidades

* cadastro de clientes
* histórico de contatos
* associação com projetos
* observações internas

---

## Estrutura de Cliente

Campos:

* nome
* empresa
* email
* telefone
* cidade
* origem do lead
* status
* observações

---

# 7. Gestão de Tecnologias

Sistema para registrar tecnologias utilizadas nos projetos.

## Funcionalidades

* cadastrar tecnologia
* definir valor da hora
* categorizar tecnologia
* ativar ou desativar tecnologia

---

## Estrutura de Tecnologia

Campos:

* nome
* categoria
* valor_hora
* descrição
* ativo

---

# 8. Gestão de Projetos

Este é o módulo central do sistema.

A estrutura hierárquica é:

```
Projeto
   ↓
Missões
   ↓
Kanban
   ↓
Cards (tarefas)
```

---

# 9. Cadastro de Projeto

Campos:

* nome
* cliente
* descrição
* data de início
* prazo
* status
* valor estimado
* valor final
* custo estimado
* lucro estimado

---

## Tecnologias do Projeto

Cada projeto possui tecnologias associadas.

Essas tecnologias serão usadas nas missões.

---

# 10. Missões (Etapas do Projeto)

Missões representam etapas macro do projeto.

Exemplos:

* planejamento
* design
* desenvolvimento
* testes
* deploy

---

## Estrutura da Missão

Campos:

* nome
* descrição
* ordem
* horas estimadas
* horas reais
* status

---

## Tecnologias da Missão

Ao criar uma missão:

* as tecnologias do projeto são copiadas automaticamente
* o usuário pode remover tecnologias não utilizadas

---

# 11. Kanban de Atividades

Cada missão possui um quadro Kanban.

Colunas:

```
Backlog
A Fazer
Em Andamento
Revisão
Concluído
```

---

# 12. Cards (Tarefas)

Cada card representa uma atividade.

Campos:

* título
* descrição
* responsável
* prioridade
* tempo estimado
* tempo gasto
* data limite
* status

Extras:

* checklist
* comentários
* anexos

---

# 13. Arquivos e Links nas Missões

Cada missão permite anexar recursos.

## Arquivos

* documentos
* imagens
* PDFs
* diagramas

## Links

* repositórios
* documentação
* APIs
* ferramentas externas

---

# 14. Sistema de Cálculo de Orçamento

O orçamento do projeto será calculado automaticamente.

Baseado em:

* tecnologias utilizadas
* valor da hora de cada tecnologia
* tempo estimado das missões

---

## Cálculo da Missão

```
valor_tecnologias = soma(valor_hora)

custo_missao = valor_tecnologias * horas_estimadas
```

---

## Exemplo

Tecnologias:

JavaScript = 10/h
C# = 25/h

Missão:

4 horas

Resultado:

```
(10 + 25) * 4 = 140
```

---

## Cálculo do Projeto

```
valor_projeto = soma(custos_das_missoes)
```

---

# 15. Descontos do Projeto

O sistema permite registrar descontos.

Tipos:

* percentual
* valor fixo

---

# 16. Sistema de Mensagens / Leads

Captura mensagens enviadas pelo site.

## Funcionalidades

* armazenar mensagens
* transformar lead em cliente
* marcar status de atendimento

---

# 17. Utilitários para Desenvolvedor

Ferramentas rápidas dentro do painel.

Exemplos:

* conversor JSON
* gerador de hash
* base64 encoder
* gerador de regex
* gerador de commit
* gerador de README
* gerador de licença

---

# 18. Documentos Exportáveis em PDF

O sistema permitirá gerar diversos documentos profissionais.

---

# 19. Arquivo de Projeto

Documento técnico contendo:

* dados do cliente
* descrição do projeto
* escopo
* tecnologias
* missões
* prazos
* custo estimado

---

# 20. Proposta Comercial

Documento enviado ao cliente antes da contratação.

Conteúdo:

* apresentação do serviço
* escopo do projeto
* etapas de desenvolvimento
* tecnologias utilizadas
* prazo estimado
* valor total
* condições de pagamento

---

# 21. Ordem de Serviço

Documento formalizando o início do projeto.

Campos:

* número da OS
* cliente
* descrição do serviço
* valor contratado
* prazo

---

# 22. Relatório de Progresso

Documento periódico com:

* tarefas concluídas
* horas trabalhadas
* status do projeto
* próximas etapas

---

# 23. Relatório de Horas Trabalhadas

Contém:

* missão
* tarefas
* horas registradas
* responsável

---

# 24. Relatório Financeiro do Projeto

Contém:

* custo por missão
* tecnologias utilizadas
* valor total
* descontos aplicados
* lucro estimado

---

# 25. Duplicata Mercantil

Documento de cobrança.

Campos:

* número
* cliente
* valor
* data de emissão
* data de vencimento
* descrição do serviço

---

# 26. Recibo de Pagamento

Comprovação de pagamento recebido.

---

# 27. Estrutura do Banco de Dados

Principais entidades:

```
users
clients
leads
technologies
projects
missions
tasks
project_discounts
mission_files
mission_links
portfolio_projects
portfolio_articles
```

---

# 28. ERD (Entity Relationship Diagram)

Estrutura conceitual do banco.

```
CLIENTS
-------
id
name
company
email
phone
city
status
notes


LEADS
-------
id
name
email
phone
message
status
created_at


TECHNOLOGIES
-------
id
name
category
hour_value
description
active


PROJECTS
-------
id
client_id
name
description
start_date
deadline
status
estimated_value
final_value


PROJECT_TECHNOLOGIES
-------
id
project_id
technology_id


MISSIONS
-------
id
project_id
name
description
order
estimated_hours
real_hours
status


MISSION_TECHNOLOGIES
-------
id
mission_id
technology_id


TASKS
-------
id
mission_id
title
description
priority
estimated_time
spent_time
status
due_date


TASK_COMMENTS
-------
id
task_id
user_id
comment
created_at


MISSION_FILES
-------
id
mission_id
file_name
file_path
upload_date


MISSION_LINKS
-------
id
mission_id
title
url
description


PROJECT_DISCOUNTS
-------
id
project_id
type
value
description


PORTFOLIO_PROJECTS
-------
id
title
description
github
demo
published


PORTFOLIO_ARTICLES
-------
id
title
content
published
```

---

# 29. Fluxo do Sistema

Fluxo típico de uso:

```
1 cadastrar tecnologias
2 cadastrar cliente
3 receber lead
4 criar projeto
5 selecionar tecnologias
6 criar missões
7 ajustar tecnologias das missões
8 definir horas
9 visualizar orçamento
10 aplicar descontos
11 gerar proposta
12 executar tarefas
13 registrar horas
14 gerar relatórios
15 gerar documentos financeiros
```

---

# 30. Tecnologias Recomendadas

Backend

* Node.js
* NestJS

Banco de dados

* PostgreSQL

Frontend

* React
* Next.js

Interface

* Tailwind
* Shadcn UI

Kanban

* dnd-kit

PDF

* Puppeteer
* PDFKit

---

# Conclusão

Este sistema oferece uma plataforma completa para:

* gestão de portfólio
* relacionamento com clientes
* gerenciamento de projetos
* controle financeiro
* geração de documentação profissional

Sua estrutura permite futura expansão para um **SaaS de gestão para freelancers e desenvolvedores**.