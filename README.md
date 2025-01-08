### Aviso
A pasta 'DIST' está contida no repositório devido a necessidade de fazer o deploy para uma instância EC2 que não possuia memória suficiente para fazer o build por si só.

# Portifólio Git

### Página Inicial
1. Pesquisa de usuários
    * Ao digitar um nome de usuário será mostrado recomendações de portifólios armazenados no localStorage para serem vizualizados.
    * Ao clicar na recomendação a barra de pesquisa se preencherá automáticamente com a recomendação escolhida.
    * Caso o valor digitado não corresponda a nenhum usuário cadastrado no localStorage aparecerá uma mensagem de erro.

2. Login com Github
    * Ao se logar com o Github você será direcionado a página do seu portifólio.

### Página de portifólio
1. Header
    1. Botões de navegação
        * Você pode mover a página apenas clicando na seção que você deseja ler.

    2. Botão Entrar
        * Caso você esteja apenas vizualizando o portifólio de outro usuário sem estar logado e clicar em entrar você fará login com Github.
    
    3. Botão Sair
        * Caso você esteja logado ao clicar nesse botão sua sessão se encerrará.
    
2. Seção Info
    * Na sessão Info você terá informações vindas da API do GitHhub, com exeção do nome em 'Hello, I'm ____' e do link para o Linkedin que são definidos pelo dono do perfil.

3. Minha História
    * Conta a história do dono do perfil escolhida e escrita pelo mesmo.

4. Experiências
    * Mostra experiências escolhidas pelo dono do perfil, contendo informações como Título, Tecnologias utilizadas, descrição e pode conter ou não o Link de um repositório.

5. Contato
    * Mostra um contato extra definido pelo dono do perfil.

6. Footer
    * Mostra as redes sociais do dono do perfil.

7. Modo de Edição
    * Caso você esteja visualizando seu perfil com a sessão ativa você poderá editar as informações clicando no ícone de edição.

    * Caso você precise adicionar um novo card ou editar as informações de algum, você deverá se atentar algumas regras:
        1. Título, Descrição, Tecnologias e Tempo de atuação são campos obrigatórios.
        2. Caso a experiência tenha um repositório e você queira remove-lo, basta deixar o campo em branco.
