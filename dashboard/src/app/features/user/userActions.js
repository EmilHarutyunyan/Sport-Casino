import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import TokenService from '../../../services/token.service'
import { API_ENDPOINT } from '../../../config/config'
import axiosInstance from '../../../services/axiosInstance';
import { logout } from './userSlice';

export const userLogin = createAsyncThunk(
  "user/login",

  async ({ user_name, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${API_ENDPOINT}sign-in`,
        { user_name, password },
        config
      );

      // store user's token in local storage
      // localStorage.setItem('userToken', data.userToken)
      TokenService.setUser(data.message);

      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const userLogout = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue,dispatch }) => {
    
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axiosInstance.post(
        `${API_ENDPOINT}log-out`,
        config
      );
      dispatch(logout());
      // store user's token in local storage
      // localStorage.setItem('userToken', data.userToken)
     

      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const registerUser = createAsyncThunk(
  'user/register',
  async ({ firstName, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      await axios.post(
        ' /api/user/register',
        { firstName, email, password },
        config
      )
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const createSuperAgent = createAsyncThunk(
  "user/createSuperAgent",
  async (person, { rejectWithValue, dispatch }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      
      const { data } = await axiosInstance.post(
        `${API_ENDPOINT}admin/create-super-agent`,
        person,
        config
      );
      return data;
    } catch (error) {
      
      // return custom error message from API if any
      if (error?.response && error.response?.data?.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const createAgent = createAsyncThunk(
  "user/createAgent",
  async (person, { rejectWithValue, dispatch }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axiosInstance.post(
        `${API_ENDPOINT}super-agent/create-agent`,
        person,
        config
      );

      // store user's token in local storage
      // localStorage.setItem('userToken', data.userToken)

      return data;
    } catch (error) {
      
      // return custom error message from API if any
      if (error?.response && error.response?.data?.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const createPlayer = createAsyncThunk(
  "user/createPlayer",
  async (person, { rejectWithValue, dispatch }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axiosInstance.post(
        `${API_ENDPOINT}agent/create-player`,
        person,
        config
      );
      return data;
    } catch (error) {
    
      // return custom error message from API if any
      if (error?.response && error.response?.data?.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const changeUserInfo = createAsyncThunk(
  "user/changeUserInfo",
  async (person, { rejectWithValue, dispatch }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axiosInstance.post(
        `${API_ENDPOINT}user/change-user-information`,
        person,
        config
      );
      return data;
    } catch (error) {
    
      // return custom error message from API if any
      if (error?.response && error.response?.data?.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const getUsersByRole = createAsyncThunk(
  "user/getUsersByRole",
  async (role="", { rejectWithValue, dispatch }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axiosInstance.post(
        `${API_ENDPOINT}get-users-by-role`,
        { role },
        config
      );
      let roleIdentification = role === "super_agent" ? 'superAgents' : role === 'agent' ? 'agents' : 'players'
      return { users: data.message.users, role: roleIdentification };
    } catch (error) {
      // return custom error message from API if any
      if (error?.response && error.response?.data?.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);



export const changeUserPass = createAsyncThunk(
  "user/changeUserInfo",
  async (passwords, { rejectWithValue, dispatch }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axiosInstance.post(
        `${API_ENDPOINT}user/update-password`,
        passwords,
        config
      );
      return data;
    } catch (error) {
   
      // return custom error message from API if any
      if (error?.response && error.response?.data?.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);


export const sendWallet = createAsyncThunk(
  "user/sendWallet",
  async (ballance, { rejectWithValue, dispatch }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axiosInstance.post(
        `${API_ENDPOINT}coin-transfer`,
        ballance,
        config
      );
      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error?.response && error.response?.data?.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getUserDetails = createAsyncThunk(
  'user/getUserDetails',
  async (id, { rejectWithValue }) => {
    try {
      // configure authorization header with user's token
       const config = {
         headers: {
           "Content-Type": "application/json",
         },
       };
       
      const { data } = await axiosInstance.post(
        `${API_ENDPOINT}user/get-user`,
        {
            "user_id":id
        },
        config
      );
      return data[0];
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const getUserAgents = createAsyncThunk(
  "user/getUserDetails",
  async (id, { rejectWithValue }) => {
    try {
      // configure authorization header with user's token
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axiosInstance.post(
        `${API_ENDPOINT}super-agent/get-agents`,
        {
          user_id: id,
        },
        config
      );
      return data[0];
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);