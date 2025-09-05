const API_BASE_URL = 'http://localhost:3001/api';

export const apiCall = async (endpoint: string, options: RequestInit = {}) => {
  const token = localStorage.getItem('token');
  
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'API request failed');
  }

  return data;
};

// Job API calls
export const jobAPI = {
  getAll: (search?: string, location?: string) => {
    const params = new URLSearchParams();
    if (search) params.append('search', search);
    if (location) params.append('location', location);
    const queryString = params.toString();
    return apiCall(`/jobs${queryString ? `?${queryString}` : ''}`);
  },
  
  getById: (id: string) => apiCall(`/jobs/${id}`),
  
  create: (jobData: any) => apiCall('/jobs', {
    method: 'POST',
    body: JSON.stringify(jobData),
  }),
  
  getMy: () => apiCall('/jobs/my'),
  
  getApplications: (jobId: string) => apiCall(`/jobs/${jobId}/applications`),
};

// Application API calls
export const applicationAPI = {
  apply: (applicationData: any) => apiCall('/applications', {
    method: 'POST',
    body: JSON.stringify(applicationData),
  }),
  
  getMy: () => apiCall('/applications/my'),
  
  updateStatus: (applicationId: string, status: string) => apiCall(`/applications/${applicationId}`, {
    method: 'PUT',
    body: JSON.stringify({ status }),
  }),
};