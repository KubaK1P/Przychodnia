import { parse, serialize, SerializeOptions } from 'cookie';
import { ReadonlyHeaders } from 'next/dist/server/web/spec-extension/adapters/headers';
import { NextResponse } from 'next/server';

// Set a cookie
export const setCookie = (
  res: NextResponse,
  name: string,
  value: unknown,
  options: SerializeOptions = {}
): void => {
  const stringValue =
    typeof value === 'object' ? `j:${JSON.stringify(value)}` : String(value);

  const serializedCookie = serialize(name, stringValue, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    ...options,
  });

  res.headers.append('Set-Cookie', serializedCookie);
};

// Remove a cookie
export const removeCookie = (res: NextResponse, name: string): void => {
  setCookie(res, name, '', { maxAge: -1 });
};

// Get a cookie
export const getCookie = (
  headers: Headers | ReadonlyHeaders,
  name: string
): string | object | undefined => {
  const cookieHeader = headers.get('cookie');
  const cookies = parse(cookieHeader || '');
  const value = cookies[name];

  if (!value) return undefined;

  // Check if the cookie is a serialized JSON object (starts with "j:")
  if (value.startsWith('j:')) {
    try {
      return JSON.parse(value.slice(2)); // Remove the 'j:' prefix and parse
    } catch (error) {
      console.error('Failed to parse cookie value as JSON:', error);
      return undefined; // If parsing fails, return undefined
    }
  }

  return value; // If it's not JSON, just return the plain string value
};

