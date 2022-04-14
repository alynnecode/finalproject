
import React from 'react';
import Mainmenu from './components/mainmenu';
import './App.css';
import Container from './components/StarContainer';
import Burgermenu from './components/burgermenu';
import Drinksmenu from './components/drinksmenu';
import Sidesmenu from './components/sidesmenu';
import Navbar from './components/navbar';
import Orderform from './components/orderform';

import {
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link, 
  useRouteMatch}
   from 'react-router-dom';



  
  
  export default function App () {
  
  const posts = [
  
  { 
  id: 1, 
  title: 'My first post',
  date: '4-20-22',
  content: 'This is my first post!'
  },

  { 
    id: 2, 
    title: 'My second post',
    date: '4-21-22',
    content: 'This is my second post!'
    },

    { 
      id: 3, 
      title: 'My third post',
      date: '4-22-22',
      content: 'This is my third post!'
      }
    

  ];
  
  const drinks = [

    { 
      id: 4, 
      title: 'Drinks',
      date: 'Sprite',
      content: 'I love sprite'
      }
    
  ]

  return (

  

    <Router>
  <Navbar/>
  <Orderform/>


 {/*
    
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/burgermenu">Burger Menu</Link>
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
          <li>
            <Link to="/posts">Post</Link>
          </li>

        
          <li>
            <Link to="/mainmenu">Main Menu</Link>
          </li>

                  
          <li>
            <Link to="/sidesmenu">Sides Menu</Link>
          </li>
        
          <li>
            <Link to="/drinksmenu">Drinks Menu</Link>
          </li>

        </ul>
        
 */}

        <Switch>


          <Route path="/posts">
            <Posts posts={posts} />
            </Route>

            <Route path="/friends">
            <Friends names={['Tom','Mike', 'Esperanza']} />
            </Route>

            <Route path='/'>
            <Home />
            </Route>
        </Switch>

        <Route path='/mainmenu'>
            <Mainmenu />
            </Route>

            <Route path='/burgermenu'>
            <Burgermenu />
            </Route>
      
            <Route path='/drinksmenu'>
            <Drinksmenu />
            </Route>
      
            
            <Route path='/sidesmenu'>
            <Sidesmenu />
            </Route>
      
      
      {/*</div> */}
    </Router>
  );
  }

  function Home() {
    return 
    <h2>Home</h2>



    
  }

  function Friends(props) {
    const { names } = props;
    return (
    <div>
      <ul>
        <li>
          {names.map((friend, index) => (
            <li key ={index} > {friend}  </li>

          ))}
        </li>
      </ul>
    </div>)
  }

  function Posts({ posts }) {
    const match = useRouteMatch();
    const findPostById = (id) =>
    posts.filter((posts) => posts.id == id)


    return (
      <div>
        <h2>Posts</h2>
        <ul>
          {posts.map((post, index) => {
            return (
              <li key={index}>
                <Link to={`${match.url}/${post.id}`}>
                  {post.title}
                  </Link>
                  </li>
            );
          })}
        
          </ul>
          
          <Switch>
            <Route path ={`${match.path}/:postId`}
            render={(props) => (
              <Post
              {...props}
              data={findPostById(props.match.params.postId)}
              />
            )}
            />

            <Route path={match.path}>
              <h3>Please select a post</h3>
             
            </Route>
          </Switch>
      </div>
    )
    
    
   
  }

  function Post(props) {
  const {data} = props;
  return (
    <div>
    <h3>{data.title}</h3>
    <h4>{data.date}</h4>
    <p>{data.content}</p>
    </div>
  )
  }