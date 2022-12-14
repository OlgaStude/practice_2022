-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Ноя 16 2022 г., 06:46
-- Версия сервера: 5.7.38
-- Версия PHP: 8.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- База данных: `bookshoppractice`
--

-- --------------------------------------------------------

--
-- Структура таблицы `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `login` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `admin`
--

INSERT INTO `admin` (`id`, `login`, `password`) VALUES
(1, 'admin', '5f4dcc3b5aa765d61d8327deb882cf99');

-- --------------------------------------------------------

--
-- Структура таблицы `authors`
--

CREATE TABLE `authors` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `authors`
--

INSERT INTO `authors` (`id`, `name`) VALUES
(40, 'Джош Симмонс'),
(41, 'Туве Янссон'),
(72, 'Карамзин Н.М.'),
(90, 'Бардуго Л.'),
(100, 'Тургенев И.С.'),
(101, 'Джек Лондон'),
(102, 'Владислав Крапивин'),
(108, 'Вельскопф-Генрих Л.'),
(111, 'Питер Дж. Томаси'),
(112, 'Михалкова Е.И.'),
(118, 'Андре Моруа');

-- --------------------------------------------------------

--
-- Структура таблицы `a_b`
--

CREATE TABLE `a_b` (
  `id` int(11) NOT NULL,
  `id_author` int(11) NOT NULL,
  `id_book` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `a_b`
--

INSERT INTO `a_b` (`id`, `id_author`, `id_book`) VALUES
(139, 40, 29),
(112, 40, 30),
(109, 41, 31),
(128, 41, 32),
(142, 41, 33),
(145, 41, 34),
(119, 72, 42),
(150, 72, 43),
(111, 90, 45),
(125, 100, 44),
(126, 101, 26),
(127, 102, 25),
(134, 108, 16),
(138, 111, 29),
(140, 112, 46),
(151, 118, 41);

-- --------------------------------------------------------

--
-- Структура таблицы `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cover` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `year` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `genre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `books`
--

INSERT INTO `books` (`id`, `title`, `cover`, `description`, `year`, `genre`) VALUES
(16, ' Изгнанники, или Топ и Харри', '2945747_detail.jpg', 'Романы из цикла «Сыновья Большой Медведицы» Лизелотты Вельскопф-Генрих стоят в одном ряду с приключенческими книгами об индейцах Северной Америки Фенимора Купера и Майн Рида. Романы из цикла «Сыновья Большой Медведицы» Лизелотты Вельскопф-Генрих стоят в одном ряду с приключенческими книгами об индейцах Северной Америки Фенимора Купера и Майн Рида. <br>Произведения немецкой писательницы стали классикой юношеской литературы, многократно переиздавались, были переведены на десятки языков и экранизированы. Начало циклу положил одноименный роман, который вышел в 1951 году, и его автор был удостоен престижной литературной премии. В последующие годы Вельскопф-Генрих не оставляла работы над книгой и существенно ее расширила. Первое полное издание увидело свет в трех томах в начале 1960-х (впоследствии цикл выходил также в виде шеститомника). За деятельную поддержку североамериканских индейцев племенной союз оглала присудил писательнице почетный титул Лакота-Ташина, Защитница Лакота. Вниманию читателей предлагается второй том трилогии «Изгнанники, или Топ и Харри». <br>В книге повествуется о новых испытаниях, выпавших на долю Маттотаупы, вождя индейского племени охотников, и Харки, который вслед за отцом покинул родное стойбище и разделил с вождем горькую участь изгнанника... Роман представлен в новом полном переводе Т. Набатниковой и Р. Эйвадиса (ранее «Сыновья Большой Медведицы» на русском языке публиковались в сокращенном виде); ', '2000', 'Фэнтези'),
(25, 'Мальчик со шпагой', '2883332_detail.jpg', 'Роман «Мальчик со шпагой» — одна из бесспорных вершин в творчестве Владислава Крапивина.<br>Если делить литературу по возрастному принципу — это написано для взрослых, это написано для детей, — мы много чего потеряем, следуя такому разграничению. То, что в книге герои дети, вовсе не означает, что аудитория читателей детская. «Вино из одуванчиков» Брэдбери и его же «Надвигается беда» рассчитаны на какой возраст? А «Гекльберри Финн» Марка Твена? Да на любой — от двенадцати лет и далее.<br>Крапивин — автор тревожный. В прозе своей он ставит вопросы, на которые не любой философ найдет ответ. Как в современном мире, сложном, меняющемся стремительно, в мире, где размываются границы понятий, приоритеты — честь, мужество, предательство, подлость, — не опустить флаг, поднятый когда-то в мальчишеском братстве капитанов и барабанщиков? Как не изменить себе?', '1974', 'Приключения'),
(26, 'Сила сильных', '2881995_detail.jpg', 'Американский писатель Джек Лондон (1876–1916) никогда не был мечтателем в башне из слоновой кости — еще в ранней юности он узнал, что такое борьба за выживание. В его судьбе были и изматывающий фабричный труд, и «пиратские» приключения, и «золотая лихорадка». Сама жизнь подарила ему образы героев и позволила рассказать о силе и уязвимости сильных и о том, как опасны и непредсказуемы могут быть слабые. <br>В сборник вошли работы, созданные Джеком Лондоном преимущественно в последнее десятилетие его жизни: это посвященные «боксерской» теме повести «Игра» и «Лютый Зверь», знаменитый «Мексиканец», цикл рассказов «Сила сильных» и ряд других произведений.', '1991', 'Драма'),
(29, 'Бэтмен. Мертвецкий холод', '2884249_detail.jpg', 'Расследование случаев ритуальных убийств, совершённых накануне Рождества и Нового года в Готэме как будто каким-то древним язычником, уводит Бэтмена далеко во тьму минувших веков и погружает во мрак человеческого разума. На ежегодной церемонии зажигания огней на рождественской ёлке на главной площади Готэм-сити, в которой принимает участие Уэйн, на Брюса нападает огромный бородач в рогатом шлеме и с секирой. Чудом избежав смерти, Брюс Уэйн берётся за расследование, чтобы понять, как языческий кровавый ритуал в честь праздника зимнего солнцестояния связан с Готэмом. <br>Что ж, ночь накануне Рождества для Бэтмена выдастся чудовищно жаркой…', '2022', 'Детектив'),
(30, 'Западня', '2724657_detail.jpg', '«Западня» — это 11 небольших историй комиксиста Джоша Симмонса, которые в той или иной мере представляют собой воплощение понятия «ужас». Сюжеты этих мини-комиксов самодостаточны и сводятся к стремлению автора показать истинное определение хоррора. Забудьте обо всём, что вы читали прежде, ибо с подобным отвращением и отторжением от происходящего вы столкнетесь впервые. <br>И даже если добро в итоге победит зло, не спешите радоваться хэппи-энду. Ведь порой это всего лишь западня.', '2019', 'Ужасы'),
(31, 'Все о муми-троллях. Книга 1', '2697837_detail.jpg', 'В маленькой долине на зеленом лугу стоит удивительный дом, выкрашенный голубой краской. В этом доме живет семейство муми-троллей: Муми-мама, Муми-папа и сам Муми-тролль. И даже если в один прекрасный день на пороге объявится большая компания, здесь всем найдется место. Вообще-то, вокруг много всего непонятного и опасного — стихийные бедствия, волшебные шляпы, муравьиные львы… Муми-тролли, снорки, Снифф, Снусмумрик, их друзья и знакомые путешествуют, размышляют о нужности и ненужности всего сущего, пишут книги и ищут сокровища. Но какие бы приключения не ожидали Муми-тролля и его друзей, они знают: даже если в их долину упадет комета, даже если случится наводнение или буря, лес, сад и дом останутся на месте. На веранде всегда можно будет выпить чашечку кофе и полакомиться печеньем или тортом, который испекла Муми-мама… <br>Папа с мамой все уладят, только нужно вовремя вернуться домой!', '2018', 'Приключения'),
(32, 'Все о муми-троллях. Книга 2', '2713740_detail.jpg', 'В долине муми-троллей жизнь идёт своим чередом. Времена года сменяют друг друга, приходят и уходят гости, на веранде дымится кофе, а обитатели долины размышляют над важными жизненными вопросами, ждут новых посетителей и приключений. Как правило, долго ждать не приходится. То посреди зимней спячки муми-троллей разбудит неведомое «Рождество», то откуда ни возьмись появится невидимая девочка, то в саду обнаружится последний в мире дракон. А то вдруг Муми-папа решит сменить долину на остров в бурном море и стать смотрителем маяка. И вот так всегда, кто-то остаётся дома, кто-то собирается в путь; кто-то забывает собственное имя, а кто-то, наоборот, находит его. <br>И лишь одно в этом бурном мире остаётся неизменным – стоящий посреди зелёной долины самый самый уютный на свете дом, выкрашенный голубой краской…', '2019', 'Приключения'),
(33, 'Умеющая слушать', '2770515_detail.jpg', 'Туве Янссон по праву можно назвать одной из самых загадочных писательниц прошлого столетия. Будучи довольно закрытым человеком, оберегавшим личную жизнь от посторонних, Туве все же щедро наполняла свои произведения автобиографическими деталями: детскими воспоминаниями, запахом гипса и масляных красок, соленым морским воздухом и творческими исканиями. Лаконично рассказывая о повседневном, Янссон умело выделяла главное, словно составляла инструкцию своей жизни: «Если вода поднимается, значит быть шторму. Если она опускается очень быстро и низко, – тоже может случиться шторм. Ободок вокруг солнца может быть опасен. И солнечный закат в дымчатых темно-багровых красках не предвещает ничего хорошего». Ее сознание творца не было затуманено даже успехом сказок о муми-троллях и обрушившейся вместе с ним популярностью. И проза Туве Янссон – лучший ответ на вопрос «Как ей это удалось?».', '1971', 'Философия'),
(34, 'Летняя книга', '2822630_detail.jpg', 'В эту книгу, помимо единственного написанного Туве Янссон романа «Город солнца» о безмятежной старости на побережье и пронзительной повести «Летняя книга» о девочке, потерявшей мать, а также уже известных русскому читателю рассказов и новелл, вошли и впервые переведенные на русский язык произведения. <br>Северная атмосфера дневниковых «Записок с острова», посвященных строительству дома на Кловхаруне и жизни там, создает эффект присутствия на острове, пронизанном ветрами Финского залива и наполненном криками чаек, бесцеремонно вторгающихся в быт поселенцев. А под общим заголовком «Бульвар и другие тексты» кроется ряд ранних новелл и эссе Янссон, опубликованных в периодических изданиях в разные годы ее творческой деятельности. В них Туве рассказывает, каково быть детским писателем, размышляет о живописи и критикует архитектуру, делающую человека несчастным. И через все это разнообразие текстов в полной мере раскрывается глубина и характер прославленной писательницы.', '2005', 'Философия'),
(41, 'История Германии', '2618500_detail.jpg', 'Андре Моруа, классик французской литературы XX века, автор знаменитых романизированных биографий Дюма, Бальзака, Виктора Гюго, Шелли и Байрона, считается подлинным мастером психологической прозы. Однако значительную часть наследия писателя составляют исторические сочинения. ', '2017', 'Историческая'),
(42, 'История государства Российского', '2943286_detail.jpg', 'Николай Михайлович Карамзин (1766-1826) – российский историк, писатель, поэт, учёный, реформатор русского языка. Именно Карамзину мы обязаны появлением в русском алфавите буквы «ё». <br>В 1803 году император Александр I присвоил Николаю Карамзину звание российского историографа. С того же времени началась работа над самым известным трудом Карамзина – «История Государства Российского» (1818-1829).В предисловии к своему труду Карамзин пояснил, чем важна история и какую роль она играет в жизни каждого человека. А также отметил, что захватывающая история России не менее интересна и событийна, чем мировая. <br>«История государства Российского есть не только произведение великого писателя, но и подвиг честного человека», – писал о Карамзине А. С. Пушкин. «История» вдохновила Пушкина на создание трагедии «Борис Годунов».В книгу вошли отдельные тома и главы произведения «История государства Российского»', '1829', 'Историческая'),
(43, 'Бедная Лиза и другие повести', '2945801_detail.jpg', 'Николай Михайлович Карамзин (1766–1826) — великий русский писатель, журналист, историограф. <br>Его повесть «Бедная Лиза» открыла эпоху русского сентиментализма и поразила современников открытостью выражения чувств и эмоций. Это первая в русской литературе история любви, не знающей сословных границ, первая психологическая повесть. Любовь Лизы и Эраста закончилась трагически, но читатели тех времен с изумлением узнали, что «и крестьянки любить умеют». <br>В книгу также вошли повести «Наталья, боярская дочь» и «Марфа-посадница, или Покорение Новагорода», в которых исторические события показаны в тесном сплетении с человеческими взаимоотношениями.', '1792', 'Драма'),
(44, 'Отцы и дети', '2945824_detail.jpg', '«Отцы и дети» — наверное, самый актуальный роман великого русского писателя Ивана Сергеевича Тургенева (1818 – 1883). <br>Написанный в 1861 году, он словно принадлежит сегодняшнему времени. Это психологический роман о вечном антагонизме поколений, но в основе его не только внешнее противостояние молодого нигилиста Евгения Базарова и аристократа-консерватора Павла Кирсанова, но и внутренний конфликт главного героя. Испытание любовью приводит Базарова к серьезному мировоззренческому кризису, драматическая история его жизни — про нас сегодняшних, бескомпромиссных, безжалостных, жестко выбирающих между чувством и разумом.', '1862', 'Драма'),
(45, 'Жизнь святых', '2918411_detail.jpg', 'Эта книга — иллюстрированная коллекция уникальных историй святых, встречающихся на страницах любимых романов, – от известных Санкты-Лизаветы среди роз и Санкт-Ильи в цепях до малоизвестных, но не менее интересных героев, таких как Санкта-Урсула из Волн и Беззвёздный святой.', '2022', 'Философия'),
(46, 'Перо бумажной птицы', '2921402_detail.jpg', 'Пропала девушка. Ее любящая семья нанимает частных детективов Макара Илюшина и Сергея Бабкина. Для профессионалов это несложная задача. Но выстрел наемного убийцы разбивает вдребезги то, что казалось простым и очевидным. Сыщики понимают, что стали пешками в чужой игре. <br>Увидят ли они сквозь морок лицо настоящего преступника? Куда приведут их поиски?', '2005', 'Детектив');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `a_b`
--
ALTER TABLE `a_b`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_author` (`id_author`,`id_book`),
  ADD KEY `id_book` (`id_book`);

--
-- Индексы таблицы `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `authors`
--
ALTER TABLE `authors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=119;

--
-- AUTO_INCREMENT для таблицы `a_b`
--
ALTER TABLE `a_b`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=152;

--
-- AUTO_INCREMENT для таблицы `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `a_b`
--
ALTER TABLE `a_b`
  ADD CONSTRAINT `a_b_ibfk_1` FOREIGN KEY (`id_author`) REFERENCES `authors` (`id`),
  ADD CONSTRAINT `a_b_ibfk_2` FOREIGN KEY (`id_book`) REFERENCES `books` (`id`);
COMMIT;
