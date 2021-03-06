import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-five',
  template: `
    <div class="list">
      <div class="container">

        <div class="more__info">

          <div class="text__header">Main heading</div> 
          <div class="mi__text__first">Идейные соображения высшего порядка, а также сложившаяся структура организации позволяет оценить значение новых предложений. Равным образом рамки и место обучения кадров представляет собой интересный эксперимент проверки существенных финансовых и административных условий. </div>

          <div class="mi__text__second">Разнообразный и богатый опыт постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации систем массового участия. С другой стороны рамки и место обучения кадров представляет собой интересный эксперимент проверки соответствующий условий активизации.</div>
        </div>

        <div class="first__block">

          <div class="fb__text">

            <div class="text__inner__first">Разнообразный и богатый опыт постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации систем массового участия. С другой стороны рамки и место обучения кадров представляет собой интересный эксперимент проверки соответствующий условий активизации.</div>

            <div class="text__inner__second">Задача организации, в особенности же укрепление и развитие структуры играет важную роль в формировании модели развития. Реализация намеченных плановых заданий способствует подготовки и реализации системы обучения кадров. Задача организации, в особенности же укрепление и развитие структуры играет важную роль в формировании модели развития. </div>

          </div>

          <div class="fb__img"></div>
        </div>

    </div>
  `,
  styleUrls: ['./list-five.component.scss']
})
export class ListFiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
