import React, { useState } from 'react';

function App() {
  // Задание 1: Добавление нового элемента в массив
  const [items, setItems] = useState([1, 2, 3]);

  const addItem = () => {
    setItems([...items, items.length + 1]);
  };

  // Задание 2: Добавление текста из инпута в список
  const [inputText, setInputText] = useState('');
  const [listItems, setListItems] = useState(['Элемент 1', 'Элемент 2']);

  const addListItem = () => {
    if (inputText.trim()) {
      setListItems([...listItems, inputText]);
      setInputText('');
    }
  };

  // Задание 3: Возведение числа в квадрат
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const squareNumber = (index) => {
    const newNumbers = [...numbers];
    newNumbers[index] = newNumbers[index] ** 2;
    setNumbers(newNumbers);
  };

  // Задание 4: Удаление элемента из списка
  const removeItem = (index) => {
    const newListItems = listItems.filter((_, i) => i !== index);
    setListItems(newListItems);
  };

  // Задание 5: Перенос текста li в инпут
  const [editInput, setEditInput] = useState('');

  const editItem = (text) => {
    setEditInput(text);
  };

  // Задание 6: Добавление нового элемента в массив
  const [newItems, setNewItems] = useState([10, 20, 30]);

  const addNewItem = () => {
    setNewItems([...newItems, newItems.length * 10 + 10]);
  };

  // Задание 7: Три инпута и добавление новой li
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [multiInputList, setMultiInputList] = useState([]);

  const addMultiInputItem = () => {
    if (input1.trim() && input2.trim() && input3.trim()) {
      setMultiInputList([...multiInputList, { input1, input2, input3 }]);
      setInput1('');
      setInput2('');
      setInput3('');
    }
  };

  // Задание 8: Удаление элемента из списка с тремя инпутами
  const removeMultiInputItem = (index) => {
    const newMultiInputList = multiInputList.filter((_, i) => i !== index);
    setMultiInputList(newMultiInputList);
  };

  // Задание 9: Перенос данных объекта в инпуты
  const editMultiInputItem = (item) => {
    setInput1(item.input1);
    setInput2(item.input2);
    setInput3(item.input3);
  };

  // Задание 10: Показ полного описания продукта
  const [products] = useState([
    { id: 1, name: 'Продукт 1', description: 'Описание продукта 1' },
    { id: 2, name: 'Продукт 2', description: 'Описание продукта 2' },
    { id: 3, name: 'Продукт 3', description: 'Описание продукта 3' },
  ]);
  const [showDescription, setShowDescription] = useState(null);

  const toggleDescription = (id) => {
    setShowDescription(showDescription === id ? null : id);
  };

  return (
    <div>
      {/* Задание 1: Добавление нового элемента в массив */}
      <h2>Задание 1</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={addItem}>Добавить элемент</button>

      {/* Задание 2: Добавление текста из инпута в список */}
      <h2>Задание 2</h2>
      <input value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="Введите текст" />
      <button onClick={addListItem}>Добавить в список</button>
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Удалить</button>
          </li>
        ))}
      </ul>

      {/* Задание 3: Возведение числа в квадрат */}
      <h2>Задание 3</h2>
      <ul>
        {numbers.map((number, index) => (
          <li key={index} onClick={() => squareNumber(index)}>
            {number}
          </li>
        ))}
      </ul>

      {/* Задание 4: Удаление элемента из списка */}
      <h2>Задание 4</h2>
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Удалить</button>
          </li>
        ))}
      </ul>

      {/* Задание 5: Перенос текста li в инпут */}
      <h2>Задание 5</h2>
      <input value={editInput} onChange={(e) => setEditInput(e.target.value)} placeholder="Редактировать" />
      <ul>
        {listItems.map((item, index) => (
          <li key={index} onClick={() => editItem(item)}>
            {item}
          </li>
        ))}
      </ul>

      {/* Задание 6: Добавление нового элемента в массив */}
      <h2>Задание 6</h2>
      <ul>
        {newItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={addNewItem}>Добавить элемент</button>

      {/* Задание 7: Три инпута и добавление новой li */}
      <h2>Задание 7</h2>
      <input value={input1} onChange={(e) => setInput1(e.target.value)} placeholder="Введите значение 1" />
      <input value={input2} onChange={(e) => setInput2(e.target.value)} placeholder="Введите значение 2" />
      <input value={input3} onChange={(e) => setInput3(e.target.value)} placeholder="Введите значение 3" />
      <button onClick={addMultiInputItem}>Добавить</button>
      <ul>
        {multiInputList.map((item, index) => (
          <li key={index}>
            {item.input1}, {item.input2}, {item.input3}
            <button onClick={() => removeMultiInputItem(index)}>Удалить</button>
            <button onClick={() => editMultiInputItem(item)}>Редактировать</button>
          </li>
        ))}
      </ul>

      {/* Задание 10: Показ полного описания продукта */}
      <h2>Задание 10</h2>
      {products.map((product) => (
        <div key={product.id}>
          <p>
            {product.name}
            <button onClick={() => toggleDescription(product.id)}>
              {showDescription === product.id ? 'Скрыть описание' : 'Показать описание'}
            </button>
          </p>
          {showDescription === product.id && <p>{product.description}</p>}
        </div>
      ))}
    </div>
  );
}

export default App;