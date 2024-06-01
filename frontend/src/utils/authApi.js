import api from "./api";

export const login = async (userData) => {
    try {
        const response = await api.post('api/login', userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const register = async (userData) => {
    try {
        const response = await api.post('api/register', userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
