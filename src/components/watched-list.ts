import { Component } from './component';

export class List2 extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
      <h2>Películas vistas</h2>
      <ul class="series-list watched-list"></ul>
    `;
  }
}
