import '@babel/polyfill';
import createLoading from 'dva-loading';
import dva from 'dva';
import createHashHistory from 'history/createHashHistory';

const history = createHashHistory({ queryKey: true });

const app = dva({
  onError(err) {
    console.log(err);
  },
  // history: createHistory(),
  history,
});

app.use(createLoading());
app.router(require('./router'));

app.start('#root');
