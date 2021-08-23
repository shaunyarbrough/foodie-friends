//TODO: Style the navbar

import React from 'react';
import {Link} from 'react-router-dom'

const NavigationBar = (props) => {
    if(!props.logged_in && !props.userId){
        return (
          <div class="bg-blue-dark">
            <div class="mr-8">
                <div class="text-white">My Recipe Cookbook</div>
            </div>
            <div class="ml-8">
              <Link to="/recipes">
                <div class="text-white">Recipes</div>
              </Link>
              <Link to="/sign_up">
                <div class="text-white">Sign Up</div>
              </Link>
              <Link to="/login">
                <div class="text-white">Login</div>
              </Link>
            </div>
          </div>
        );
    }else{
        return (
          <div class="bg-blue-dark">
              <div class="mr-8">
                  <div class="text-white">My Recipe Cookbook</div>
              </div>
                <div class="ml-8">
                    <Link to="/recipes">
                        <div class="text-white">Recipes</div>
                    </Link>
                    <Link to={`/users/${props.userId}/recipes/new_recipe`}>
                        <div class="text-white">Create Recipe</div>
                    </Link>
                    <Link to={`/users/${props.userId}/recipes`}>
                        <div class="text-white">My Recipes</div>
                    </Link>
                      <Link>
                        <div class="text-white"> Friends</div>
                      </Link>
                      <Link>
                        <div className="text-white"> Inbox</div>
                      </Link>
                </div>
                <div class="text-white ">
                  <button onClick={props.handleLogout}>Logout</button>
                </div>
          </div>
        );
        
    }
    
}

export default NavigationBar;