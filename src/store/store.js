import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authSlice from './AuthSlice'
import MedicalCareSlice from './MedicalCareSlice'
import NewsSlice from './NewsSlice'
import NotificationSlice from './NotificationSlice'
import RegSlice from './RegSlice'
import UserServicesSlice from './UserServicesSlice'
import UserSlice from './UserSlice'
import employeeSlice from './employeeSlice'
import ConsultsSlice from './ConsultsSlice'

const rootReducer = combineReducers({
	reg: RegSlice,
	auth: authSlice,
	user: UserSlice,
	consults: ConsultsSlice,
	medicalCare: MedicalCareSlice,
	userServices: UserServicesSlice,
	news: NewsSlice,
	employee: employeeSlice,
	notifications: NotificationSlice,
})

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['auth', 'user'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export const persistor = persistStore(store)

export default store
