import axios from 'axios';

const mockApi = axios.create({
    baseURL: 'https://944ba3c5-94c3-4369-a9e6-a509d65912e2.mock.pstmn.io/',
    headers: { 
        'x-api-key': 'PMAK-5ef63db179d23c004de50751-10300736bc550d2a891dc4355aab8d7a5c',
        'Content-Type': 'application/json'
    }
});

export default mockApi