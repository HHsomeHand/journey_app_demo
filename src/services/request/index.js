import axios from 'axios'

import { BASE_URL, TIMEOUT } from './config'
import { useMainStore } from '@/stores/main';
import { storeToRefs } from 'pinia';

class HYRequest {
  constructor(baseURL, timeout=10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    });

    const mainStore = useMainStore();

    const {isLoading} = storeToRefs(mainStore);

    this.instance.interceptors.request.use(res => {
      isLoading.value = true;
      return res;
    });
    
    this.instance.interceptors.response.use(res => {
      isLoading.value = false;
      return res.data;
    }, err => {
      isLoading.value = false;
      return err;
    });
  }

  request(config) {
    return this.instance.request(config);
  }

  get(url, params) {
    return this.instance.get(url, {params});
  }

  post(url, data) {
    return this.instance.get(url, data);
  }
}

export const request=  new HYRequest(BASE_URL, TIMEOUT)


