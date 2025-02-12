"use client";
import React, { useState, FormEvent } from "react";
import Link from "next/link";
import { RegistrationRoutePOSTData } from "@app/app/api/registration/route";
const LoginForm = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState("");
  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      window.location.href = '/profile';
    } else {
      alert('Login failed');
    }
  };


  return (
    <div className="w-[100%] flex items-center justify-center ">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg z-100">
        <h1 className="text-2xl font-bold text-center mb-6">Logowanie</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"
              onChange={(e) => { setUsername(e.target.value) }}
            />
          </div>
          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Hasło
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"
              onChange={(e) => { setPassword(e.target.value) }}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-sky-500 text-white font-bold rounded-md hover:bg-sky-600 transition"
          >
            Zaloguj się
          </button>
          <div className="w-full flex justify-center">
            <Link
              href="/auth/register"
              className="text-sky-600 p-1 text-center"
            >
              Nie masz konta?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [pesel, setPesel] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault()
    // await fetch(`http://localhost:3000/api/registration?username=${email}`, { method: "GET" }).then(async (res) => {
    //   console.log(res);
    //   const data: registrationGETResponseInterface = await res.json();

    //   console.log(data.userExists);
    //    setEmailCheck(Boolean(data.userExists))
    // })
    const PostData: RegistrationRoutePOSTData = {
      password: password,
      email: email,
      firstName: firstName,
      lastName: lastName,
      pesel: pesel,
      phone: phone,
      date: date,
      adress: adress,
    };
    await fetch("http://localhost:3000/api/registration", {
      method: "POST",
      body: JSON.stringify(PostData),
    }).then(async (res) => {
      console.log(res);
    });
  };

  return (
    <div className="w-[100%] flex items-center justify-center mt-[120px]">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg z-[100]">
        <h1 className="text-2xl font-bold text-center mb-6">Rejestracja</h1>
        <form onSubmit={handleRegister} className="space-y-4">
          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              Imię
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Nazwisko
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          {/* Date of Birth */}
          <div>
            <label
              htmlFor="dob"
              className="block text-sm font-medium text-gray-700"
            >
              Data urodzenia
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
          {/* PESEL */}
          <div>
            <label
              htmlFor="pesel"
              className="block text-sm font-medium text-gray-700"
            >
              PESEL
            </label>
            <input
              type="text"
              id="pesel"
              name="pesel"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"
              onChange={(e) => {
                setPesel(e.target.value);
              }}
            />
          </div>
          {/* Address */}
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Adres
            </label>
            <input
              type="text"
              id="address"
              name="address"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"
              onChange={(e) => {
                setAdress(e.target.value);
              }}
            />
          </div>
          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Telefon
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Hasło
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-sky-500 text-white font-bold rounded-md hover:bg-sky-600 transition"
          >
            Zarejestruj się
          </button>
          <div className="w-full flex justify-center">
            <Link href="/auth/login" className="text-sky-600 p-1 text-center">
              Masz już konto?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export { LoginForm, RegisterForm };
