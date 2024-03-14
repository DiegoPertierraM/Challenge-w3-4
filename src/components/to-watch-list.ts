import { Component } from './component';

export class List extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <main>
      <section>
        <h2>Películas por ver</h2>
        <ul class="series-list"></ul>
      </section>
      <section class="watched"></section>
    </main>
    `;
  }
}
