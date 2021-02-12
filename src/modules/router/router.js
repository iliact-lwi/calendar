import calendar from '../../pages/calendar/calendar';
import newEvent from '../../pages/newEvent/newEvent';

class Router {
  constructor(name, routes) {
    this.name = name;
    this.routes = routes;
  }
}

const routerInstance = new Router('routerInstance', [
  { path: '/', value: calendar },
  { path: '/new-event', value: newEvent },
]);

function core(rootElement, data) {
  const currentPath = window.location.pathname;

  if (currentPath === '/') {
    rootElement.append(calendar(data));
  } else {
    const route = routerInstance.routes.find(
      (item) => item.path === currentPath
    );

    if (route) {
      rootElement.append(route.value(data));
    } else {
      rootElement.append('Page not found!');
    }
  }

  rootElement.addEventListener('click', linkHandler, false);

  function linkHandler(event) {
    const { target } = event;
    const { link } = target.dataset;

    if (link) {
      const route = routerInstance.routes.find((item) => item.path === link);

      if (route) {
        window.history.pushState({}, '', route.path);
        const prevValue = rootElement.firstChild;
        prevValue.remove();
        rootElement.append(route.value(data));
      } else {
        window.history.pushState({}, '', 'error');
        const prevValue = rootElement.firstChild;
        prevValue.remove();
        rootElement.append('Page not found!');
      }
    }
  }
}

export default core;
