import { PhoneDetails } from './features/productDetailsPage/context/types';
import { Phone } from './types/Phone';

const API_URL = 'https://crusaders.onrender.com/products';

export async function getPhones(): Promise<Phone[]> {
  try {
    const response = await fetch(`${API_URL}`);

    const phones = await response.json();

    return phones.data;
  } catch (error) {
    throw new Error('Failed to fetch phones');
  }
}

export async function getNewPhones(): Promise<Phone[]> {
  try {
    const response = await fetch(`${API_URL}/new`);

    const phones = await response.json();

    return phones.data;
  } catch (error) {
    throw new Error('Failed to fetch new phones');
  }
}

export async function getDiscountPhones(): Promise<Phone[]> {
  try {
    const response = await fetch(`${API_URL}/discount`);
    const phones = await response.json();

    return phones.data;
  } catch (error) {
    throw new Error('Failed to fetch discount phones');
  }
}

export async function getPhone(phoneId: string): Promise<PhoneDetails> {
  try {
    const response = await fetch(`${API_URL}/${phoneId}`);

    return await response.json();
  } catch (error) {
    throw new Error(`Failed to fetch phone with ID ${phoneId}`);
  }
}
