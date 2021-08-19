import { GetData, PostData } from '../../utils'
import { Action } from '.'

 
export const onGetProducts = (payload) => async(dispatch) => {

    try {

        const response = await GetData('/');
        
         dispatch({ type:  Action.LANDING_PRODUCTS, payload: response.data });
 
      
    } catch (err) {
      console.log(err)
    }

  };
 