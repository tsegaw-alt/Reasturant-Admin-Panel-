import axios from 'axios'
import { getApiConfig } from "../../services/apiConfig"
import {getHeader} from "../../services/api"
import { Store } from 'vuex'
const state = {
  restaurants: [],
  fileId: '',
  category: [],
  foodCategory: [],
  toppings: [],
  menuItems: [],
  image: ''
}

const getters = {
  menuItemsList: state => state.menuItems,
  getImage: state => state.image,
  restaurantList: state => state.restaurants,
  getFileId: state => state.fileId,
  categoryList: state => state.category,
  foodCategoryList: state => state.foodCategory,
  toppingsList: state => state.toppings
}

const actions = {

  async fetchRestaurants ({ commit }) {
    await axios.get('/restaurant/api/restaurants')
    .then(function (response) {
      console.log("Status "+response.status);
      console.log('file')
      console.log(response.data)
      commit('setRestaurants', response.data)
    })
    .catch(function (error) {
      if (error.response) {
        console.log('Request made and server responded')
        // console.log(error.response.data);
        console.log(error.response.status);
        // console.log(error.response.headers);
      } else if (error.request) {
        console.log('The request was made but no response was received')
        console.log(error.request);
      } else {
        console.log('Something happened in setting up the request that triggered an Error')
        console.log('Error', error.message);
      }
  
    });
  },

  async fetchImage ({ commit },id) {
    const config =  getApiConfig();
    await axios.get(`/restaurant/api/picturs/${id}`, config)
    .then(function (response) {
      console.log("Status "+response.status);
      console.log(response.data)
      commit('setImage', response.data)
    })
    .catch(function (error) {
      if (error.response) {
        console.log('Request made and server responded')
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log('The request was made but no response was received')
        console.log(error.request);
      } else {
        console.log('Something happened in setting up the request that triggered an Error')
        console.log('Error', error.message);
      }
  
    });

  },

  async fetchCategory ({ commit }) {
    const config =  getApiConfig();
    await axios.get('/restaurant/api/categories', config)
    .then(function (response) {
      // console.log("Status "+response.status);
      // console.log(response.data)
      commit('setCategory', response.data)
    })
    .catch(function (error) {
      if (error.response) {
        console.log('Request made and server responded')
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log('The request was made but no response was received')
        console.log(error.request);
      } else {
        console.log('Something happened in setting up the request that triggered an Error')
        console.log('Error', error.message);
      }
  
    });

  },

  async fetchFoodCategory ({ commit }) {

    const config =  getApiConfig();
    await axios.get('/restaurant/api/foodCategories', config)
    .then(function (response) {
      console.log("Status "+response.status);
      console.log(response.data)
      commit('setFoodCategory', response.data)
    })
    .catch(function (error) {
      if (error.response) {
        console.log('Request made and server responded')
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log('The request was made but no response was received')
        console.log(error.request);
      } else {
        console.log('Something happened in setting up the request that triggered an Error')
        console.log('Error', error.message);
      }
  
    });
  },

  async fetchToppings ({ commit }) {
    const config =  getApiConfig();
    await axios.get('/restaurant/api/toppings', config)
    .then(function (response) {
      console.log("Status "+response.status);
      console.log(response.data)
      commit('setToppings', response.data)
    })
    .catch(function (error) {
      if (error.response) {
        console.log('Request made and server responded')
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log('The request was made but no response was received')
        console.log(error.request);
      } else {
        console.log('Something happened in setting up the request that triggered an Error')
        console.log('Error', error.message);
      }
  
    });
  },

  async addRestaurants ({ commit }, restaurant) {
    // const config =  getApiConfig();
    // console.log('Test value '+restaurant.deliveryAreas)
    await axios.post('/restaurant/api/restaurants', restaurant)
    .then(function (response) {
      console.log("Status:- "+response.status);
      console.log("Result Value:- "+response.data)
    })
    .catch(function (error) {
      if (error.response) {
        console.log('Request made and server responded')
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log('The request was made but no response was received')
        console.log(error.request);
      } else {
        console.log('Something happened in setting up the request that triggered an Error')
        console.log('Error', error.message);
      }
  
    });
  },

  async addMenuItems ({ commit }, menu) {
    
    const config =  getApiConfig();
    await axios.post('/restaurant/api/menuItems', menu, config)
    .then(function (response) {
      console.log("Status:- "+ response.status);
      console.log("Result Value:- "+response.data)
    })
    .catch(function (error) {
      if (error.response) {
        console.log('Request made and server responded')
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log('The request was made but no response was received')
        console.log(error.request);
      } else {
        console.log('Something happened in setting up the request that triggered an Error')
        console.log('Error', error.message);
      }
  
    });
  },

  async addFile ({ commit, state }, file){
    const config =  getApiConfig();
    console.log(config);
    await axios.post('/restaurant/api/restaurant/files', file, config)
    .then(function (response) {
      // console.log("Status:- "+response.status);
      // console.log(response.data.fileId);
      state.fileId = ''
      commit('setFileId',response.data.fileId)
    })
    .catch(function (error) {
      if (error.response) {
        console.log('Request made and server responded')
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log('The request was made but no response was received')
        console.log(error.request);
      } else {
        console.log('Something happened in setting up the request that triggered an Error')
        console.log('Error', error.message);
      }
  
    });
  },

  async addCategoryFile ({ commit, state }, file){
    const config =  getApiConfig();
    console.log(config);
    await axios.post('/restaurant/api/category/files', file, config)
    .then(function (response) {
      state.fileId = ''
      commit('setFileId',response.data.fileId)
    })
    .catch(function (error) {
      if (error.response) {
        console.log('Request made and server responded')
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log('The request was made but no response was received')
        console.log(error.request);
      } else {
        console.log('Something happened in setting up the request that triggered an Error')
        console.log('Error', error.message);
      }
  
    });
  },

  async addCategory ({ commit }, category ) {
    const config =  getApiConfig();
    console.log(config);
    await axios.post('/restaurant/api/categories', category, config)
    .then(function (response) {
      console.log("Status:- "+response.status);
      console.log("Result Value:- "+response.data)
    })
    .catch(function (error) {
      if (error.response) {
        console.log('Request made and server responded')
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log('The request was made but no response was received')
        console.log(error.request);
      } else {
        console.log('Something happened in setting up the request that triggered an Error')
        console.log('Error', error.message);
      }
  
    });
  },

  async addFoodCategory ({ commit }, foodCategoryList) {
    const response = await axios.post('http://localhost:3000/foodCategory', foodCategoryList)
    commit('addNewFoodCategory', response.data)
  },

  async addToppings ({ commit }, toppingsList) {
    const response = await axios.post('http://localhost:3000/toppings', toppingsList)
    commit('addNewToppings', response.data)
  },

  async deleteRestaurant ({ commit }, id) {
    await axios.delete(`http://localhost:3000/restaurants/${id}`)
    commit('removeRestaurant', id)
  }

}

const mutations = {
  setRestaurants: (state, restaurants) => (
    state.restaurants = restaurants
  ),
  setImage: (state,image)=>(
    state.image = image
  ),
  setFileId: (state, fileId) =>(
    state.fileId = fileId
  ),
  setCategory: (state, category) => (
    state.category = category
  ),
  setFoodCategory: (state, foodCategory) => (
    state.foodCategory = foodCategory
  ),
  setToppings: (state, toppings) => (
    state.toppings = toppings
  ),
  addNewRestaurant: (state, restaurant) => state.restaurants.unshift(restaurant),
  addNewCategory: (state, categoryList) => state.category.unshift(categoryList),
  addNewFoodCategory: (state, foodCategoryList) => state.foodCategory.unshift(foodCategoryList),
  addNewToppings: (state, toppingsList) => state.toppings.unshift(toppingsList)
}

export default {
  state,
  getters,
  actions,
  mutations
}
