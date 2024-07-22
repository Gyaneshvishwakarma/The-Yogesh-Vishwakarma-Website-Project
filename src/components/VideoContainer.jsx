import React from 'react'

const VideoContainer = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Top Watched YouTube Videos</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="w-full md:w-1/3 p-2">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/S-9KmvyK_1A"
                frameBorder="0"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-2">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/izCzsJyAjoI"
                frameBorder="0"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-2">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/m-q9IxO4jsU"
                frameBorder="0"
                allowFullScreen
                className="rounded-lg w-100 pb-10"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </section>
  )
}

export default VideoContainer