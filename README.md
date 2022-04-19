## REQUEST SMS (API POST)
!!! The API is not working at the moment !!!
!!! The API is not working at the moment !!!
!!! The API is not working at the moment !!!
..............
In this project, I got acquainted with the API for the first time.
Implementing React + Redux application, using Bootstrap.
..............
В данном проекте я впервые познакомился с API.
Реализуя React + Redux приложение, с применением Bootstrap.
## The essence app:
When launching the application, the `Login` button appears, clicking on it opens a registration form (we are greeted by a welcome letter, then you can enter your details, select a photo and see a preview), PAY ATTENTION to the phone input field, if this field is filled in correctly, a confirmation button becomes available. 
When pressed, a POST request is made to send a confirmation code, if an SMS is sent to the entered number, a confirmation window is displayed.
After confirming the code, if a new user is registered, the main application opens.
..............
При запуске приложения появляется кнопка `Login`, нажимая на нее открывается форма для регистрации (нас встречает приветственное письмо, далее можно ввести свои данные, выбрать фотографию и увидеть preview), ОБРАТИТЕ ВНИМАНИЕ на поле ввода телефона, при правильном заполнении данного поля, становится доступна кнопка подтверждения. 
При нажатии которой, производится POST запрос для отправки кода подтверждения, если смс отправленно на введеный номер, отображается окно подтверждения.
После подтверждения кода, если новый пользователь зарегистрирован открывается основное приложение.
## Preview app:
![Иллюстрация к проекту](https://github.com/dedaMazai/testing_POST_API_SMS/raw/master/Preview.gif)

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
