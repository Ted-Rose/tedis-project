import './App.scss';

import Header from './Header';

import Content from './Content';

import Footer from './Footer';


function App() {
  return (
    <div className="box">
          <Header />
          <hr className='line'></hr>
          <Content />
          <Footer />
    </div>
  );
}

export default App;
