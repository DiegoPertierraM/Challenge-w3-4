/* eslint-disable no-new */
import './styles.css';
import { Header } from './components/header';
import { series } from './model/series';
import { List } from './components/to-watch-list';
import { List2 } from './components/watched-list';
import { Card } from './components/card';

const title = 'Series';

new Header('body', title);
new List('body');
series.forEach((serie) => {
  new Card('.series-list', serie);
});
new List2('.watched');
series.forEach((serie) => {
  new Card('.watched-list', serie);
});
