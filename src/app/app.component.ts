import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currency = "$";

  form = this.fb.group ({
    order: ["", Validators.required],
    name: ["", Validators.required],
    phone: ["", Validators.required],
  });

  productsData = [
    {
      image: "burger.png",
      title: "Бургер Чеддер & Бекон",
      text: "Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус",
      price: 8,
      basePrice: 8,
      grams: 360
    },
    
    {
      image: "bbq_burger.png",
      title: "BBQ с Беконом и Курицей",
      text: "Булочка бриошь с кунжутом, куриная котлета, сыр чеддер, томат, огурец маринованный, лук маринованный, салат Ромен, бекон, соус BBQ",
      price: 7,
      basePrice: 7,
      grams: 390
    },
    
    {
      image: "dbl_beef_burger.png",
      title: "Дабл Биф Бургер",
      text: "Две говяжьи котлеты, сыр чеддер, салат романо, маринованные огурцы, свежий томат, бекон, красный лук, соус бургер, горчица",
      price: 10,
      basePrice: 10,
      grams: 420
    },
    
    {
      image: "bavar_burger.png",
      title: "Баварский Бургер",
      text: "Булочка для бургера, говяжья котлета, красный лук, сыр, охотничья колбаска, соус барбекю, соус сырный, салат айсберг",
      price: 7,
      basePrice: 7,
      grams: 220
    },
    {
      image: "cheese_burger.png",
      title: "Бекон Чизбургер",
      text: "Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, сыр, сырный соус, кетчуп, зелень",
      price: 8,
      basePrice: 8,
      grams: 220
    },
    {
      image: "indi_burger.png",
      title: "Индиана Бургер",
      text: "Булочка для бургера, котлета куриная, грудинка, яйцо, огурец маринованный, криспи лук, кетчуп, соус сырный, горчица, зелень",
      price: 9,
      basePrice: 9,
      grams: 320
    },
    {
      image: "7.png",
      title: "Вегги Бургер",
      text: "Булочка для бургера, вегетарианская котлета, красный лук, сыр, свежий томат, соус барбекю, соус сырный, салат айсберг",
      price: 8,
      basePrice: 8,
      grams: 280
    },
    {
      image: "8.png",
      title: "Плаксивый Джо",
      text: "Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, красный лук, сыр, перец халапеньо, кетчуп, зелень",
      price: 7,
      basePrice: 7,
      grams: 380
    },
    {
      image: "9.png",
      title: "Двойной Чиз Бургер",
      text: "Булочка для бургера, две говяжьи котлеты, двойной сыр чеддар, огурец маринованный, криспи лук, кетчуп, соус сырный, горчица, зелень",
      price: 11,
      basePrice: 11,
      grams: 400
    },
    {
      image: "10.png",
      title: "Фрешбургер",
      text: "Булочка для бургера, говяжья котлета, бекон, сыр чеддар, яйцо, салями, соус барбекю, соус сырный, салат айсберг, свежий томат",
      price: 9,
      basePrice: 9,
      grams: 300
    },
    {
      image: "11.png",
      title: "Цуккини Бургер",
      text: "Булочка для бургера, вегетарианская котлета из нута, цуккини на гриле, помидор, огурец маринованный, сыр, горчичный соус, кетчуп, зелень",
      price: 8,
      basePrice: 8,
      grams: 320
    },
    {
      image: "12.png",
      title: "Двойной Бургер Чеддар",
      text: "Булочка для бургера, котлета говяжья, грудинка, красный лук, огурец маринованный, томат, кетчуп, двойной сыр чеддар, горчица, зелень",
      price: 9,
      basePrice: 9,
      grams: 360
    },


  ];

  constructor(private fb: FormBuilder) {

  }

  scrollTo(target: HTMLElement, burger?: any) {
    target.scrollIntoView({behavior: "smooth"});
    if (burger) {
      this.form.patchValue({order: burger.title + ' (' + burger.price + ' ' + this.currency + ')'});
    }
  }

  confirmOrder() {
    if(this.form.valid) {
      alert("Спасибо за заказ!");
      this.form.reset();

    }
  }

  changeCurrency() {
    let newCurrency = "$";
    let coefficient = 1;

    if (this.currency === "$") {
      newCurrency = "₽";
      coefficient = 100;
  } else if (this.currency === "₽") {
      newCurrency = "BYN";
      coefficient = 6;
  } else if (this.currency === "BYN") {
  newCurrency = "€";
  coefficient = 110;
  } else if (this.currency === "€") {
      newCurrency = "¥";
      coefficient = 6.9;
  }
  this.currency = newCurrency;

  this.productsData.forEach((item: any) => {
    item.price = +(item.basePrice * coefficient).toFixed(1);
  })
  }
}