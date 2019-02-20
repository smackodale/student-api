import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Routes } from './routes/routes';
import { connect, ConnectionOptions, set } from 'mongoose';
import { MongoError } from 'mongodb';

class App {

    public app: express.Application;
    public routes: Routes = new Routes();
    public mongoUrl: string = 'mongodb://localhost:27017/StudentData'

    constructor() {
        this.app = express();
        this.config();
        this.routes.routes(this.app);
        this.mongoDbSetup();
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private mongoDbSetup(): void {
        const options: ConnectionOptions = {
            useNewUrlParser: true
        };
        set('debug', true);
        connect(this.mongoUrl, options, (err: MongoError) => {
            if (!!err) {
                console.log(err.message);
            } else {
                console.log("Succesfully Connected!")
            }
        });
    }

}

export default new App().app;