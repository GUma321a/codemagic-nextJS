document.addEventListener("DOMContentLoaded", () => {
  //Tabs
    const tabContent = document.querySelectorAll(".tabcontent"),
          tabParent = document.querySelector(".tabheader__items"),
          tabItem = document.querySelectorAll(".tabheader__item");

    function hiddenContent () {
      tabContent.forEach(item => {
        item.style.display = "none";
      })

      tabItem.forEach(item =>{
        item.classList.remove('tabheader__item_active');
      })
    };

    function showContent(i = 0) {
      tabContent[i].style.display = 'block';
      tabItem[i].classList.add("tabheader__item_active");
    };

    hiddenContent();
    showContent();

    tabParent.addEventListener('click', (event) =>{
      const target = event.target;
      
      if(target && target.classList.contains('tabheader__item')){
        tabItem.forEach((item, i) => {
          if(target == item){
            hiddenContent();
            showContent(i);
          };
        });
      }
    })

    //Timer
    const deadline = '2022-03-22';

    function getTimeRemaining(endtime) {
      const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / (1000 / 60) % 60)),
            seconds = Math.floor((t / 1000) % 60);

      return{
        'total' : t,
        'days' : days,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds
      };
    }

    function getZero(num) {
      if(num >= 0 && num < 10){
        return `0${num}`;
      } else {
        return num;
      }
    }

    function setClock(selector, endtime) {
      const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

      updateClock();

            function updateClock() {
              const t = getTimeRemaining(endtime);

              days.innerHTML = getZero(t.days);
              hours.innerHTML = getZero(t.hours);
              minutes.innerHTML = getZero(t.minutes);
              seconds.innerHTML = getZero(t.seconds);

              if(t.total <= 0 ){
                clearInterval(timeInterval);
              }
            }
    }

    setClock('.timer', deadline);


    //Modal
    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modalWindow = document.querySelector('.modal');

    function openModal(){
      modalWindow.classList.add("show");
      modalWindow.classList.remove("hide");
      document.body.style.overflow = "hidden";
      clearInterval(modalTimetId);
    };

    modalTrigger.forEach(btn  =>{
      btn.addEventListener('click', openModal);
    });

    function closeModal(){
      modalWindow.classList.add("hide");
      modalWindow.classList.remove("show");
      document.body.style.overflow = "";
    };


    modalWindow.addEventListener('click', (e) => {
      if(e.target === modalWindow || e.target.getAttribute('data-close') == ""){
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if(e.code === "Escape" && modalWindow.classList.contains('show')){
        closeModal();
      }
    });

    const modalTimetId = setTimeout(openModal, 50000);

    function showModalByScroll() {
      if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1){
        openModal();
        window.removeEventListener('scroll', showModalByScroll)
      }
    };

    window.addEventListener('scroll', showModalByScroll);

    // Меню карточек 

    class MenuCard{
      constructor(src, alt, title, descr, price, parentSelector, ...classes){
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.price = price;
        this.classes = classes;
        this.parent = document.querySelector(parentSelector);
        this.transfer = 30;
        this.changeToUAH();
      }

      changeToUAH(){
        this.price = this.price * this.transfer;
      }

      render() {
        const element = document.createElement('div');
        if(this.classes.length === 0){
          this.element = 'menu__item';
          element.classList.add(this.element);
        } else {
          this.classes.forEach((className) => element.classList.add(className));
        }
        
        element.innerHTML = `
           <img src= ${this.src} alt= ${this.alt}>
           <h3 class="menu__item-subtitle">${this.title}</h3>
           <div class="menu__item-descr">${this.descr}</div>
           <div class="menu__item-divider"></div>
           <div class="menu__item-price">
               <div class="menu__item-cost">Цена:</div>
               <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
           </div>
        `;
        this.parent.append(element);
      }

    }

    new MenuCard(
      "img/tabs/vegy.jpg",
      "vegy",
      'Меню "Фитнес"',
      'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
      9,
      '.menu .container',
    ).render();

    new MenuCard(
      "img/tabs/elite.jpg",
      "elite",
      "Меню “Премиум”",
      "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
      11,
      ".menu .container",
      "menu__item",
      "big"
    ).render();

    new MenuCard(
      "img/tabs/post.jpg",
      "post",
      'Меню "Постное"',
      "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
      13,
      ".menu .container",
      "menu__item",
      "big"
    ).render();

    //Forms

    const forms = document.querySelectorAll('form');

    const message = {
      loading: "img/spinner.svg",
      success: "Спасибо!",
      failure: "Что-то пошло не так...",
    };

    forms.forEach(item =>{
      postData(item);
    })

    function postData(form){
      form.addEventListener('submit', (e) =>{
        e.preventDefault();

        const statusMessage = document.createElement('img');
        statusMessage.src = message.loading;
        statusMessage.style.cssText = `
          display: block;
          margin: 0 auto;
        `;
        form.insertAdjacentElement('afterend', statusMessage);



        const formData = new FormData(form);

        const object = {};

        formData.forEach(function(value,key){
          object[key] = value;
        })


        fetch("server1.php", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(object),
        }).then(data => data.text())
        .then(data => {
          console.log(data);
            showThanksModal(message.success);
            statusMessage.remove();
        }).catch(() => {
          showThanksModal(message.failure);
        }).finally(() => {
            form.reset();
        })
      });
    }

    function showThanksModal(message) {
      const prevModalDialog = document.querySelector('.modal__dialog');

      prevModalDialog.classList.add('hide');
      openModal();

      const thanksModal = document.createElement('div');
      thanksModal.classList.add('modal__dialog');
      thanksModal.innerHTML = `
        <div class="modal__content"> 
          <div data-close class="modal__close">&times;</div>
          <div class="modal__title">${message}</div>
        </div>
      `;

      document.querySelector('.modal').append(thanksModal);
      setTimeout(() =>{
        thanksModal.remove();
        prevModalDialog.classList.add('show');
        prevModalDialog.classList.remove('hide');
        closeModal();
      }, 4000);
    }

    // fetch("https://jsonplaceholder.typicode.com/posts",{
    //   method: 'POST',
    //   body: JSON.stringify({
    //     name: 'Alex',
    //   }),
    //   headers:{
    //     'Content-type': 'application/json'
    //   }
    // })
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
  });