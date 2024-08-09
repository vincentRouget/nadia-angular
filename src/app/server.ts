import 'zone.js/node';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppServerModule } from './app.server.module';
import { join } from 'path';
import express from 'express';

// Create an Express application
const app = express();

// Get the port from environment variables or use default value
const port = process.env['PORT'] || '4000';

// Define paths for the application
const distFolder = join(process.cwd(), 'dist/nadia-angular/browser');
const indexHtml = 'index.html'; // 'index.html' is served by the engine

// Set up the Angular Universal engine
app.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
}));
app.set('view engine', 'html');
app.set('views', distFolder);

// Serve static files
app.use(express.static(distFolder, {
    maxAge: '1y'
}));

// All other routes use Angular Universal
app.get('*', (req, res) => {
    res.render(indexHtml, { req });
});

// Start the server
app.listen(port, () => {
    console.log(`Node server listening on http://localhost:${port}`);
});
