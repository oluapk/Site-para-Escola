# Projeto 4º B — site da Escola Arthur Da Silva Bernardes Presidente

**Unidade:** Cerquilho, São Paulo  
**Endereço informado:** Av. Pres. Washington Luíz, 478  
**Entrega indicada em aula:** 22/11  
**Apresentação indicada em aula:** 29/11

## 1. Levantamento de requisitos

### Objetivo

Criar um protótipo de portal escolar em formato de painel, inspirado na
organização da Sala do Futuro, para reunir atalhos, comunicados, agenda e
informações da Escola Arthur Da Silva Bernardes Presidente para estudantes e
famílias.

### Requisitos funcionais

- **RF01 — Apresentação:** mostrar o nome da Escola Arthur Da Silva Bernardes
  Presidente e sua localização em Cerquilho, SP.
- **RF02 — Comunicados:** reservar um mural para avisos oficiais, sem publicar
  informações que não tenham sido confirmadas pela escola.
- **RF03 — Acesso do estudante:** oferecer um link direto para a Sala do Futuro
  oficial, onde estudantes e responsáveis podem consultar boletim, frequência,
  tarefas, agenda, Materiais Digitais, Tarefa SP, Provas e Redação Paulista,
  conforme os serviços disponíveis para o perfil escolar.
- **RF04 — Informações da escola:** apresentar fotos e informações gerais sobre
  a unidade e sua comunidade.
- **RF05 — Contato e serviços:** indicar como chegar aos canais oficiais da
  cidade e da Sala do Futuro; exibir os dados de contato da escola quando forem
  confirmados.
- **RF06 — Navegação:** apresentar Início, Comunicados, Vida escolar, Agenda,
  Plataformas de aprendizagem e Conheça a escola como abas separadas no menu
  lateral.
- **RF07 — Painel inicial:** reunir em uma tela de início os atalhos mais usados,
  comunicados e agenda escolar.
- **RF08 — Menu lateral:** organizar o acesso às áreas do portal em abas e
  funcionar também em telas pequenas.

### Requisitos não funcionais

- **RNF01 — Responsividade:** adaptar o painel à orientação e ao tamanho da tela:
  no computador, manter menu lateral e conteúdo em colunas; no celular em
  paisagem, usar layout compacto e cartões lado a lado quando houver espaço;
  em telas estreitas ou em retrato, empilhar o conteúdo e abrir o menu lateral
  pelo botão.
- **RNF02 — Acessibilidade:** ter navegação por teclado, textos legíveis,
  estrutura de títulos e descrição nas imagens.
- **RNF03 — Segurança e privacidade:** não pedir, guardar ou exibir senhas,
  boletins ou dados pessoais. O acesso a informações do estudante deve ocorrer
  somente no portal oficial.
- **RNF04 — Confiabilidade:** não inventar horários, endereço, telefone,
  calendário ou comunicados; confirmar esses dados com a escola antes de
  publicá-los.
- **RNF05 — Facilidade de uso:** usar linguagem clara e destacar os acessos mais
  importantes.
- **RNF06 — Transparência:** identificar a página como protótipo até ser aprovada
  pela direção e pela equipe escolar.

### Referências consultadas

- [Sala do Futuro Aluno — Secretaria da Educação do Estado de São Paulo](https://saladofuturo.educacao.sp.gov.br/):
  referência para acesso por perfil e recursos de acompanhamento escolar. A
  página informa acesso a boletim, frequência, tarefas, agenda e materiais
  educativos.
- [Prefeitura Municipal de Cerquilho](https://www.cerquilho.sp.gov.br/):
  referência local para informações e serviços municipais.

O portal atual é um protótipo independente, inspirado na estrutura de painel da
Sala do Futuro, mas não é uma cópia nem é integrado a ela. Os links levam ao
portal oficial da Secretaria da Educação. A versão demonstrativa não coleta
senhas nem mostra dados pessoais, notas, presença ou mensagens de alunos.
Comunicados, agenda, telefone, e-mail, horários e outros dados da unidade
precisam ser confirmados e aprovados pela direção antes de uma eventual
publicação oficial. Endereço informado para o protótipo: Av. Pres. Washington
Luíz, 478, Cerquilho, SP.

## Otimização de desempenho

- Removida a dependência de fontes externas do Google Fonts, usando fontes do
  sistema para evitar requisições extras.
- Criadas versões menores das fotos e configurado `srcset` para o navegador
  escolher a resolução adequada ao tamanho da tela. No celular, a foto inicial
  usa cerca de 47 KB, em vez de aproximadamente 202 KB.
- Mantido carregamento sob demanda para fotos fora da tela e prioridade alta
  para a imagem inicial do portal.

## 2. Esboço inicial do site

### Computador — painel do estudante

```text
+------------------+-----------------------------------------------------+
| AB  ESCOLA       | Portal da Escola             [Acessar Sala Futuro] |
| ARTHUR BERNARDES +-----------------------------------------------------+
| MENU PRINCIPAL   | Protótipo demonstrativo — dados a validar            |
| Início           | Olá, estudante!                  Escola · Cerquilho   |
| Comunicados      | Foto da escola                                       |
| Vida escolar     | Boas-vindas e acesso ao portal oficial               |
| Agenda           |                                                     |
| Aprendizagem     | Ao selecionar outra opção do menu, somente a aba     |
| Conheça a escola | correspondente é exibida.                            |
+------------------+-----------------------------------------------------+
```

### Celular

```text
+-------------------------------+
| ☰  Portal da Escola    [Acessar] |
+-------------------------------+
| Olá, estudante!               |
| Escola Arthur Da Silva Bernardes Presidente |
+-------------------------------+
| Conteúdo da aba selecionada   |
| O menu lateral abre ao tocar ☰|
+-------------------------------+
```

Comunicados, Vida escolar, Agenda, Plataformas de aprendizagem e Conheça a
escola são abas independentes: ao selecionar uma opção no menu, as demais
seções ficam ocultas.

## 3. Kanban inicial

| A fazer | Em andamento | Concluído |
|---|---|---|
| Validar com a direção a estrutura, os textos e os serviços que poderão aparecer no portal. | Revisar o protótipo com estudantes, responsáveis e equipe escolar. | Pesquisar a referência Sala do Futuro e o portal da Prefeitura de Cerquilho. |
| Confirmar com a escola telefone, e-mail, horários e etapas de ensino antes de publicar. | Reunir sugestões para a apresentação do projeto. | Levantar requisitos funcionais e não funcionais. |
| Conferir os dados oficiais antes da apresentação. |  | Criar o esboço inicial para computador e celular. |
|  |  | Montar o protótipo do portal em painel com menu lateral, atalhos, mural, agenda, fotos e acesso externo à Sala do Futuro. |
