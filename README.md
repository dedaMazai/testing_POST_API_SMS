## REQUEST SMS (API POST)
В этом проекте я знакомился с обращением к API через POST-запросы.
Я реализовал React приложение в связке с Redux, так как мне нравится именно это направление и развиваюсь я в нем.
Также в проекте я знакомился с reactstrap и Bootstrap.
## The essence app:
* При запуске приложения появляется кнопка на экране `Login`, по нажатию на нее открывается форма для регистрации (нас встречает приветственное письмо, далее можно ввести свои данные, выбрать фотографию и увидеть preview), но основное на что я делал акцент это поля ввода телефона, при введении которого в правильном формате, появляется кнопка для его подтверждения. 
При нажатии на неё, производится API запрос на отправку кода подтверждения, если смс отправленно, появляется окно ввода отправленого кода.
После ввода кода и отправки, если новый пользователь зарегистрирован открывается основное приложение.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### `npm install`

The command to install the npm_modules folder is required to launch the application.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.