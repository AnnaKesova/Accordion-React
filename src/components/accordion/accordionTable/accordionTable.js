import "../../table/table.css";

const AccordionTable = () => {
  return (
    <ul className="tests__naming">
      <li className="tests__title tests__title_data">
        <p>05.05.2005</p>
      </li>
      <li className="tests__title tests__title_test">
        <p>Шифр задачи</p>
      </li>
      <li className="tests__title tests__title_project">
        <p>48/21</p>
      </li>
      <li className="tests__title tests__title_task">
        <p>Прозвонить Копьева</p>
      </li>
      <li className="tests__title tests__title_status">
        <select id="mySelect">
          <option value="yes">Выполнено</option>
          <option value="pause">На паузе</option>
          <option value="during">В работе</option>
        </select>
      </li>
      <li className="tests__title tests__title_respon">
        <p>Иванов В.А</p>
      </li>
      <li className="tests__title tests__title_diment">
        <p>Свердлова А.И</p>
      </li>
      <li className="tests__title tests__title_best">
        <p>2</p>
      </li>
      <li className="tests__title tests__title_comment">
        <p>Комментарий</p>
      </li>
      <li className="tests__title tests__title_time">
        <p>00.15.00</p>
      </li>
      <li className="tests__title tests__title_timet">
        <p>00.00.14</p>
      </li>
      <li className="tests__title tests__title_begin">
        <p>01.01.01</p>
      </li>
      <li className="tests__title tests__title_begin">
        <p>02.02.02</p>
      </li>
    </ul>
  );
};

export default AccordionTable;
