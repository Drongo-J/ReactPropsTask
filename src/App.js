import React from 'react';
import MyCarousel from './components/MyCarouselComponent/MyCarousel';
import Header from './components/HeaderComponent/Header';
import Feedbacks from './components/FeedbacksComponent/Feedbacks';

function App() {
    return (
        <div>
            <Header></Header>
            <MyCarousel></MyCarousel>
            <Feedbacks></Feedbacks>
        </div>
    );
}

export default App;
