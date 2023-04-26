import axios from 'axios'
import { baseURL } from './constant'


export const instance = axios.create({
	withCredentials: true,
	baseURL: baseURL,
	
	headers: {
		// Authorization: `${token}`,
		'ngrok-skip-browser-warning': 'true',
	},
})

export const instanceAuth = axios.create({
	withCredentials: true,
	baseURL: baseURL,
	headers: {
		// Authorization: `${token}`,
		'ngrok-skip-browser-warning': 'true',
	},
})

// // token &&
// // 	instance.interceptors.request.use(config => {
// // 		config.headers.Authorization =  token
// // 		return config
// // 	})


