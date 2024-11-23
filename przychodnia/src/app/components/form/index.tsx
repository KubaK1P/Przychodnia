"use client";
import React from "react";
import Link from "next/link";
const LoginForm = () => {
  const handleLogin = () => {
    // do something
  };

  return (
    <div className="w-[100%] flex items-center justify-center bg-sky-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
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
  const handleRegister = () => {
    // do something
  };

  return (
    <div className="w-[100%] flex items-center justify-center bg-sky-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
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
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-sky-500 text-white font-bold rounded-md hover:bg-sky-600 transition"
          >
            Zarejestruj się
          </button>
          <div className="w-full flex justify-center">
            <Link
              href="/auth/login"
              className="text-sky-600 p-1 text-center"
            >
            Masz już konto?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export { LoginForm, RegisterForm };
