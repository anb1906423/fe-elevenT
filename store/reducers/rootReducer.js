import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import customerReducer from './customerReducer';

const persistCommonConfig = {
    storage: storage,
    stateReconciler: autoMergeLevel2,
};

const customerPersistConfig = {
    ...persistCommonConfig,
    key: 'customer',
    whitelist: ['isLoggedIn', 'customerInfo'],
};

export default () =>
    combineReducers({
        customer: persistReducer(customerPersistConfig, customerReducer)
    })