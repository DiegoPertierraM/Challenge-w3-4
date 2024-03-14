import { Component } from './component';

export class Card extends Component {
  serie: object;
  constructor(selector: string, serie: object) {
    super(selector);
    this.serie = serie;
    this.render();
  }

  render(): void {
    this.template = this.createTemplate();
    super.render();
    const deleteButton = this.element.querySelector('.delete-btn');
    if (deleteButton) {
      deleteButton.addEventListener('click', () => {
        this.unRender();
      });
    }

    const stars = this.element.querySelector('.stars');
    if (stars) {
      for (let i = 0; i < 5; i++) {
        stars.children[i].addEventListener('click', () => {});
      }
    }
  }

  selectSeriesData = (serie: any) => `
    <li><img src="${serie.poster}" width="150" alt="Imagen de ${serie.name}"></li>
    <li><strong>Id</strong>: ${serie.id}</li>
    <li><strong>Name</strong>: ${serie.name}</li>
    <li><strong>Year</strong>: ${serie.year}</li>
    <li><strong>Watched</strong>: ${serie.watched}</li>
    <li><strong>Score</strong>: ${serie.score}</li>
    <li><strong>Emmies</strong>: ${serie.emmies}</li>
    <div class="stars">
      <img src="img/star-empty.svg" alt="Star" width="30">
      <img src="img/star-empty.svg" alt="Star" width="30">
      <img src="img/star-empty.svg" alt="Star" width="30">
      <img src="img/star-empty.svg" alt="Star" width="30">
      <img src="img/star-empty.svg" alt="Star" width="30">
    </div>
    `;

  createTemplate() {
    const item = this.serie;
    return `
    <div class="card">
      <img src="img/close.svg" class="delete-btn" width="40+" alt="Close icon">
      <ul class="series">
        ${this.selectSeriesData(item)}
      </ul>
    </div>
    `;
  }
}
