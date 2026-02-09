'use client'

import { useState } from "react";
import Input from "@/elements/Input";


interface FormData { name: string, message: string, phone: string };

function validateData(data: FormData) {
  const errors: { [key: string]: string } = {};
  const requiredMessage = "Обов'язково для заповнення.";

  const phoneRegex = /^\+?[0-9]{10,15}$/;
  if (!data.phone || data.phone.trim() === "") {
    errors.phone = requiredMessage;
  }

  if (data.phone && !phoneRegex.test(data.phone)) {
    errors.phone = "Невірний номер телефону. Він повинен містити від 10 до 15 цифр.";
  }

  return errors;
}




export default function Form() {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [errors, setErrors] = useState<null | { [key: string]: string }>(null);

  function submit(data: FormData) {
    const errors = validateData(data);

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    setErrors(null);

    const preparedData = {
      name: data.name.trim(),
      message: data.message.trim(),
      phone: data.phone.trim(),
    };

    return {
      success: true,
      data: preparedData,
    };
  }


  return (
    <div className="container px-5 md:px-15 !mb-[70px] !md:mb-[106px]">
      <h2 className="h2 mb-6">Для співпраці</h2>

      <div className="flex max-md:flex-col justify-between gap-14">
        <div className="w-full max-w-[526px]">
          <p className="text-p">Якщо у вас виникли питання або ви бажаєте отримати консультацію чи обговорити можливість співпраці, залиште свої контактні дані, і ми обов'язково зв'яжемося з вами.</p>
        </div>

        <div className="flex flex-col gap-4 md:gap-7 w-full max-w-[506px] max-md:mx-auto">
          <div className="w-full">
            <Input
              value={name}
              onChange={setName}
              placeholder="Імʼя"
              errored={!!errors?.name}
            />
            {
              !errors?.name ? null :
                <span className='error-message'>{errors.name}</span>
            }
          </div>
          <div className="w-full">
            <Input
              value={phone}
              onChange={setPhone}
              placeholder="Номер Телефону"
              errored={!!errors?.phone}
            />
            {
              !errors?.phone ? null :
                <span className='error-message'>{errors.phone}</span>
            }
          </div>
          <div className="w-full">
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Повідомлення"
              className={`input ${errors?.message && 'errored'}`}
              rows={5}
            />
            {
              !errors?.message ? null :
                <span className='error-message'>{errors.message}</span>
            }
          </div>

          <button
            type="button"
            className="h-[50px] bg-black rounded-[15px] text-white text-base !text-center leading-[50px] hover:bg-gray-500 transition-colors duration-300"
            onClick={() => submit({ name, phone, message })}
          >
            Надіслати
          </button>
        </div>
      </div>
    </div>
  )
}
