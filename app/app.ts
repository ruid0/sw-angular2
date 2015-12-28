import {Component} from 'angular2/core';
import {Films} from './films/films.component'

@Component({
  selector: 'app',
  directives: [Films],
  template: `<h1>Star Wars</h1>
    <films></films>
  `
})
export class App {}
