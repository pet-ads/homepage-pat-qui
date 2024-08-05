## Instruções para Alterar Arquivos JSON no GitHub

### 1. Criar um Fork do Repositório

- Navegue até o repositório original no GitHub e clique no botão **"Fork"** no canto superior direito para criar uma cópia do repositório na própria conta do GitHub.

### 2. Criar uma Nova Branch

- No repositório forkado, devemos criar uma nova branch para as modificações. Isso pode ser feito clicando no menu suspenso de branches no canto superior esquerdo do repositório e selecionando **"Create new branch"**.
- Nomeie a branch de acordo com as mudanças que serão feitas, como `update-json-values`.

### 3. Editar os Arquivos JSON

- Navegue até a pasta `public/data` dentro do repositório forkado e localize os arquivos JSON que precisam ser alterados.
- Clique no botão **"Edit"** (ícone de lápis) ao lado do arquivo JSON que deseja modificar.

### 4. Fazendo Modificações

- No editor de arquivos, faça as alterações necessárias nos valores das chaves do JSON.

    Antes:

``json     "titulo": "Processo Seletivo"      ``


    Depois:

``json      "titulo": "Novo Processo Seletivo"      ``

### 5. Commit das Alterações

- Após fazer as modificações, desça até a seção **"Commit changes"**.
- Adicione uma mensagem descritiva para o commit, como **"Atualiza valores das chaves no arquivo JSON"**. Os projetos seguem a notação de Conventional Commits, que de como simples segue a estrutura: `<tipo>(escopo): <descrição>. Exemplo: chore: Atualizar dados dos alunos. `
- Selecione a nova branch (por exemplo, `update-json-values`) como destino do commit.
- Clique no botão **"Commit changes"** para salvar as alterações.

### 6. Criar um Pull Request

- Depois de confirmar as alterações, deve-se criar um pull request para solicitar que as mudanças sejam integradas ao repositório original.
- Navegue até a página de Pull Requests do repositório forkado e clique no botão **"New pull request"**.
- Selecione a branch com as mudanças (por exemplo, `update-json-values`) e clique em **"Create pull request"**.
- Adicione uma descrição e clique em **"Create pull request"** novamente para finalizar.

### 7. Revisar e Mergear o Pull Request

- A equipe responsável pelo repositório original pode revisar o pull request e, se aprovado, mesclar as alterações na branch principal do repositório original.
