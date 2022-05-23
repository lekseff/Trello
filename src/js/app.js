// TODO: write code here
import Trello from './Trello';

const page = document.querySelector('#trello');
const app = new Trello(page);
app.init();
