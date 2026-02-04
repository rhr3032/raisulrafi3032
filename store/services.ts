import { defineStore } from 'pinia';
import axios from '@/utils/axios';
import type { ServiceType } from '@/types/services/ServiceTypes';

export const useServicesStore = defineStore('services', {
  state: () => ({
    services: [] as ServiceType[],
    selectedService: null as ServiceType | null
  }),
  getters: {
    getServices: (state): ServiceType[] => state.services,
    getSelectedService: (state): ServiceType | null => state.selectedService
  },
  actions: {
    async fetchServices() {
      try {
        const response = await axios.get('/api/services');
        this.services = response.data;
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    },
    async fetchService(slug: string) {
      try {
        const response = await axios.get(`/api/services/${slug}`);
        this.selectedService = response.data;
      } catch (error) {
        console.error('Error fetching service:', error);
      }
    }
  }
});
