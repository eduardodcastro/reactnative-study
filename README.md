# Estudo React Native

Realizar a criação de um aplicativo utilizando react native, o objetivo do aplicativo é criar 3 telas.
Tela de Login , Tela de Tarefas , Tela de Responsáveis.

1 - Tela de Login.
• Deve ter um Header
• Deve ter uma Imagem
• O botão e formulário precisa estar perto do footer
Casos de Tests
• Dado que o usuário insira seu nome no formulário, deve habilitar o botão de entrar
• Caso o usuário digite alguma letra maiúscula no formulário não deve habilitar o botão de
entrar.
• Quando ele pressionar o botão para entrar, deve ir para tela de TAREFAS.

2 - Tela de TAREFAS

- O usuário precisar ser a opção de rolagem.
- Cada tarefa precisa apresentar as informações (titulo, concluída ou não, e responsável da
atividade).
- Dado que o usuário pressionou no responsável da atividade, deve ir para tela de Responsável.
- Deve ter a opção de logout.
- Caso o usuário digite o login uma vez e feche o aplicativo sem realizar logout, na próxima vez que
abrir o aplicativo deve abrir na tela de TAREFAS e atualizar automáticamente em busca de novas
TAREFAS.

3 – Tela de Responsável
- Nome
- Email
- Telefone
- Endereço
- Localização do Responsável (pode abrir o google maps ou usar a lib react-native-maps)