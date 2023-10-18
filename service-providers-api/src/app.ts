import express from 'express';
import mongoose from 'mongoose';
import config from './config/app.config';
import Provider from './models/provider.model';
import { createProvider } from './SPAPI/provider.controller';
import { createServiceArea, getServiceAreasByLatLng } from './SPAPI/serviceArea.controller';


const app = express();

// Middleware de log (já discutido anteriormente)

app.use(express.json());

// Conexão com o banco de dados
mongoose.connect('mongodb://localhost:27017/SPAPI', {
  
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro de conexão ao MongoDB:'));
db.once('open', () => {
  console.log('Conexão com o MongoDB estabelecida.');
});

// Use o controlador para lidar com a rota POST
app.post('/providers', createProvider);
app.post('/service-areas', createServiceArea);
app.get('/service-areas', getServiceAreasByLatLng);

app.listen(config.port, () => {
  console.log(`Servidor está ouvindo na porta ${config.port}`);
});
