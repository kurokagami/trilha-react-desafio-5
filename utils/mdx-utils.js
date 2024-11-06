import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => { 
    // Melhorar tratamento de erro
    try {
      const { data, status } = await api.get(`/posts?id=eq.${id}`);  // Busca o post pelo 'id'
  
      if (status === 200 && data.length > 0) {
        return data[0]; 
      } else {
        console.error('Post não encontrado, status:', status);
        return null;
      }
    } catch (error) {
      console.error('Erro ao buscar o post por ID', error);
      return {};
    }
  };