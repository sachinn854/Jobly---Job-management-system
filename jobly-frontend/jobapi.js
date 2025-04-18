// src/api.js
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

export async function getJobs() {
  try {
    const res = await axios.get(`${BASE_URL}/jobs`);
    return res.data;
  } catch (err) {
    console.error("API Error:", err);
    throw err;
  }
}
