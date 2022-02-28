
export const userStorageItem = 'oidc.user:http://62.108.57.218:8086/auth/realms/delivery:delivery'

export const getApiConfig = ()=>{
  const currentUser = JSON.parse(sessionStorage.getItem(userStorageItem))
  const token = currentUser.access_token
 
  return {headers: { 
      'Authorization': `Bearer ${token}` ,  
      // 'Content-Type': 'application/json',
      // 'Content-Type': 'multipart/form-data; boundary=ebf9f03029db4c2799ae16b5428b06bd'
    }
    }
}


