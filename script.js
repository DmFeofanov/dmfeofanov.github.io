

javascript
Document.addEventListener('DOMContentLoaded', function() {
    // Прелоадер
    Const preloader = document.querySelector('.preloader');
    
    Window.addEventListener('load', function() {
        setTimeout(function() {
            preloader.style.opacity = '0';
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 500);
        }, 1000);
    });

    // Меню для мобильных устройств
    Const hamburger = document.querySelector('.hamburger');
    Const navList = document.querySelector('.nav-list');
    
    Hamburger.addEventListener('click', function() {
        This.classList.toggle('active');
        navList.classList.toggle('active');
    });

    // Закрытие меню при клике на ссылку
    Const navLinks = document.querySelectorAll('.nav-list a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navList.classList.remove('active');
        });
    });

    // Плавная прокрутка
    Document.querySelectorAll('a[href^=»#»]').forEach(anchor => {
        Anchor.addEventListener('click', function€ {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop – 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Фиксация шапки при скролле
    Const header = document.getElementById('header');
    
    Window.addEventListener('scroll', function() {
        If (window.scrollY > 100) {
            Header.classList.add('scrolled');
        } else {
            Header.classList.remove('scrolled');
        }
    });

    // Кнопка «Наверх»
    Const backToTop = document.querySelector('.back-to-top');
    
    Window.addEventListener('scroll', function() {
        If (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });

    // Анимация чисел в статистике
    Const statNumbers = document.querySelectorAll('.stat-number');
    
    Function animateNumbers() {
        statNumbers.forEach(number => {
            const target = +number.getAttribute('data-count');
            const count = +number.innerText;
            const increment = target / 50;
            
            if (count < target) {
                number.innerText = Math.ceil(count + increment);
                setTimeout(animateNumbers, 30);
            } else {
                Number.innerText = target;
            }
        });
    }
    
    // Запуск анимации при попадании в зону видимости
    Const statsSection = document.querySelector('.hero-stats');
    
    Const observer = new IntersectionObserver((entries) => {
        Entries.forEach(entry => {
            If (entry.isIntersecting) {
                animateNumbers();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    Observer.observe(statsSection);

    // Фильтрация портфолио
    Const filterBtns = document.querySelectorAll('.filter-btn');
    Const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Удаляем активный класс у всех кнопок
            filterBtns.forEach(btn => btn.classList.remove('active'));
            // Добавляем активный класс текущей кнопке
            This.classList.add('active');
            
            Const filter = this.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    Item.style.display = 'none';
                }
            });
        });
    });

    // Анимация печатающегося текста
    Const typedTextSpan = document.querySelector('.typed-text');
    Const textArray = [«QA Engineer», «Тестировщик», «Автоматизатор»];
    Const typingDelay = 100;
    Const erasingDelay = 50;
    Const newTextDelay = 1500;
    Let textArrayIndex = 0;
    Let charIndex = 0;
    
    Function type() {
        If (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }
    
    Function erase() {
        If (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 500);
        }
    }
    
    // Запуск анимации после загрузки страницы
    setTimeout(type, 1000);

    // Валидация формы
    Const contactForm = document.getElementById('contactForm');
    
    If (contactForm) {
        contactForm.addEventListener('submit', function€ {
            e.preventDefault();
            
            // Простая валидация
            Const name = this.querySelector('input[type=»text»]');
            Const email = this.querySelector('input[type=»email»]');
            Const message = this.querySelector('textarea');
            
            If (name.value.trim() === '') {
                Alert('Пожалуйста, введите ваше имя');
                Name.focus();
                Return;
            }
            
            If (email.value.trim() === '' || !email.value.includes('@')) {
                Alert('Пожалуйста, введите корректный email');
                Email.focus();
                Return;
            }
            
            If (message.value.trim() === '') {
                Alert('Пожалуйста, введите ваше сообщение');
                Message.focus();
                Return;
            }
            
            // Здесь можно добавить AJAX отправку формы
            Alert('Сообщение отправлено! Спасибо за ваше обращение.');
            This.reset();
        });
    }

    // Анимация появления элементов при скролле
    Const sections = document.querySelectorAll('section');
    
    Function checkScroll() {
        Sections.forEach(section => {
            Const sectionTop = section.getBoundingClientRect().top;
            Const windowHeight = window.innerHeight;
            
            If (sectionTop < windowHeight – 100) {
                Section.style.opacity = '1';
                Section.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Инициализация анимации
    Sections.forEach(section => {
        Section.style.opacity = '0';
        Section.style.transform = 'translateY(50px)';
        Section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    Window.addEventListener('scroll', checkScroll);
    Window.addEventListener('load', checkScroll);
});

