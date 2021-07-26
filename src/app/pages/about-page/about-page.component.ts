import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css'],
})
export class AboutPageComponent implements OnInit {
  intro =
    'Le DEEADCI (Département Enfants de L’Eglise Assemblées de Dieu de Côte d’Ivoire) , encore appelé ‘’ Ecole du dimanche’’ ou ’’ Ecodim’’ à été crée en Côte d’Ivoire au début des années 1980. C’est le département au sein de l’église Assemblées de Dieu dédié à l’encadrement spirituel des enfants de 03 à 18 ans . Il est subdivisé en 5 classes pour répondre aux besoins psycho-éducatif et spirituels des enfants mais également à leur durée d’attention au cours d’une leçon.';

  classes = [
    {
      name: 'La classe des tout–petits',
      image: 'assets/images/classes/les-tout-petits.jpg',
      info: 'La classe des tout –petits (3-5 ans) dirigée par les monitrices Kassi  Marie Olga et la monitrice Tiécédé Sylvie accompagnées de la monitrice N’goran Gémima.',
    },
    {
      name: 'La classe des petits',
      image: 'assets/images/classes/les-petits.jpg',
      info: 'La classe des petits (6-8 ans) dirigée par les monitrices Kouassi Charlotte et N’goran Esther.',
    },
    {
      name: 'La classe des Moyens',
      image: 'assets/images/classes/les-moyens.jpg',
      info: 'La classe des moyens (9-11 ans) dirigée par les monitrices Kouassi Loukou Rose et Fahé Ange.',
    },
    {
      name: 'La classe des Juniors',
      image: 'assets/images/classes/les-juniors.jpg',
      info: 'La classe  des juniors (12-14 ans) dirigée par les monitrices  Kouassi  Ahou Jacky , Zan –Bi Adjara et Takoré Augustine.',
    },
    {
      name: 'La classe des Adolescents',
      image: 'assets/images/classes/les-ados.jpg',
      info: 'La classe des adolescents (15- 18ans) dirigée par les moniteurs  Bindé Blaise et Yodé  Armel.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
