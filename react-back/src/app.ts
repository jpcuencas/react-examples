import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config/config';
import videosRoutes from './routes/videos.routes';

const app = express();
app.set('port', config.PORT);

// MIDDLEWARES //
//loggers http
app.use(morgan(config.enviroment));
// cruzar servers
app.use(cors());
// parse json
app.use(express.json());
// enviar datos codificacion en uri
app.use(express.urlencoded({extended: false}));

// routes
app.use(videosRoutes );


export default app;

