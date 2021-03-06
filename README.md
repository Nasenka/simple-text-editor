## Задача от Skillbox

Разработать простой текстовый редактор с возможностью сохранения контента в LocalStorage.

### Страница должна состоять из:

1. Блока с текстом
2. Кнопки «Редактировать»
3. Кнопок «Сохранить» и «Отмена» (по умолчанию неактивных — disabled)

### Механика работы страницы:

1. при первой загрузке страницы в блоке с текстом отображается текст по умолчанию (любой);
2. при нажатии на кнопку «Редактировать» блок с текстом становится редактируемым (contenteditable=true), кнопки «Сохранить» и «Отмена» становятся активными, а сама кнопка «Редактировать» — неактивной;
3. при нажатии на кнопку «Сохранить» содержимое блока с текстом сохраняется в LocalStorage, а режим редактирования отключается (кнопки возвращаются в исходное состояние);
4. при нажатии на кнопку «Отмена» содержимое блока с текстом заменяется на последний сохраненный вариант из LocalStorage, режим редактирования отключается;
5. при следующих перезагрузках страницы содержимое блока с текстом автоматически подтягивается из LocalStorage (последний сохраненный вариант).

### Выполнение
 - Сделано на `React`
 - Выполнено в среде `Create React App`
 - Запускается при помощи `npm start`
