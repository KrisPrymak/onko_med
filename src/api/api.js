import { instance, instanceAuth } from "./axios";

export const authAPI = {
  async login(login, password) {
    const res = await instanceAuth.post("/api/v1/auth", { login, password });
    return res;
  },
};

export const registrationAPI = {
  async signUp(email) {
    const res = await instanceAuth.post("/api/v1/generate-temp-password", {
      email,
    });
    return res;
  },
};

export const userAPI = {
  async fetchUser(id, token) {
    const res = await instance.get(`/api/v1/users/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    return res;
  },
  async putUser(
    id,
    firstName,
    lastName,
    patronymic,
    phoneNumber,
    birthday,
    address,
    token
  ) {
    const res = await instance.put(
      `/api/v1/users/${id}`,
      { firstName, lastName, patronymic, phoneNumber, birthday, address },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(res);
    return res;
  },
  async deleteUser(id, token) {
    const res = await instance.delete(`/api/v1/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
    return res;
  },
  async fetchUserList(token) {
    const res = await instance.get("/api/v1/users", {
      headers: {
        Authorization: token,
      },
    });
    return res;
  },
  async updateUser(id, token, data) {
    const res = await instance.put(`/api/v1/users/${id}`, data, {
      headers: {
        Authorization: token,
      },
    });
    return res;
  },
};

export const notificationAPI = {
  async fetchAllNotifications(token) {
    const res = await instance.get("/api/v1/notifications", {
      headers: {
        Authorization: token,
      },
    });
    return res;
  },

  async fetchUserNotifications(id, token) {
    const res = await instance.get(
      `/api/v1/notifications/for-user?user-id=${id}&limit=5`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return res;
  },
};

export const employeeAPI = {
  
  async fetchEmployeeItem(id, token) {
    const res = await instance.get(`/api/v1/employee/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    return res;
  },

  async fetchEmployees(token) {
    const res = await instance.get("/api/v1/employee", {
      headers: {
        Authorization: token,
      },
    });
    return res;
  },
  async deleteEmployee(id, token) {
    const res = await instance.delete(`/api/v1/employee/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    return res;
  },
  async postEmployee(data, token) {
    const res = await instance.post("/api/v1/employee", data, {
      headers: {
        Authorization: token,
      },
    });
    return res;
  },
  async putEmployee(id, data, token) {
    const res = await instance.put(`/api/v1/employee/${id}`, data, {
      headers: {
        Authorization: token,
      },
    });
    return res;
  },
};

export const PdfAPI = {
  async fetchPdf(data, token) {
    const res = await instance.post("/api/v1/pdf", data, {
      headers: {
        Authorization: token,
      },
      responseType: "blob",
    });
    return res;
  },
};

export const newsAPI = {
  async fetchNews(isActual, token) {
    const res = await instance.get(`/api/v1/news?actual=${isActual}`, {
      headers: {
        Authorization: token,
      },
    });
    return res;
  },
  async postNewsItem(data, token) {
    const res = await instance.post("/api/v1/news", data, {
      headers: {
        Authorization: token,
      },
    });
    return res;
  },
  async deleteNewsItem(id, token) {
    const res = await instance.delete(`/api/v1/news/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    return res;
  },
};

export const departmentsAPI = {
  async fetchDepartments(token) {
    const res = await instance.get("/api/v1/departments", {
      headers: {
        Authorization: token,
      },
    });
    return res;
  },
};

export const consultsAPI = {
  async fetchConsultItem(consultId, token) {
    const res = await instance.get(`/api/v1/meetings/${consultId}`, {
      headers: {
        Authorization: token,
      },
    });
    return res;
  },

  async updateConsultItem(consultId, data, token) {
    const res = await instance.put(`/api/v1/meetings/${consultId}`, data, {
      headers: {
        Authorization: token,
      },
    });
    return res;
  },

  async deleteConsultItem(consultId, token) {
    const res = await instance.delete(`/api/v1/meetings/${consultId}`, {
      headers: {
        Authorization: token,
      },
    });
    return res;
  },

  async fetchAllConsults( token) {
    const res = await instance.get(`/api/v1/meetings`, {
      headers: {
        Authorization: token,
      },
    });
    return res;
  },

  async createConsultItem({employeeId, userId, startDate, comment, token }) {
    const res = await instance.post(`/api/v1/meetings`, {employeeId, userId, startDate, comment}, {
      headers: {
        Authorization: token,
      },
    });
    return res;
  },
  
  async fetchConsultsForUser(userId, token) {
    const res = await instance.get(
      `/api/v1/meetings/for-user?user-id=${userId}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return res;
  },
};