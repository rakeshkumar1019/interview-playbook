const javascriptUseState: string = `import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      You pressed me {count} times
    </button>
  );
}`
const tyescriptUseState: string = `import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      You pressed me {count} times
    </button>
  );
}`

export const useStateCodes = [
    {
        code: tyescriptUseState,
        filename: "App.tsx",
        language: "typescript",
        highlightLines: [1, 4, 7, 12],
    },
    {
        code: javascriptUseState,
        filename: "App.jsx",
        language: "javascript",
        highlightLines: [1, 4, 7, 12],
    }

]

const typescriptMultiTypeForm:string = `import { useState, ChangeEvent, FormEvent } from 'react';
interface FormData {
  name: string;
  email: string;
  age: number | '';
  agree: boolean;
  country: string;
}

const MultiTypeForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: 'Rakesh',
    email: 'rakesh@gmail.com ',
    age: 24,
    agree: true,
    country: 'India'
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = event.target as HTMLInputElement | HTMLSelectElement;
    if (type === 'checkbox') {
      setFormData(prevData => ({
        ...prevData,
        [name]: checked
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form Data Submitted:', formData);
  };
  return (
      <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          <input type="number" name="age" value={formData.age === '' ? '' : formData.age} onChange={handleChange} />
          <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} />
          <select name="country" value={formData.country} onChange={handleChange} >
            <option value="USA">USA</option>
            <option value="India">India</option>
            <option value="UK">UK</option>
            <option value="Australia">Australia</option>
          </select>
        <Button type="submit">Submit</Button>
      </form>
  );
};

export default MultiTypeForm;`

export const multiTypeFormCodes = [
  {
      code: typescriptMultiTypeForm,
      filename: "Form.tsx",
      language: "typescript",
      highlightLines: [1,20,22,24,27,29],
  },
]

export const updateStateWithOutPreviousState  = `function handleClick() {
  setCount(count + 1); // setCount(10 + 1)
  setCount(count + 1); // setCount(10 + 1)
  setCount(count + 1); // setCount(10 + 1)
}`

export const updateStateWithPreviousState  = `function handleClick() {
  setCount(prevCount => prevCount + 1) // setCount(10 + 1=> 11)
  setCount(prevCount => prevCount + 1) // setCount(11 + 1 => 12)
  setCount(prevCount => prevCount + 1) // setCount(12 + 1 => 13)
}`