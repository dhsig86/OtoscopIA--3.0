const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração do Multer para upload de arquivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// Rota para processar o feedback
app.post('/feedback', upload.single('feedbackImage'), (req, res) => {
  const { correctDiagnosis } = req.body;
  const feedbackImage = req.file;

  if (!correctDiagnosis || !feedbackImage) {
    return res.status(400).send('Diagnóstico correto e imagem são obrigatórios.');
  }

  // Aqui você pode salvar as informações no banco de dados ou realizar outras ações necessárias.
  console.log('Diagnóstico Correto:', correctDiagnosis);
  console.log('Imagem:', feedbackImage);

  res.status(200).send('Feedback recebido com sucesso!');
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
