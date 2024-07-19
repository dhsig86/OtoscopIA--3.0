OtoscopIA 3.0
OtoscopIA é uma aplicação para análise de imagens otoscópicas, desenvolvida para auxiliar no diagnóstico e estudo de casos otológicos. Esta versão, OtoscopIA 3.0, está integrada ao backend disponível no Heroku.

Funcionalidades
Análise de Imagens: Carregue imagens otoscópicas para análise automatizada.
Diagnóstico Assistido por IA: Utilize modelos de aprendizado de máquina treinados para identificar padrões em imagens otoscópicas.
Anotações Interativas: Clique nas estruturas para ver suas anotações e descrições.
Compatibilidade com Mobile e Desktop: A interface é responsiva e funciona bem em dispositivos móveis e desktops.
Tecnologias Utilizadas
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express
Machine Learning: Teachable Machine
Hospedagem: Heroku
Estrutura do Projeto
php
Copiar código
OtoscopIA--3.0/
│
├── public/               # Arquivos estáticos
│   ├── css/              # Estilos CSS
│   ├── images/           # Imagens do projeto
│   ├── js/               # Scripts JavaScript
│   └── index.html        # Página inicial
│
├── src/                  # Código fonte do backend
│   ├── controllers/      # Lógica de controle
│   ├── models/           # Modelos de dados
│   ├── routes/           # Definições de rotas
│   └── app.js            # Arquivo principal do servidor
│
├── .gitignore            # Arquivos e pastas ignorados pelo Git
├── package.json          # Dependências e scripts do npm
├── README.md             # Documentação do projeto
└── Procfile              # Configuração do Heroku
Configuração do Ambiente
Clone o repositório:

sh
Copiar código
git clone https://github.com/dhsig86/OtoscopIA--3.0.git
cd OtoscopIA--3.0
Instale as dependências:

sh
Copiar código
npm install
Configure as variáveis de ambiente:
Crie um arquivo .env na raiz do projeto e adicione suas variáveis de ambiente. Exemplo:

env
Copiar código
PORT=3000
Inicie o servidor:

sh
Copiar código
npm start
O aplicativo estará disponível em http://localhost:3000.

Hospedagem no Heroku
O backend está hospedado no Heroku e pode ser acessado através do seguinte link:
OtoscopIA Backend

Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests. Para grandes mudanças, por favor, abra um issue primeiro para discutir o que você gostaria de mudar.

Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

