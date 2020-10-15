//feature1
import React from 'react';
import data from './data.json';
import { render } from '@testing-library/react';
import Products from './components/Products';
import Filter from './components/Filter';



class App extends React.Component{
 render(){
   return(
     <Provider store = {store}>
       <BrowserRouter>
       <div className = "grid-container">
         <header>
           <Link to = "/">React Shopping Cart</Link>
           <Link to = "/admin">Admin</Link>
         </header>
         <main>
           <Route path = "/admin" component = {AdminScreen}/>
           <Route path = "/" component = {HomeScreen} exact/>

         </main>
         <footer>All right is reserved.</footer>
       </div>
       </BrowserRouter>
     </Provider>
   );
 }
}

export default App;
