let currentDate = new Date();

function renderCalendar(date) {
    const calendarTitle = document.querySelector('.calendar-title');
    const calendarDates = document.querySelector('.calendar-dates');

    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const firstDayOfWeek = firstDayOfMonth.getDay();

    const today = new Date();

    const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    calendarTitle.textContent = `${monthNames[month]} ${year}`;

    let datesHTML = '';

    for (let i = 1; i < firstDayOfWeek; i++) {
        datesHTML += '<div class="calendar-date disabled"></div>';
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const dateToCompare = new Date(year, month, i); // Создаем объект Date для сравнения
        const isDisabled = dateToCompare < today.setHours(0, 0, 0, 0); // Сравниваем только даты

        if (isDisabled) {
            datesHTML += `<div class="calendar-date disabled">${i}</div>`;
        } else {
            datesHTML += `<div class="calendar-date">${i}</div>`;
        }
    }

    calendarDates.innerHTML = datesHTML;
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
}

function previousMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
}

document.addEventListener('DOMContentLoaded', function() {
    renderCalendar(currentDate);

    const calendarDates = document.querySelector('.calendar-dates');

    calendarDates.addEventListener('click', function(event) {
        if (event.target.classList.contains('calendar-date') && !event.target.classList.contains('disabled')) {
            // Удаляем класс 'selected' у всех ячеек
            document.querySelectorAll('.calendar-date').forEach(date => {
                date.classList.remove('selected');
            });

            // Добавляем класс 'selected' к выбранной ячейке
            event.target.classList.add('selected');
        }
    });
});
















document.addEventListener('DOMContentLoaded', function() {
    // ... (Предыдущий код календаря) ...

    const timeOptions = document.querySelectorAll('.time-option');

    timeOptions.forEach(timeOption => {
        timeOption.addEventListener('click', function() {
            // Убираем класс 'selected' у всех элементов
            timeOptions.forEach(option => option.classList.remove('selected'));

            // Добавляем класс 'selected' только к выбранному элементу
            this.classList.add('selected');
        });
    });
});







document.addEventListener('DOMContentLoaded', function() {
    // ... (Предыдущий код календаря и времени) ...

    const childIcons = document.querySelectorAll('.child-icon');
    const childrenInput = document.querySelector('.children-input');

    function updateChildIcons(selectedCount) {
        childIcons.forEach(icon => {
            const iconCount = parseInt(icon.dataset.count);
            icon.classList.toggle('active', iconCount <= selectedCount);
            icon.classList.remove('selected');
        });
    }

    childIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const selectedCount = parseInt(this.dataset.count);
            updateChildIcons(selectedCount);
            childrenInput.value = selectedCount;
        });
    });

    childrenInput.addEventListener('input', function() {
        let manualCount = parseInt(this.value);

        // Обрезаем значение до 2 символов и только числа
        this.value = this.value.replace(/[^0-9]/g, '').slice(0, 2);
        manualCount = parseInt(this.value);

        if (manualCount >= 1 && manualCount <= 99) {
            updateChildIcons(manualCount);
        } else {
            updateChildIcons(0);
        }
    });
});









document.addEventListener('DOMContentLoaded', function() {
    // ... (Предыдущий код календаря, времени, детей) ...

    const adultOptions = document.querySelectorAll('.adult-option');
    const adultsInput = document.querySelector('.adults-input');

    adultOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Убираем класс 'selected' у всех элементов
            adultOptions.forEach(opt => opt.classList.remove('selected'));

            // Добавляем класс 'selected' только к выбранному элементу
            this.classList.add('selected');

             // Записываем выбранное значение в инпут для взрослых
            adultsInput.value = this.dataset.count;
        });
    });

     adultsInput.addEventListener('input', function() {
        let manualCount = parseInt(this.value);

        // Обрезаем значение до 2 символов и только числа
        this.value = this.value.replace(/[^0-9]/g, '').slice(0, 2);
        manualCount = parseInt(this.value);

         if (manualCount >= 1 && manualCount <= 4) {
            adultOptions.forEach(opt => opt.classList.remove('selected'));
        }
    });
});








document.addEventListener('DOMContentLoaded', function() {
    // ... (Предыдущий код) ...

    const organizeButton = document.getElementById('organize-button');

    organizeButton.addEventListener('click', function() {
        alert('Мероприятие успешно зарегистрировано!');
        location.reload(); // Перезагрузка страницы
    });
});





document.addEventListener('DOMContentLoaded', function() {
    // ... (Предыдущий код) ...

    const serviceButtons = document.querySelectorAll('.service-button');

    serviceButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Убираем класс 'selected' у всех кнопок
            serviceButtons.forEach(btn => btn.classList.remove('selected'));

            // Добавляем класс 'selected' только к выбранной кнопке
            this.classList.add('selected');
        });
    });
});