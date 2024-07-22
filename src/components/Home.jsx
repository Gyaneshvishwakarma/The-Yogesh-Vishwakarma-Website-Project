import React from 'react';
import Cards from './Cards'; 
import VideoContainer from './VideoContainer'
import AboutContainer from './AboutContainer'
import ImageSlider from './ImageSlider';
import BlogSection from './BlogSection';
import CTASection from './CTASection';


const Home = () => {
  return (
<>
<ImageSlider />
<AboutContainer />
<BlogSection />
<CTASection />
<Cards />
<VideoContainer />


    </>    
  );
};

export default Home;
