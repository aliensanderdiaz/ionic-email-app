// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CorreosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CorreosProvider {

  lista = [
    {
      nombre: 'Carlos Ortega',
      direccion: 'carlos@ibm.com',
      asunto: 'Bienvenido!',
      mensaje: "Bienvenido al curso de Ionic 2 en Español!! Praesent in leo ac erat pulvinar molestie a quis ligula. Curabitur ac sollicitudin erat, vel suscipit turpis. Sed accumsan nisi id felis pretium porttitor. Nulla suscipit gravida dolor vel condimentum.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent suscipit dolor turpis, sit amet mollis sapien suscipit a. Duis bibendum sodales ligula quis hendrerit. <br />Ut quis augue mi. Donec vulputate dictum metus convallis tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis venenatis tortor et volutpat. Morbi quis neque tellus. <br /><br />Praesent turpis sapien, tincidunt non est non, luctus ornare sem. Donec tincidunt lacus sit amet turpis porta volutpat.",
      fecha: 'Lunes, Febrero 6 2017'
    },
    {
      nombre: 'Felipe Flores',
      direccion: 'fflores@google.com',
      asunto: 'Hola!',
      mensaje: 'Sed accumsan nisi id felis pretium porttitor. Nulla suscipit gravida dolor vel condimentum.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent suscipit dolor turpis, sit amet mollis sapien suscipit a. Duis bibendum sodales ligula quis hendrerit',
      fecha: 'Lunes, Enero 16 2017'
    },
    {
      nombre: 'Andres Alvarez',
      direccion: 'andres.alvarez@twitter.com',
      asunto: 'Fiesta!',
      mensaje: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac dapibus odio, sit amet faucibus tellus. <br /> Donec at condimentum sapien. <br /><br />Aliquam consectetur mi non dolor porta faucibus. Aliquam a est non quam finibus dictum egestas in purus. Donec id diam neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas interdum lectus ac ex consectetur placerat. <br />Phasellus vitae malesuada est, eget iaculis ipsum. Fusce elit magna, varius nec sem eu, convallis rutrum mi. <br />Donec ligula metus, vulputate porttitor est maximus, tempus consectetur est. <br />Praesent rutrum est quis pellentesque placerat. ',
      fecha: 'Lunes, Enero 15 2017'
    },
    {
      nombre: 'José Jaramillo',
      direccion: 'jjaramillo@apple.com',
      asunto: 'Nuevo curso de programación',
      mensaje: 'Revisa la página www.aprende-facilmente.com regularmente',
      fecha: 'Lunes, Enero 8 2017'
    },
    {
      nombre: 'Roberto Rodriguez',
      direccion: 'roberto@rodriguez.com',
      asunto: 'Feliz Año!!!!',
      mensaje: 'Espero que la hayas pasado bien en tus vacaciones y te deseamos un muy buen 2017!',
      fecha: 'Lunes, Enero 2 2017'
    }
  ];

  enviados = [];

  constructor() {
    console.log('Hello CorreosProvider Provider');
  }

}
