import axios from "axios";
<<<<<<< HEAD

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8181";

export const getCards = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/cards`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
    //throw new Error(error.message);
  }
};

export const getCard = async (cardId) => {
  try {
    const { data } = await axios.get(`${apiUrl}/cards/${cardId}`);
=======
const apiUrl = "http://localhost:8181";
export const getCards = async () => {
  try {
    const response = await axios.get(`${apiUrl}/cards`);
    const data = response.data;
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const getMyCards = async () => {
  console.log("get my cards");
  try {
    const response = await axios.get(`${apiUrl}/cards/my-cards`);
    const data = response.data;
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

<<<<<<< HEAD
export const getMyCards = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/cards/my-cards`);
=======
export const deleteCard = async (cardId) => {
  try {
    const { data } = await axios.delete(`${apiUrl}/cards/${cardId}`);
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

<<<<<<< HEAD
export const createCard = async (card) => {
  try {
    const { data } = await axios.post(`${apiUrl}/cards/`, card);
=======
export const getCard = async (cardId) => {
  try {
    const { data } = await axios.get(`${apiUrl}/cards/${cardId}`);
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

<<<<<<< HEAD
export const deleteCard = async (cardId) => {
  try {
    const { data } = await axios.delete(`${apiUrl}/cards/${cardId}`);
=======
export const createCard = async (card) => {
  try {
    const { data } = await axios.post(`${apiUrl}/cards/`, card);
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const editCard = async (cardId, normalaizedCard) => {
  try {
    const { data } = await axios.put(
      `${apiUrl}/cards/${cardId}`,
      normalaizedCard
    );
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const changeLikeStatus = async (cardId) => {
  try {
    const { data } = await axios.patch(`${apiUrl}/cards/${cardId}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
