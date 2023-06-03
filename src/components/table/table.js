import "./table.css";

const Table = () => {
  

  return (
    <ul className="tests__naming">
    <li className="tests__title tests__title_data">
      <p>Дата</p>
    </li>
    <li className="tests__title tests__title_test">
      <p>Шифр задачи</p>
    </li>
    <li className="tests__title tests__title_project">
      <p>Шифр проекта</p>
    </li>
    <li className="tests__title tests__title_task">
      <p>Задача</p>
    </li>
    <li className="tests__title tests__title_status">
      <p>Статус</p>
    </li>
    <li className="tests__title tests__title_respon">
      <p>Ответственный</p>
    </li>
    <li className="tests__title tests__title_diment">
      <p>Переназначить</p>
    </li>
    <li className="tests__title tests__title_best">
      <p>Приоритет</p>
    </li>
    <li className="tests__title tests__title_comment">
      <p>Комментарий</p>
    </li>
    <li className="tests__title tests__title_time">
      <p>План Время</p>
    </li>
    <li className="tests__title tests__title_timet">
      <p>Факт время</p>
    </li>
    <li className="tests__title tests__title_begin">
      <p>Начал</p>
    </li>
    <li className="tests__title tests__title_begin">
      <p>Завершил</p>
    </li>
  </ul>
  );
};

export default Table;
