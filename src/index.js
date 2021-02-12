import data from './modules/data/data';
import router from './modules/router/router';
import './scss/index.scss';

const app = document.createElement('div');
app.classList.add('app');

const container = document.createElement('div');
container.classList.add('container');

router(container, data());

app.append(container);
document.body.prepend(app);
