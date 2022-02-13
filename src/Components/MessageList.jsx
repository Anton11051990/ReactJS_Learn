import { useEffect, useState } from "react";

import "../App.css";

const MessageList = () => {
  const [value, setValue] = useState(""); // Состояние инпута
  const [messages, setMessages] = useState([
    // Состояние Сообщения
    { id: 1, value: "Hi", aftor: "User" },
    { id: 2, value: "React", aftor: "bot" },
  ]);
  // Функция в которой сохраняется введённое значение пользователем
  const handleClickMessag = () => {
    //провверка на запрет отправки пустого сообщения, если пользователь ввёл значение =>
    //записать в состояние под именем пользователя
    if (value) {
      //обработка стейта
      setMessages((state) => [...state, { value, aftor: "User" }]);
      //очистка инпута после отправки
      setValue("");
    }
  };
  //проверка на то кто ввёл сообщение + задержка времени между отправкой сообщения от бота
  useEffect(() => {
    const lastMessag = messages[messages.length - 1];
    let taimer = null;
    if (lastMessag?.aftor === "User") {
      taimer = setTimeout(() => {
        setMessages((state) => [
          ...state,
          { value: "Hello i am bot", aftor: "bot" },
        ]);
      }, 500);
    }
    return () => clearInterval(taimer);
  }, [messages]);

  // Переменная в которой происходит перебор массива объектов при помощи метода map и его отрисовка
  const arrayItemMessag = messages.map((item) => {
    return (
      <div className="message-value" key={item.id}>
        <p className="text">
          {item.aftor}:{item.value}
        </p>
      </div>
    );
  });
  return (
    <>
      {/* Рендерит переменную содержащюю массив из элементов */}
      <div>{arrayItemMessag}</div>
      <div>
        {/* Отображает введёное сообщение */}
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Введите сообщение..."
        />
        {/* Отправка сообщения вызывает функцию которая 
        отображает ответ пользователя */}
        <button onClick={handleClickMessag}>Push</button>
      </div>
    </>
  );
};

export default MessageList;
