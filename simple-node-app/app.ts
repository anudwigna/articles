import express, { Application } from 'express';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.setConfig();
  }

  private async setConfig() {

  }

}

export default new App().app;