import React from 'react'
import RecipeContainer from '../containers/RecipeContainer'
import {Switch,Route} from 'react-router-dom'
import NewRecipeForm from './recipes/NewRecipeForm';
import UploadImage from './recipes/UploadImage'
import RecipeShow from './recipes/RecipeShow'
import Signup from './user/Signup'
import Login from './user/Login'
import UpdateRecipeForm from './recipes/UpdateRecipeForm'

export const Routes = () => (
  <div>
    <Switch>
      
      <Route
        exact
        path={"/recipes/:recipeId"}
        render={(showProps) => <RecipeShow {...showProps} />}
      />
      <Route exact path={"/new_recipe"} render={() => <NewRecipeForm />} />
      <Route
        exact
        path={"/sign_up"}
        render={(routeProps) => <Signup {...routeProps} />}
      />
      <Route
        exact
        path={"/login"}
        render={(routeProps) => <Login {...routeProps} />}
      />
      <Route
        exact
        path={"/recipes/:recipeId/upload_image"}
        render={(props) => (
          <UploadImage props={props} recipeId={props.match.params.recipeId} />
        )}
      />

      \\TODO: Fix routing between edit and recpie show
      {/* <Route
        exact
        path={"/recipes/:recipeId/edit"}
        render={(props) => (
          <UpdateRecipeForm props={props} />
        )}
      /> */}

      <Route path={"/"} render={() => <RecipeContainer />} />
    </Switch>
  </div>
);
	
export default Routes;