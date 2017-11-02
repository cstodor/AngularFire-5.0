import 'zone.js/dist/zone-node';

import * as functions from 'firebase-functions';
import * as express from 'express';
import { renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import { environment } from "../src/environments/environment";
enableProdMode();
import * as fs from 'fs';
import * as path from 'path';
import * as admin from 'firebase-admin';

// Firebase Admin SDK
const serviceAccountPath: any = 'a4test-d6003-firebase-adminsdk-dtrz9-a3d3d194c5.json';
admin.initializeApp({
    credential: admin.credential.cert(path.join(__dirname, serviceAccountPath)),
    databaseURL: environment.firebase.databaseURL
});

const app = express(), router = express.Router();
const PORT = 5000;
const PUBLIC_DIR = 'dist';
const PUBLIC_SERVER_DIR = 'dist-server';
const CACHE_CONTROL_VALUE = 'public, max-age=600, s-maxage=1200';
const document = fs.readFileSync(path.join(__dirname, PUBLIC_DIR, 'index.html'), 'utf8');
const factory = require(path.join(__dirname, PUBLIC_SERVER_DIR, 'main.bundle'));
const AppServerModuleNgFactory = factory.AppServerModuleNgFactory;

app.use(express.static(path.join(__dirname, PUBLIC_DIR)));
app.use((req, res, next) => {
    res.set('Cache-Control', CACHE_CONTROL_VALUE);
    next();
});

const process = (req: express.Request, res: express.Response) => {
    const url: string = req.path;
    console.warn(`Request with url = ${url}`);
    let ref: admin.database.Reference;
    const id: string = req.params.id;
    const process_with_data = (dataValue: any) => {
        renderModuleFactory(AppServerModuleNgFactory, {
            document, url, extraProviders: [
                { provide: 'firebase-admin', useValue: admin },
                { provide: 'prefetch-data', useValue: dataValue }
            ]
        })
            .then(html => {
                console.warn(`return html with length = ${html.length}`);
                res.send(html);
            });
    };
};

export let trigger = functions.https.onRequest(app);
