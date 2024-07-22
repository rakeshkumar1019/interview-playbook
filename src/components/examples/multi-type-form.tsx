'use client'
import { useState, ChangeEvent, FormEvent } from 'react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '../ui/button';
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
    const { name, value, type } = event.target;
    if (type === 'checkbox') {
      const isChecked = (event.target as HTMLInputElement).checked;

      setFormData(prevData => ({
        ...prevData,
        [name]:isChecked,
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
    <>
      <div className='border p-2  flex gap-1 md:gap-2 rounded-lg'>
        <h1>{formData.name}</h1>
        <h1>{formData.email}</h1>
        <h2>{formData.country}</h2>
        <h2>{formData.age}</h2>
        <h3>{formData.agree ? "Accepted" : "Not Accepted"}</h3>
      </div>

      <form onSubmit={handleSubmit} className="p-4 border mt-2 rounded-lg">
        <div className="mb-4">
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name" />
        </div>


        <div className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder='abc@gmail.com'
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="age">Age</Label>
          <Input
            type="number"
            id="age"
            name="age"
            value={formData.age === '' ? '' : formData.age}
            onChange={handleChange}
            placeholder="21"
          />

        </div>

        <div className="mb-4 flex items-center">

          <input
            type="checkbox"
            id="agree"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="agree" className="text-sm font-medium">I agree to the terms and conditions</label>
        </div>

        <div className="mb-4">
          <Label htmlFor="country">Country</Label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-lg w-full dark:bg-black dark:text-white"
          >
            <option value="USA">USA</option>
            <option value="India">India</option>
            <option value="UK">UK</option>
            <option value="Australia">Australia</option>
          </select>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    
    </>
  );
};

export default MultiTypeForm;
