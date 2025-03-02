import React, { useState } from 'react';

function App() {
  // Задание 1: Два инпута и два абзаца
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  // Задание 2: Количество символов в инпуте
  const [inputText, setInputText] = useState('');
  const charCount = inputText.length;

  // Задание 3: Год рождения по возрасту
  const [age, setAge] = useState('');
  const currentYear = new Date().getFullYear();
  const birthYear = age ? currentYear - parseInt(age, 10) : '';

  // Задание 4: Конвертация Фаренгейта в Цельсия
  const [fahrenheit, setFahrenheit] = useState('');
  const celsius = fahrenheit ? ((parseFloat(fahrenheit) - 32) * (5 / 9)).toFixed(2) : '';

  // Задание 5: Среднее арифметическое 5 чисел
  const [numbers, setNumbers] = useState(['', '', '', '', '']);
  const average = numbers.reduce((sum, num) => sum + (parseFloat(num) || 0), 0) / numbers.filter(num => num !== '').length || 0;

  // Задание 6: Сумма и произведение двух чисел
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const calculateSum = () => {
    setResult(parseFloat(num1) + parseFloat(num2));
  };

  const calculateProduct = () => {
    setResult(parseFloat(num1) * parseFloat(num2));
  };

  // Задание 7: Разница между датами в днях
  const [date1, setDate1] = useState('');
  const [date2, setDate2] = useState('');
  const [dateDiff, setDateDiff] = useState('');

  const calculateDateDiff = () => {
    const diffTime = Math.abs(new Date(date2) - new Date(date1));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDateDiff(diffDays);
  };

  // Задание 8: Сумма цифр числа
  const [numberInput, setNumberInput] = useState('');
  const [digitSum, setDigitSum] = useState('');

  const calculateDigitSum = () => {
    const sum = String(numberInput).split('').reduce((acc, digit) => acc + Number(digit), 0);
    setDigitSum(sum);
  };

  // Задание 9: Произведение делителей числа
  const [divisorInput, setDivisorInput] = useState('');
  const [divisorProduct, setDivisorProduct] = useState('');

  const calculateDivisorProduct = () => {
    const num = parseInt(divisorInput, 10);
    let product = 1;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        product *= i;
      }
    }
    setDivisorProduct(product);
  };

  // Задание 10: Транслит текста
  const [textareaText, setTextareaText] = useState('');
  const translitText = textareaText
    .replace(/[а-я]/gi, (char) => {
      const translitMap = {
        а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'yo', ж: 'zh', з: 'z', и: 'i', й: 'y',
        к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f',
        х: 'h', ц: 'ts', ч: 'ch', ш: 'sh', щ: 'sch', ъ: '', ы: 'y', ь: '', э: 'e', ю: 'yu', я: 'ya',
      };
      return translitMap[char.toLowerCase()] || char;
    });

  // Задание 11: Сумма чисел в textarea
  const [textareaNumbers, setTextareaNumbers] = useState('');
  const numbersSum = textareaNumbers
    .split('\n')
    .reduce((sum, num) => sum + (parseFloat(num) || 0), 0);

  // Задание 12: Чекбокс с приветствием
  const [isChecked, setIsChecked] = useState(false);

  // Задание 13: Выбор языков
  const [languages, setLanguages] = useState({
    html: false,
    css: false,
    js: false,
  });

  // Задание 14: Чекбокс для возраста
  const [isAdult, setIsAdult] = useState(false);

  // Задание 15: Видимость абзаца
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      {/* Задание 1: Два инпута и два абзаца */}
      <h2>Задание 1</h2>
      <input value={input1} onChange={(e) => setInput1(e.target.value)} placeholder="Введите текст 1" />
      <input value={input2} onChange={(e) => setInput2(e.target.value)} placeholder="Введите текст 2" />
      <p>Текст 1: {input1}</p>
      <p>Текст 2: {input2}</p>

      {/* Задание 2: Количество символов в инпуте */}
      <h2>Задание 2</h2>
      <input value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="Введите текст" />
      <p>Количество символов: {charCount}</p>

      {/* Задание 3: Год рождения по возрасту */}
      <h2>Задание 3</h2>
      <input value={age} onChange={(e) => setAge(e.target.value)} placeholder="Введите возраст" />
      <p>Год рождения: {birthYear}</p>

      {/* Задание 4: Конвертация Фаренгейта в Цельсия */}
      <h2>Задание 4</h2>
      <input value={fahrenheit} onChange={(e) => setFahrenheit(e.target.value)} placeholder="Введите градусы Фаренгейта" />
      <p>Градусы Цельсия: {celsius}</p>

      {/* Задание 5: Среднее арифметическое 5 чисел */}
      <h2>Задание 5</h2>
      {numbers.map((num, index) => (
        <input
          key={index}
          value={num}
          onChange={(e) => {
            const newNumbers = [...numbers];
            newNumbers[index] = e.target.value;
            setNumbers(newNumbers);
          }}
          placeholder={`Число ${index + 1}`}
        />
      ))}
      <p>Среднее арифметическое: {average.toFixed(2)}</p>

      {/* Задание 6: Сумма и произведение двух чисел */}
      <h2>Задание 6</h2>
      <input value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Число 1" />
      <input value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Число 2" />
      <button onClick={calculateSum}>Сумма</button>
      <button onClick={calculateProduct}>Произведение</button>
      <p>Результат: {result}</p>

      {/* Задание 7: Разница между датами в днях */}
      <h2>Задание 7</h2>
      <input type="date" value={date1} onChange={(e) => setDate1(e.target.value)} />
      <input type="date" value={date2} onChange={(e) => setDate2(e.target.value)} />
      <button onClick={calculateDateDiff}>Найти разницу</button>
      <p>Разница в днях: {dateDiff}</p>

      {/* Задание 8: Сумма цифр числа */}
      <h2>Задание 8</h2>
      <input value={numberInput} onChange={(e) => setNumberInput(e.target.value)} onBlur={calculateDigitSum} placeholder="Введите число" />
      <p>Сумма цифр: {digitSum}</p>

      {/* Задание 9: Произведение делителей числа */}
      <h2>Задание 9</h2>
      <input value={divisorInput} onChange={(e) => setDivisorInput(e.target.value)} onBlur={calculateDivisorProduct} placeholder="Введите число" />
      <p>Произведение делителей: {divisorProduct}</p>

      {/* Задание 10: Транслит текста */}
      <h2>Задание 10</h2>
      <textarea value={textareaText} onChange={(e) => setTextareaText(e.target.value)} placeholder="Введите текст" />
      <p>Транслит: {translitText}</p>

      {/* Задание 11: Сумма чисел в textarea */}
      <h2>Задание 11</h2>
      <textarea value={textareaNumbers} onChange={(e) => setTextareaNumbers(e.target.value)} placeholder="Введите числа, каждое с новой строки" />
      <p>Сумма чисел: {numbersSum}</p>

      {/* Задание 12: Чекбокс с приветствием */}
      <h2>Задание 12</h2>
      <label>
        <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
        Отметьте для приветствия
      </label>
      <p>{isChecked ? 'Привет, пользователь!' : 'Пока, пользователь!'}</p>

      {/* Задание 13: Выбор языков */}
      <h2>Задание 13</h2>
      <label>
        <input type="checkbox" checked={languages.html} onChange={() => setLanguages({ ...languages, html: !languages.html })} />
        HTML
      </label>
      <label>
        <input type="checkbox" checked={languages.css} onChange={() => setLanguages({ ...languages, css: !languages.css })} />
        CSS
      </label>
      <label>
        <input type="checkbox" checked={languages.js} onChange={() => setLanguages({ ...languages, js: !languages.js })} />
        JavaScript
      </label>
      <p>HTML: {languages.html ? 'Выбран' : 'Не выбран'}</p>
      <p>CSS: {languages.css ? 'Выбран' : 'Не выбран'}</p>
      <p>JavaScript: {languages.js ? 'Выбран' : 'Не выбран'}</p>

      {/* Задание 14: Чекбокс для возраста */}
      <h2>Задание 14</h2>
      <label>
        <input type="checkbox" checked={isAdult} onChange={() => setIsAdult(!isAdult)} />
        Мне есть 18 лет
      </label>
      {isAdult ? (
        <div>
          <h2>Ура, вам уже есть 18</h2>
          <p>Здесь расположен контент только для взрослых</p>
        </div>
      ) : (
        <div>
          <p>Увы, вам еще нет 18 лет :(</p>
        </div>
      )}

      {/* Задание 15: Видимость абзаца */}
      <h2>Задание 15</h2>
      <label>
        <input type="checkbox" checked={isVisible} onChange={() => setIsVisible(!isVisible)} />
        Показать абзац
      </label>
      {isVisible && <p>Этот абзац видим!</p>}
    </div>
  );
}

export default App;