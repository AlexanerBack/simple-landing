// Translations object
const translations = {
    ru: {
        nav: {
            home: "Главная",
            about: "О нас",
            services: "Услуги",
            pricing: "Расценки",
            process: "Процесс",
            contact: "Связаться"
        },
        hero: {
            title: "Создаём цифровые решения,",
            titleHighlight: "которые работают",
            subtitle: "Мы — команда профессионалов, превращающая ваши идеи в современные веб-приложения и дизайны, которые привлекают клиентов и увеличивают продажи.",
            button: "Начать проект",
            stats: {
                projects: "Проектов",
                years: "Лет опыта",
                clients: "Довольных клиентов"
            }
        },
        about: {
            tag: "О нас",
            title: "Почему выбирают нас",
            cards: {
                focus: {
                    title: "Фокус на результат",
                    text: "Каждый проект мы создаём с учётом ваших бизнес-целей. Мы не просто делаем красивые сайты — мы создаём инструменты для роста вашего бизнеса."
                },
                tech: {
                    title: "Современные технологии",
                    text: "Используем актуальный стек технологий и лучшие практики разработки. Ваш проект будет быстрым, безопасным и масштабируемым."
                },
                transparent: {
                    title: "Прозрачное сотрудничество",
                    text: "Вы всегда в курсе процесса разработки. Регулярные отчёты, открытая коммуникация и гибкий подход к изменениям."
                },
                fast: {
                    title: "Быстрая разработка",
                    text: "Оптимизированные процессы позволяют нам создавать качественные решения в сжатые сроки без потери качества."
                }
            }
        },
        services: {
            tag: "Услуги",
            title: "Что мы делаем",
            cards: {
                web: {
                    title: "Веб-разработка",
                    text: "Современные веб-сайты и веб-приложения на Laravel, React, Vue.js. От лендингов до сложных корпоративных систем с мощным backend на Laravel.",
                    features: ["Laravel Backend разработка", "Frontend на React/Vue.js", "Full-stack решения"]
                },
                design: {
                    title: "UI/UX Дизайн",
                    text: "Создаём интуитивные и красивые интерфейсы, которые нравятся пользователям и конвертируют посетителей в клиентов.",
                    features: ["Дизайн интерфейсов", "Прототипирование", "Дизайн-системы"]
                },
                mobile: {
                    title: "Мобильные приложения",
                    text: "Разработка нативных и кроссплатформенных мобильных приложений для iOS и Android.",
                    features: ["iOS разработка", "Android разработка", "React Native"]
                },
                support: {
                    title: "Поддержка и развитие",
                    text: "Не бросаем проекты после запуска. Обеспечиваем техническую поддержку, обновления и развитие вашего продукта.",
                    features: ["Техническая поддержка", "Обновления и улучшения", "Мониторинг и аналитика"]
                }
            }
        },
        pricing: {
            tag: "Расценки",
            title: "Стоимость разработки",
            subtitle: "Прозрачные цены на разработку. Каждый проект оценивается индивидуально, ниже указаны ориентировочные диапазоны.",
            note: "Все цены указаны ориентировочно. Точная стоимость рассчитывается после обсуждения требований к проекту.",
            button: "Заказать",
            popular: "Популярно",
            period: "за проект",
            cards: {
                simple: {
                    title: "Простые лендинги и сайты визитки",
                    subtitle: "Простые одностраничные сайты",
                    features: ["Адаптивный дизайн", "1 страница", "Форма обратной связи", "SEO оптимизация"]
                },
                corporate: {
                    title: "Корпоративные сайты",
                    subtitle: "Сайты-визитки и презентационные порталы",
                    features: ["Адаптивный дизайн", "1 страница", "Форма обратной связи", "SEO оптимизация", "Хостинг на 3 месяца"]
                },
                landing: {
                    title: "Лендинги с интеграциями",
                    subtitle: "Сайты с кастомной логикой",
                    features: ["Уникальный дизайн", "Интеграция с CRM/API", "Кастомные формы", "Аналитика и метрики", "Backend на WordPress", "Админ-панель"]
                },
                crm: {
                    title: "CRM и системы управления",
                    subtitle: "Автоматизация бизнес-процессов",
                    features: ["Кастомная CRM система", "Управление клиентами", "Отчеты и аналитика", "Интеграции с сервисами", "Laravel Backend API", "Роли и права доступа"]
                },
                webapp: {
                    title: "Веб-приложения",
                    subtitle: "Уникальные веб-платформы",
                    features: ["Сложная бизнес-логика", "Многофункциональность", "Масштабируемая архитектура", "REST API на Laravel", "Real-time функции", "Мобильная версия"]
                },
                enterprise: {
                    title: "Enterprise решения",
                    subtitle: "Сложные кастомные системы",
                    features: ["Микросервисная архитектура", "Высокая нагрузка", "Интеграция с внешними системами", "Laravel + дополнительные сервисы", "Кластерная инфраструктура", "Техническая поддержка 24/7"]
                }
            },
            tech: "Технологии:"
        },
        process: {
            tag: "Процесс",
            title: "Как мы реализуем наши проекты",
            subtitle: "Прозрачный и структурированный подход к разработке, который гарантирует качественный результат",
            steps: {
                analysis: {
                    title: "Анализ и планирование",
                    text: "Изучаем ваш бизнес, цели и требования. Проводим исследование целевой аудитории и конкурентов. Формируем техническое задание и план разработки."
                },
                design: {
                    title: "Дизайн и прототипирование",
                    text: "Создаём wireframes и прототипы интерфейса. Разрабатываем визуальный дизайн с учётом UX-принципов. Согласовываем каждый этап с вами перед началом разработки."
                },
                development: {
                    title: "Разработка",
                    text: "Пишем чистый и масштабируемый код на Laravel или используем CMS WordPress, следуя лучшим практикам. Регулярно демонстрируем промежуточные результаты. Используем современный стек: Laravel для backend, React/Vue для frontend, или WordPress для быстрой разработки."
                },
                testing: {
                    title: "Тестирование",
                    text: "Проводим комплексное тестирование функциональности, производительности и безопасности. Устраняем все найденные ошибки. Обеспечиваем совместимость с разными устройствами."
                },
                launch: {
                    title: "Запуск и поддержка",
                    text: "Деплоим проект на сервер и настраиваем инфраструктуру. Обучаем вашу команду работе с системой. Обеспечиваем техническую поддержку и дальнейшее развитие продукта."
                }
            }
        },
        contact: {
            tag: "Связь",
            title: "Давайте обсудим ваш проект",
            subtitle: "Заполните форму, и мы свяжемся с вами в течение 24 часов для обсуждения деталей вашего проекта.",
            email: {
                title: "Email"
            },
            telegram: {
                title: "Telegram"
            },
            instagram: {
                title: "Instagram"
            },
            phone: "Телефон",
            form: {
                name: "Имя",
                phone: "Телефон",
                email: "Ваш email",
                emailPlaceholder: "your@email.com",
                service: "Интересующая услуга",
                servicePlaceholder: "Выберите услугу",
                services: {
                    web: "Веб-разработка",
                    design: "UI/UX Дизайн",
                    mobile: "Мобильные приложения",
                    support: "Поддержка и развитие",
                    other: "Другое"
                },
                message: "Сообщение",
                messagePlaceholder: "Расскажите о вашем проекте...",
                submit: "Отправить заявку",
                success: "Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в течение 24 часов.",
                error: "Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз или свяжитесь с нами напрямую.",
                privacy: "Я согласен(а) на обработку персональных данных",
                validation: {
                    nameRequired: "Пожалуйста, введите ваше имя",
                    nameMinLength: "Имя должно содержать минимум 2 символа",
                    nameMaxLength: "Имя не должно превышать 50 символов",
                    phoneRequired: "Пожалуйста, введите номер телефона",
                    phoneInvalid: "Введите корректный номер телефона",
                    emailRequired: "Пожалуйста, введите ваш email",
                    emailInvalid: "Введите корректный email адрес",
                    messageRequired: "Пожалуйста, введите сообщение",
                    messageMinLength: "Сообщение должно содержать минимум 10 символов",
                    messageMaxLength: "Сообщение не должно превышать 1000 символов",
                    privacyRequired: "Необходимо согласие на обработку персональных данных"
                }
            }
        },
        footer: {
            tagline: "Создаём цифровые решения, которые работают",
            services: "Услуги",
            company: "Компания",
            copyright: "Все права защищены.",
            copyrightFull: "© 2024 WebCo Solutions. Все права защищены."
        }
    },
    uk: {
        nav: {
            home: "Головна",
            about: "Про нас",
            services: "Послуги",
            pricing: "Ціни",
            process: "Процес",
            contact: "Зв'язатися"
        },
        hero: {
            title: "Створюємо цифрові рішення,",
            titleHighlight: "які працюють",
            subtitle: "Ми — команда професіоналів, що перетворює ваші ідеї на сучасні веб-додатки та дизайни, які приваблюють клієнтів і збільшують продажі.",
            button: "Почати проект",
            stats: {
                projects: "Проектів",
                years: "Років досвіду",
                clients: "Задоволених клієнтів"
            }
        },
        about: {
            tag: "Про нас",
            title: "Чому обирають нас",
            cards: {
                focus: {
                    title: "Фокус на результат",
                    text: "Кожен проект ми створюємо з урахуванням ваших бізнес-цілей. Ми не просто робимо красиві сайти — ми створюємо інструменти для зростання вашого бізнесу."
                },
                tech: {
                    title: "Сучасні технології",
                    text: "Використовуємо актуальний стек технологій і найкращі практики розробки. Ваш проект буде швидким, безпечним і масштабованим."
                },
                transparent: {
                    title: "Прозоре співробітництво",
                    text: "Ви завжди в курсі процесу розробки. Регулярні звіти, відкрита комунікація та гнучкий підхід до змін."
                },
                fast: {
                    title: "Швидка розробка",
                    text: "Оптимізовані процеси дозволяють нам створювати якісні рішення в стислі терміни без втрати якості."
                }
            }
        },
        services: {
            tag: "Послуги",
            title: "Що ми робимо",
            cards: {
                web: {
                    title: "Веб-розробка",
                    text: "Сучасні веб-сайти та веб-додатки на Laravel, React, Vue.js. Від лендінгів до складних корпоративних систем з потужним backend на Laravel.",
                    features: ["Laravel Backend розробка", "Frontend на React/Vue.js", "Full-stack рішення"]
                },
                design: {
                    title: "UI/UX Дизайн",
                    text: "Створюємо інтуїтивні та красиві інтерфейси, які подобаються користувачам і конвертують відвідувачів у клієнтів.",
                    features: ["Дизайн інтерфейсів", "Прототипування", "Дизайн-системи"]
                },
                mobile: {
                    title: "Мобільні додатки",
                    text: "Розробка нативних та кроссплатформенних мобільних додатків для iOS та Android.",
                    features: ["iOS розробка", "Android розробка", "React Native"]
                },
                support: {
                    title: "Підтримка та розвиток",
                    text: "Не кидаємо проекти після запуску. Забезпечуємо технічну підтримку, оновлення та розвиток вашого продукту.",
                    features: ["Технічна підтримка", "Оновлення та покращення", "Моніторинг та аналітика"]
                }
            }
        },
        pricing: {
            tag: "Ціни",
            title: "Вартість розробки",
            subtitle: "Прозорі ціни на розробку. Кожен проект оцінюється індивідуально, нижче вказані орієнтовні діапазони.",
            note: "Всі ціни вказані орієнтовно. Точна вартість розраховується після обговорення вимог до проекту.",
            button: "Замовити",
            popular: "Популярно",
            period: "за проект",
            cards: {
                simple: {
                    title: "Прості лендинги та сайти візитки",
                    subtitle: "Прості односторінкові сайти",
                    features: ["Адаптивний дизайн", "1 сторінка", "Форма зворотного зв'язку", "SEO оптимізація"]
                },
                corporate: {
                    title: "Корпоративні сайти",
                    subtitle: "Сайти-візитки та презентаційні портали",
                    features: ["Адаптивний дизайн", "1 сторінка", "Форма зворотного зв'язку", "SEO оптимізація", "Хостинг на 3 місяці"]
                },
                landing: {
                    title: "Лендинги з інтеграціями",
                    subtitle: "Сайти з кастомною логікою",
                    features: ["Унікальний дизайн", "Інтеграція з CRM/API", "Кастомні форми", "Аналітика та метрики", "Backend WordPress", "Адмін-панель"]
                },
                crm: {
                    title: "CRM та системи управління",
                    subtitle: "Автоматизація бізнес-процесів",
                    features: ["Кастомна CRM система", "Управління клієнтами", "Звіти та аналітика", "Інтеграції з сервісами", "Laravel Backend API", "Ролі та права доступу"]
                },
                webapp: {
                    title: "Веб-додатки",
                    subtitle: "Унікальні веб-платформи",
                    features: ["Складна бізнес-логіка", "Багатофункціональність", "Масштабована архітектура", "REST API на Laravel", "Real-time функції", "Мобільна версія"]
                },
                enterprise: {
                    title: "Enterprise рішення",
                    subtitle: "Складні кастомні системи",
                    features: ["Мікросервісна архітектура", "Висока навантаженість", "Інтеграція з зовнішніми системами", "Laravel + додаткові сервіси", "Кластерна інфраструктура", "Технічна підтримка 24/7"]
                }
            },
            tech: "Технології:"
        },
        process: {
            tag: "Процес",
            title: "Як ми реалізуємо наші проекти",
            subtitle: "Прозорий та структурований підхід до розробки, який гарантує якісний результат",
            steps: {
                analysis: {
                    title: "Аналіз та планування",
                    text: "Вивчаємо ваш бізнес, цілі та вимоги. Проводимо дослідження цільової аудиторії та конкурентів. Формуємо технічне завдання та план розробки."
                },
                design: {
                    title: "Дизайн та прототипування",
                    text: "Створюємо wireframes та прототипи інтерфейсу. Розробляємо візуальний дизайн з урахуванням UX-принципів. Погоджуємо кожен етап з вами перед початком розробки."
                },
                development: {
                    title: "Розробка",
                    text: "Пишемо чистий та масштабований код на Laravel або використовуємо CMS WordPress, дотримуючись найкращих практик. Регулярно демонструємо проміжні результати. Використовуємо сучасний стек: Laravel для backend, React/Vue для frontend, або WordPress для швидкої розробки."
                },
                testing: {
                    title: "Тестування",
                    text: "Проводимо комплексне тестування функціональності, продуктивності та безпеки. Усуваємо всі знайдені помилки. Забезпечуємо сумісність з різними пристроями."
                },
                launch: {
                    title: "Запуск та підтримка",
                    text: "Деплоїмо проект на сервер та налаштовуємо інфраструктуру. Навчаємо вашу команду роботі з системою. Забезпечуємо технічну підтримку та подальший розвиток продукту."
                }
            }
        },
        contact: {
            tag: "Зв'язок",
            title: "Давайте обговоримо ваш проект",
            subtitle: "Заповніть форму, і ми зв'яжемося з вами протягом 24 годин для обговорення деталей вашого проекту.",
            email: {
                title: "Email"
            },
            telegram: {
                title: "Telegram"
            },
            instagram: {
                title: "Instagram"
            },
            phone: "Телефон",
            form: {
                name: "Ім'я",
                phone: "Телефон",
                email: "Ваш email",
                emailPlaceholder: "your@email.com",
                service: "Цікавляча послуга",
                servicePlaceholder: "Виберіть послугу",
                services: {
                    web: "Веб-розробка",
                    design: "UI/UX Дизайн",
                    mobile: "Мобільні додатки",
                    support: "Підтримка та розвиток",
                    other: "Інше"
                },
                message: "Повідомлення",
                messagePlaceholder: "Розкажіть про ваш проект...",
                submit: "Відправити заявку",
                success: "Дякуємо! Ваша заявка відправлена. Ми зв'яжемося з вами протягом 24 годин.",
                error: "Сталася помилка при відправці форми. Будь ласка, спробуйте ще раз або зв'яжіться з нами безпосередньо.",
                privacy: "Я погоджуюсь на обробку персональних даних",
                validation: {
                    nameRequired: "Будь ласка, введіть ваше ім'я",
                    nameMinLength: "Ім'я повинно містити мінімум 2 символи",
                    nameMaxLength: "Ім'я не повинно перевищувати 50 символів",
                    phoneRequired: "Будь ласка, введіть номер телефону",
                    phoneInvalid: "Введіть коректний номер телефону",
                    emailRequired: "Будь ласка, введіть ваш email",
                    emailInvalid: "Введіть коректний email адрес",
                    messageRequired: "Будь ласка, введіть повідомлення",
                    messageMinLength: "Повідомлення повинно містити мінімум 10 символів",
                    messageMaxLength: "Повідомлення не повинно перевищувати 1000 символів",
                    privacyRequired: "Необхідна згода на обробку персональних даних"
                }
            }
        },
        footer: {
            tagline: "Створюємо цифрові рішення, які працюють",
            services: "Послуги",
            company: "Компанія",
            copyright: "Всі права захищені.",
            copyrightFull: "© 2024 WebCo Solutions. Всі права захищені."
        }
    },
    pl: {
        nav: {
            home: "Strona główna",
            about: "O nas",
            services: "Usługi",
            pricing: "Cennik",
            process: "Proces",
            contact: "Kontakt"
        },
        hero: {
            title: "Tworzymy rozwiązania cyfrowe,",
            titleHighlight: "które działają",
            subtitle: "Jesteśmy zespołem profesjonalistów, który zamienia Twoje pomysły w nowoczesne aplikacje internetowe i projekty, które przyciągają klientów i zwiększają sprzedaż.",
            button: "Rozpocznij projekt",
            stats: {
                projects: "Projektów",
                years: "Lat doświadczenia",
                clients: "Zadowolonych klientów"
            }
        },
        about: {
            tag: "O nas",
            title: "Dlaczego wybierają nas",
            cards: {
                focus: {
                    title: "Skupienie na rezultatach",
                    text: "Każdy projekt tworzymy z uwzględnieniem Twoich celów biznesowych. Nie robimy tylko pięknych stron — tworzymy narzędzia do rozwoju Twojego biznesu."
                },
                tech: {
                    title: "Nowoczesne technologie",
                    text: "Używamy aktualnego stosu technologii i najlepszych praktyk programistycznych. Twój projekt będzie szybki, bezpieczny i skalowalny."
                },
                transparent: {
                    title: "Przejrzysta współpraca",
                    text: "Zawsze jesteś na bieżąco z procesem rozwoju. Regularne raporty, otwarta komunikacja i elastyczne podejście do zmian."
                },
                fast: {
                    title: "Szybki rozwój",
                    text: "Zoptymalizowane procesy pozwalają nam tworzyć wysokiej jakości rozwiązania w krótkim czasie bez utraty jakości."
                }
            }
        },
        services: {
            tag: "Usługi",
            title: "Co robimy",
            cards: {
                web: {
                    title: "Tworzenie stron internetowych",
                    text: "Nowoczesne strony internetowe i aplikacje webowe na Laravel, React, Vue.js. Od landing page'ów po złożone systemy korporacyjne z potężnym backendem na Laravel.",
                    features: ["Rozwój Laravel Backend", "Frontend na React/Vue.js", "Rozwiązania Full-stack"]
                },
                design: {
                    title: "UI/UX Design",
                    text: "Tworzymy intuicyjne i piękne interfejsy, które podobają się użytkownikom i konwertują odwiedzających w klientów.",
                    features: ["Projektowanie interfejsów", "Prototypowanie", "Systemy designu"]
                },
                mobile: {
                    title: "Aplikacje mobilne",
                    text: "Tworzenie natywnych i wieloplatformowych aplikacji mobilnych dla iOS i Android.",
                    features: ["Rozwój iOS", "Rozwój Android", "React Native"]
                },
                support: {
                    title: "Wsparcie i rozwój",
                    text: "Nie porzucamy projektów po uruchomieniu. Zapewniamy wsparcie techniczne, aktualizacje i rozwój Twojego produktu.",
                    features: ["Wsparcie techniczne", "Aktualizacje i ulepszenia", "Monitorowanie i analityka"]
                }
            }
        },
        pricing: {
            tag: "Cennik",
            title: "Koszt rozwoju",
            subtitle: "Przejrzyste ceny rozwoju. Każdy projekt jest wyceniany indywidualnie, poniżej podano orientacyjne zakresy.",
            note: "Wszystkie ceny są orientacyjne. Dokładny koszt jest obliczany po omówieniu wymagań projektu.",
            button: "Zamów",
            popular: "Popularne",
            period: "za projekt",
            cards: {
                simple: {
                    title: "Proste landing page'y i strony wizytówki",
                    subtitle: "Proste jednostronicowe strony",
                    features: ["Responsywny design", "1 strona", "Formularz kontaktowy", "Optymalizacja SEO"]
                },
                corporate: {
                    title: "Strony korporacyjne",
                    subtitle: "Wizytówki i portale prezentacyjne",
                    features: ["Responsywny design", "1 strona", "Formularz kontaktowy", "Optymalizacja SEO", "Hosting na 3 miesiące"]
                },
                landing: {
                    title: "Landing page'y z integracjami",
                    subtitle: "Strony z niestandardową logiką",
                    features: ["Unikalny design", "Integracja z CRM/API", "Niestandardowe formularze", "Analityka i metryki", "Backend WordPress", "Panel administracyjny"]
                },
                crm: {
                    title: "CRM i systemy zarządzania",
                    subtitle: "Automatyzacja procesów biznesowych",
                    features: ["Niestandardowy system CRM", "Zarządzanie klientami", "Raporty i analityka", "Integracje z serwisami", "Laravel Backend API", "Role i uprawnienia dostępu"]
                },
                webapp: {
                    title: "Aplikacje webowe",
                    subtitle: "Unikalne platformy internetowe",
                    features: ["Złożona logika biznesowa", "Wielofunkcjonalność", "Skalowalna architektura", "REST API na Laravel", "Funkcje Real-time", "Wersja mobilna"]
                },
                enterprise: {
                    title: "Rozwiązania Enterprise",
                    subtitle: "Złożone niestandardowe systemy",
                    features: ["Architektura mikrousług", "Wysokie obciążenie", "Integracja z systemami zewnętrznymi", "Laravel + dodatkowe serwisy", "Infrastruktura klastrowa", "Wsparcie techniczne 24/7"]
                }
            },
            tech: "Technologie:"
        },
        process: {
            tag: "Proces",
            title: "Jak realizujemy nasze projekty",
            subtitle: "Przejrzyste i ustrukturyzowane podejście do rozwoju, które gwarantuje wysokiej jakości rezultat",
            steps: {
                analysis: {
                    title: "Analiza i planowanie",
                    text: "Badamy Twój biznes, cele i wymagania. Przeprowadzamy badanie docelowej grupy odbiorców i konkurentów. Tworzymy specyfikację techniczną i plan rozwoju."
                },
                design: {
                    title: "Design i prototypowanie",
                    text: "Tworzymy wireframe'y i prototypy interfejsu. Rozwijamy projekt wizualny z uwzględnieniem zasad UX. Uzgadniamy każdy etap z Tobą przed rozpoczęciem rozwoju."
                },
                development: {
                    title: "Rozwój",
                    text: "Piszemy czysty i skalowalny kod na Laravel lub używamy CMS WordPress, przestrzegając najlepszych praktyk. Regularnie demonstrujemy pośrednie wyniki. Używamy nowoczesnego stosu: Laravel dla backendu, React/Vue dla frontendu, lub WordPress dla szybkiego rozwoju."
                },
                testing: {
                    title: "Testowanie",
                    text: "Przeprowadzamy kompleksowe testowanie funkcjonalności, wydajności i bezpieczeństwa. Usuwamy wszystkie znalezione błędy. Zapewniamy kompatybilność z różnymi urządzeniami."
                },
                launch: {
                    title: "Uruchomienie i wsparcie",
                    text: "Wdrażamy projekt na serwer i konfigurujemy infrastrukturę. Szkolimy Twój zespół w zakresie pracy z systemem. Zapewniamy wsparcie techniczne i dalszy rozwój produktu."
                }
            }
        },
        contact: {
            tag: "Kontakt",
            title: "Porozmawiajmy o Twoim projekcie",
            subtitle: "Wypełnij formularz, a skontaktujemy się z Tobą w ciągu 24 godzin, aby omówić szczegóły Twojego projektu.",
            email: {
                title: "Email"
            },
            phone: "Telefon",
            form: {
                name: "Imię",
                phone: "Telefon",
                email: "Twój email",
                emailPlaceholder: "your@email.com",
                service: "Interesująca usługa",
                servicePlaceholder: "Wybierz usługę",
                services: {
                    web: "Tworzenie stron internetowych",
                    design: "UI/UX Design",
                    mobile: "Aplikacje mobilne",
                    support: "Wsparcie i rozwój",
                    other: "Inne"
                },
                message: "Wiadomość",
                messagePlaceholder: "Opowiedz o swoim projekcie...",
                submit: "Wyślij zgłoszenie",
                success: "Dziękujemy! Twoje zgłoszenie zostało wysłane. Skontaktujemy się z Tobą w ciągu 24 godzin.",
                error: "Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie lub skontaktuj się z nami bezpośrednio.",
                privacy: "Wyrażam zgodę na przetwarzanie danych osobowych",
                validation: {
                    nameRequired: "Proszę podać swoje imię",
                    nameMinLength: "Imię musi zawierać co najmniej 2 znaki",
                    nameMaxLength: "Imię nie może przekraczać 50 znaków",
                    phoneRequired: "Proszę podać numer telefonu",
                    phoneInvalid: "Wprowadź poprawny numer telefonu",
                    emailRequired: "Proszę podać adres email",
                    emailInvalid: "Wprowadź poprawny adres email",
                    messageRequired: "Proszę wprowadzić wiadomość",
                    messageMinLength: "Wiadomość musi zawierać co najmniej 10 znaków",
                    messageMaxLength: "Wiadomość nie może przekraczać 1000 znaków",
                    privacyRequired: "Wymagana zgoda na przetwarzanie danych osobowych"
                }
            }
        },
        footer: {
            tagline: "Tworzymy rozwiązania cyfrowe, które działają",
            services: "Usługi",
            company: "Firma",
            copyright: "Wszelkie prawa zastrzeżone.",
            copyrightFull: "© 2024 WebCo Solutions. Wszelkie prawa zastrzeżone."
        }
    },
    en: {
        nav: {
            home: "Home",
            about: "About",
            services: "Services",
            pricing: "Pricing",
            process: "Process",
            contact: "Contact"
        },
        hero: {
            title: "We create digital solutions",
            titleHighlight: "that work",
            subtitle: "We are a team of professionals turning your ideas into modern web applications and designs that attract customers and increase sales.",
            button: "Start Project",
            stats: {
                projects: "Projects",
                years: "Years of Experience",
                clients: "Satisfied Clients"
            }
        },
        about: {
            tag: "About",
            title: "Why Choose Us",
            cards: {
                focus: {
                    title: "Results Focused",
                    text: "We create every project with your business goals in mind. We don't just make beautiful websites — we create tools for your business growth."
                },
                tech: {
                    title: "Modern Technologies",
                    text: "We use current technology stack and best development practices. Your project will be fast, secure, and scalable."
                },
                transparent: {
                    title: "Transparent Collaboration",
                    text: "You're always aware of the development process. Regular reports, open communication, and flexible approach to changes."
                },
                fast: {
                    title: "Fast Development",
                    text: "Optimized processes allow us to create quality solutions in tight deadlines without losing quality."
                }
            }
        },
        services: {
            tag: "Services",
            title: "What We Do",
            cards: {
                web: {
                    title: "Web Development",
                    text: "Modern websites and web applications on Laravel, React, Vue.js. From landing pages to complex corporate systems with powerful Laravel backend.",
                    features: ["Laravel Backend Development", "Frontend on React/Vue.js", "Full-stack Solutions"]
                },
                design: {
                    title: "UI/UX Design",
                    text: "We create intuitive and beautiful interfaces that users love and convert visitors into customers.",
                    features: ["Interface Design", "Prototyping", "Design Systems"]
                },
                mobile: {
                    title: "Mobile Applications",
                    text: "Development of native and cross-platform mobile applications for iOS and Android.",
                    features: ["iOS Development", "Android Development", "React Native"]
                },
                support: {
                    title: "Support & Development",
                    text: "We don't abandon projects after launch. We provide technical support, updates, and development of your product.",
                    features: ["Technical Support", "Updates & Improvements", "Monitoring & Analytics"]
                }
            }
        },
        pricing: {
            tag: "Pricing",
            title: "Development Cost",
            subtitle: "Transparent development prices. Each project is priced individually, approximate ranges are shown below.",
            note: "All prices are approximate. Exact cost is calculated after discussing project requirements.",
            button: "Order",
            popular: "Popular",
            period: "per project",
            cards: {
                simple: {
                    title: "Simple Landing Pages and Business Card Sites",
                    subtitle: "Simple single-page sites",
                    features: ["Responsive Design", "1 page", "Contact Form", "SEO Optimization"]
                },
                corporate: {
                    title: "Corporate Websites",
                    subtitle: "Business card sites and presentation portals",
                    features: ["Responsive Design", "1 page", "Contact Form", "SEO Optimization", "3 months hosting"]
                },
                landing: {
                    title: "Landing Pages with Integrations",
                    subtitle: "Sites with custom logic",
                    features: ["Unique Design", "CRM/API Integration", "Custom Forms", "Analytics & Metrics", "WordPress Backend", "Admin Panel"]
                },
                crm: {
                    title: "CRM & Management Systems",
                    subtitle: "Business process automation",
                    features: ["Custom CRM System", "Customer Management", "Reports & Analytics", "Service Integrations", "Laravel Backend API", "Roles & Access Rights"]
                },
                webapp: {
                    title: "Web Applications",
                    subtitle: "Unique web platforms",
                    features: ["Complex Business Logic", "Multifunctionality", "Scalable Architecture", "Laravel REST API", "Real-time Features", "Mobile Version"]
                },
                enterprise: {
                    title: "Enterprise Solutions",
                    subtitle: "Complex custom systems",
                    features: ["Microservices Architecture", "High Load", "External System Integration", "Laravel + Additional Services", "Cluster Infrastructure", "24/7 Technical Support"]
                }
            },
            tech: "Technologies:"
        },
        process: {
            tag: "Process",
            title: "How We Implement Our Projects",
            subtitle: "Transparent and structured approach to development that guarantees quality results",
            steps: {
                analysis: {
                    title: "Analysis & Planning",
                    text: "We study your business, goals, and requirements. Conduct target audience and competitor research. Form technical specification and development plan."
                },
                design: {
                    title: "Design & Prototyping",
                    text: "We create wireframes and interface prototypes. Develop visual design considering UX principles. Coordinate each stage with you before starting development."
                },
                development: {
                    title: "Development",
                    text: "We write clean and scalable code on Laravel or use CMS WordPress, following best practices. Regularly demonstrate intermediate results. Use modern stack: Laravel for backend, React/Vue for frontend, or WordPress for rapid development."
                },
                testing: {
                    title: "Testing",
                    text: "We conduct comprehensive testing of functionality, performance, and security. Fix all found errors. Ensure compatibility with different devices."
                },
                launch: {
                    title: "Launch & Support",
                    text: "We deploy the project to the server and configure infrastructure. Train your team to work with the system. Provide technical support and further product development."
                }
            }
        },
        contact: {
            tag: "Contact",
            title: "Let's Discuss Your Project",
            subtitle: "Fill out the form, and we'll contact you within 24 hours to discuss your project details.",
            email: {
                title: "Email"
            },
            phone: "Phone",
            form: {
                name: "Name",
                phone: "Phone",
                email: "Your email",
                emailPlaceholder: "your@email.com",
                service: "Service of Interest",
                servicePlaceholder: "Select service",
                services: {
                    web: "Web Development",
                    design: "UI/UX Design",
                    mobile: "Mobile Applications",
                    support: "Support & Development",
                    other: "Other"
                },
                message: "Message",
                messagePlaceholder: "Tell us about your project...",
                submit: "Send Request",
                success: "Thank you! Your request has been sent. We'll contact you within 24 hours.",
                error: "An error occurred while sending the form. Please try again or contact us directly.",
                validation: {
                    nameRequired: "Please enter your name",
                    nameMinLength: "Name must be at least 2 characters",
                    nameMaxLength: "Name must not exceed 50 characters",
                    phoneRequired: "Please enter your phone number",
                    phoneInvalid: "Please enter a valid phone number",
                    emailRequired: "Please enter your email",
                    emailInvalid: "Please enter a valid email address",
                    messageRequired: "Please enter a message",
                    messageMinLength: "Message must be at least 10 characters",
                    messageMaxLength: "Message must not exceed 1000 characters"
                }
            }
        },
        footer: {
            tagline: "We create digital solutions that work",
            services: "Services",
            company: "Company",
            copyright: "All rights reserved.",
            copyrightFull: "© 2024 WebCo Solutions. All rights reserved."
        }
    }
};

// Price in USD
const prices = {
    simple: 100,
    corporate: 500,
    landing: 800,
    crm: 2700,
    webapp: 4300,
    enterprise: 8600
};

