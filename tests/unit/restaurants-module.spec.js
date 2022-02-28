import RestaurantModule from '../../src/store/modules/restaurants-module'
import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import { getApiConfig } from "../../src/services/apiConfig"
const localVue = createLocalVue()
localVue.use(Vuex)

jest.mock("axios", () => ({
  get: () => Promise.resolve({ data: {
    name: 'test name',
    email: 'test@gmail.com'
  }})
}));

test("Testing the restaurant-module 'fetchRestaurants' action and the corrosponding mutations and getters", async () => {
  const storeConfig = RestaurantModule
  const store = new Vuex.Store(storeConfig)
  const data = {
    name: 'test name',
    email: 'test@gmail.com'
  };
  await store.dispatch('fetchRestaurants')
  expect(store.getters.restaurantList)
    .toEqual(data)

})
test("Testing the users-module 'addRestaurants' action and getters", async () => {
    const storeConfig = RestaurantModule
    const store = new Vuex.Store(storeConfig)
    const config =  getApiConfig();
    const item = {
        "name": "Ervin Howell1",
        "email": "Shanna@melissa1.tv"
    }
    const result = await store.dispatch('addRestaurants',item, config)
    expect(result)
      .toHaveBeenCalledTimes(1)
})
