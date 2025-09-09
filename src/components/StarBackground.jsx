import React from 'react'

function StarBackground() {
    const[stars, setStars] = React.useState([])
    const[Meteors, setMeteors] = React.useState([]);
    React.useEffect(() => {
        generateStars();
        generateMeteors();
        const handleResize = () => {
            generateStars();
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 7777);
         // Adjust the divisor to control density
         
        const newStars = [];
        

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 4 + 1, // Random size between 1 and 4
                x: Math.random() * 100, // Random x position
                y: Math.random() * 100, // Random y position
                opacity: Math.random() * 0.5 + 0.5, // Random opacity between 0.5 and 1
                animationDuration: Math.random() * 4 + 2 // Random duration between 2 and 6 seconds
            })
        }
        setStars(newStars);
    }
 const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };


  return (
    <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
        {stars.map(star => (
            <div key={star.id} className='star animate-pulse-subtle' style={
                {
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    left: `${star.x}%`,
                    top: `${star.y}%`,
                    opacity: star.opacity,
                    animationDuration: `${star.animationDuration}s`
                }
            }  />

            
        ))}

         {Meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 1.1 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  )
}

export default StarBackground