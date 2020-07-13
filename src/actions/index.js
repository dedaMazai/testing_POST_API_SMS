const runAuth= () => {
    return {
        type: 'RUN_AUTH'
    }
}
//Открываем регистрацию

const runApp= () => {
    return {
        type: 'RUN_APP'
    }
}
//Открываем приложение

const massageError = () => {
    return {
        type: 'MENU_ERROR',
    }
}

const selectBut = (id) => {
    return {
        type: 'SELECT_BUTTONS',
        payload: id
    }
}
//Выбор кнопки меню

const onward = () => {
    return {
        type: 'ONWARD',
    }
}
//Выполняем функцию кнопки "Далее"

export {
    runAuth,
    runApp,
    massageError,
    selectBut,
    onward
};